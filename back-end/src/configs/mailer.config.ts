import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email.interface";
import "dotenv/config";

const sendEmail = async ({
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
