import { createTransport } from "nodemailer";

async function send(receiver, subject, message) {
  let transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.MAIL,
      pass: process.env.PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: "Amante de la Comida 🍔 <no-reply@amantedelacomida.com>",
    to: receiver,
    subject: subject,
    text: message,
  });

  return info.messageId;
}

export { send };
