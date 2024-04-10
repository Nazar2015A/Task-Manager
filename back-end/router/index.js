// const roleMiddleware = require("../middleware/role-middleware");

const authMiddleware = require("../middleware/auth-middleware");
const authRouter = require("./auth/auth.router");
const mailRouter = require("./mail/mail.router");
const taskRouter = require("./task/task.router");

class AppRouter {
  constructor(app) {
    this.app = app
  }

  init() {
    this.app.get("/", (_req, res) => {
      res.send("API Running");
    });
    this.app.use("/task", authMiddleware, taskRouter);
    this.app.use("/mail", mailRouter);
    this.app.use("/auth", authRouter);
  }
}

module.exports = AppRouter;
