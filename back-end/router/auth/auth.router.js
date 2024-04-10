const Router = require("express");
const bodyValidationMiddleware = require("../../middleware/body-validation.middleware");
const registrationSchema = require("../../validation/registration.validation");
const userController = require("../../controllers/user-controller");
const loginSchema = require("../../validation/login.validation");

const authRouter = new Router();

authRouter.get("/refresh", userController.refresh);

authRouter.post("/registration", [
  bodyValidationMiddleware(registrationSchema),
  userController.registration,
]);

authRouter.post("/login", [
  bodyValidationMiddleware(loginSchema),
  userController.login,
]);
authRouter.post("/logout", userController.logout);

module.exports = authRouter;
