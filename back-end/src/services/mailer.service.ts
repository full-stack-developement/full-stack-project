import { sendEmail } from "../utils/mailer.util";
import { IEmailRequest } from "./../interfaces/email.interface";

export const mailerService = async ({
  to,
  subject,
  text,
}: IEmailRequest): Promise<void> => {
  await sendEmail({ to, subject, text });
};
