const Router = require("express");
const bodyValidationMiddleware = require("../../middleware/body-validation.middleware");
const userController = require("../../controllers/user-controller");
const forgotPasswordSchema = require("../../validation/forgot-password.validation");
const resetPasswordSchema = require("../../validation/reset-password.validation");

const mailRouter = new Router();

mailRouter.post("/forgot-password", [
  bodyValidationMiddleware(forgotPasswordSchema),
  userController.forgotPassword,
]);
mailRouter.post("/reset-password/:email/:token", [
  bodyValidationMiddleware(resetPasswordSchema),
  userController.resetPassword,
]);

module.exports = mailRouter;
