const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
        method: "LOGIN",
      },
    });
  }
  async sendActivateMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Please activate your account on ${process.env.API_URL}!`,
      text: "",
      html: `
            <div>
                <h1>For activation please link on this link</h1>
                <a href="${link}">${link}</a>
            </div>
        `,
    });
  }

  async sendRestorePassword(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Please activate your account on ${process.env.API_URL}!`,
      text: "",
      html: `
            <div>
                <h1>For restore your password please link on this link</h1>
                <a href="${link}">${link}</a>
            </div>
        `,
    });
  }
}

module.exports = new MailService();
