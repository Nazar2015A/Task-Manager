const UserModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const uuid = require("uuid");
const mailService = require("./mail-service");
const tokenService = require("./token-service");
const UserDto = require("../dtos/user-dto");
const ApiError = require("../exeptions/api.error");

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })
      .populate("tasks")
      .exec();
    if (candidate) {
      throw ApiError.BadRequest("User is already registered!");
    }
    const hashPassword = await bcrypt.hash(password, 7);
    const activationLink = uuid.v4();
    const user = await UserModel.create({
      email,
      password: hashPassword,
      activationLink,
    });

    await mailService.sendActivateMail(
      email,
      `${process.env.API_URL}/api/activate/${activationLink}`
    );
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async activate(activationLink) {
    const user = await UserModel.findOne({ activationLink })
      .populate("tasks")
      .exec();
    if (!user) {
      throw ApiError.BadRequest("Unccorect link of activation!");
    }
    user.isActivated = true;
    await user.save();
  }

  async login(email, password) {
    const user = await UserModel.findOne({ email }).populate("tasks").exec();
    if (!user) {
      throw ApiError.BadRequest("User with this email is not registered!");
    }
    const isPassEquals = await bcrypt.compare(password, user.password);
    if (!isPassEquals) {
      throw ApiError.BadRequest("Unccorect password!");
    }
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async logout(refreshToken) {
    const token = await tokenService.removeToken(refreshToken);
    return token;
  }

  async refresh(refreshToken) {
    if (!refreshToken) {
      console.log("FIRST");
      console.log("refreshToken", refreshToken);
      throw ApiError.UnauthorizedError();
    }

    const userData = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await tokenService.findToken(refreshToken);
    if (!userData || !tokenFromDb) {
      console.log("SECOND");
      console.log("userData", userData);
      console.log("tokenFromDb", tokenFromDb);
      throw ApiError.UnauthorizedError();
    }
    const user = await UserModel.findById(userData.id).populate("tasks").exec();
    const userDto = new UserDto(user);
    const tokens = tokenService.generateTokens({ ...userDto });

    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return {
      ...tokens,
      user: userDto,
    };
  }

  async forgotPassword(email) {
    const candidate = await UserModel.findOne({ email: email });

    if (!candidate) {
      throw ApiError.BadRequest("User not found!");
    }
    const userDto = new UserDto(candidate);
    const tokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);
    await mailService.sendActivateMail(
      email,
      `${process.env.CLIENT_URL}/reset-password/${userDto.email}/${tokens.accessToken}`
    );
    return candidate;
  }

  async resetPassword(email, token, password) {
    const userData = tokenService.validateAccessToken(token);
    if (!userData) {
      throw ApiError.BadRequest("Token is invalid!");
    }
    const hashedPassword = await bcrypt.hash(password, 7);
    const updatedUser = await UserModel.findOneAndUpdate(
      { email: email },
      { password: hashedPassword }
    );

    return updatedUser;
  }
}

module.exports = new UserService();
