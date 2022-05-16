import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "baa190dc028cba",
    pass: "d4296ff271c238"
  }
});

export class NodemailMailAdapter implements MailAdapter {
 async sendMail({ subject, body }: SendMailData) {
   await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Renan Borges <renanvcb@gmail.com>',
    subject,
    html: body,
  });
 }
}