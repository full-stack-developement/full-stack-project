import path from "path";
import { createTransport } from "nodemailer";
import "dotenv/config";
import { IEmailRequest } from "../interfaces/email.interface";
import hbs from "nodemailer-express-handlebars";
import ejs from "ejs";

export const sendEmail = async ({ to, subject, text }: IEmailRequest) => {
  const transporter = createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter
    .sendMail({
      from: "maiapemaia@hotmail.com",
      to: to,
      subject: subject,
      html: text,
    })
    .then(() => {
      console.log("Email send with success");
    })
    .catch((err) => {
      console.log(err);
      throw new Error("Error sending email, try again later");
    });
};

//outra maneira de fazer
/* const { host, port, user, pass, exphbs } = require("../configs/mail.json");

export const transport = createTransport({
  host,
  port,
  auth: { user, pass },
});

transport.use(
  "compile",
  hbs({
    viewEngine: {
      extname: ".html",
      partialsDir: path.resolve("../resources/mail"),
      layoutsDir: path.resolve("../resources/mail"),
      defaultLayout: "resetPassword.html",
    },
    viewPath: path.resolve("../resources/mail"),
    extName: ".html",
  })
); */
