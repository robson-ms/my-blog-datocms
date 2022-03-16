import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { phoneMask } from "../../utils/mask";
import { NextApiRequest, NextApiResponse } from "next";

const email = process.env.NEXT_MAILADRESS;

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.NEXT_SENDGRID_API_KEY,
    },
  })
);

async function ContactForm(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { senderMail, name, phone, content } = req.body;

    if (!senderMail.trim() || !name.trim() || !content.trim()) {
      return res.status(403).send("");
    }

    const message = {
      from: email,
      to: email,
      subject: `Nova mensagem de contato - ${name}`,
      html: `
            <div 
              style="
                border: 1px solid #ddd; 
                border-radius: 10px; 
                width: 99%;
                font-family: Arial, sans-serif; font-size: 14px; color: #2e2e2e;
              ">
            <div
              style=" 
                display: flex; 
                justify-content: center; 
                align-items: center;
                padding-left: 30px;
                background: #2e2e2e;
                color: #fff;
                font-size: 12px;
                border-top-left-radius: 10px;
                border-top-right-radius: 10px;
              ">
              <h1>Novo contato</h1>
            </div>
            <table border="0" color  cellpadding="0" cellspacing="0" width="100%" style="padding: 20px;  ">
            <tr>
              <td style="padding-top: 5px">
                <b>Nome:</b> ${name}
              </td>
            </tr>
            <tr>
              <td style="padding-top: 5px">
                <b>Telefone:</b> ${phoneMask(phone)}
              </td>
            </tr>
            <tr>
              <td style="padding-top: 5px">
              <b>E-mail:</b> ${senderMail}
              </td>
            </tr>
            <tr>
              <td style="padding-top: 10px; font-weight: bolder;">
                Mensagem:
              </td>      
            </tr> 
              <td style="padding-top: 5px">
              ${content}
              </td>
            </tr>
          </table>
          </div>
      `,
      replyTo: senderMail,
    };

    transporter.sendMail(message);

    return res.send("");
  } catch (err: any) {
    return res.json({
      error: true,
      message: err.message,
    });
  }
}

export default ContactForm;
