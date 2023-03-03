import { IEmailRequest } from "./../interfaces/email.interface";
import { Request, Response } from "express";
import emailRoute from "../routes/mail.route";
import { sendEmail } from "../utils/mailer.util";

export const mailerController = async (req: Request, res: Response) => {
  const { to, subject, text }: IEmailRequest = req.body;

  await sendEmail({ to, subject, text });

  return res.json({
    message: "Email successfully sent",
  });

  /* try {
    const { host, subject, text, to, user, pass }: IEmailRequest = req.body;

    await sendEmail({ host, subject, text, to, user, pass });
    return res.json({
      message: "Email sended with success!",
    });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({
        message: error.message,
      });
    }
  } */
};
