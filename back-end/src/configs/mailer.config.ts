import path from "path";
import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import "dotenv/config";

const { host, port, user, pass, exphbs } = require("../configs/mail.json");

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
);

/* const sendEmail = async ({
  host,
  subject,
  text,
  to,
  user,
  pass,
}: IEmailRequest) => {
  const transporter = createTransport({
    host,
    port: 587,
    secure: false,
    auth: { user, pass },
  });

  await transporter
    .sendMail({
      from: process.env.SMTP_USER,
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

export { sendEmail };
 */
