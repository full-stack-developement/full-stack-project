import { IEmailRequest } from "./../interfaces/email.interface";
import { Request, Response } from "express";
import { sendEmail } from "../configs/mailer.config";

export const mailerController = async (req: Request, res: Response) => {
  try {
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
  }
};
