import { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";

const template_id = process.env.NEXT_SENDGRID_TREMPLATE_ID
  ? process.env.NEXT_SENDGRID_TREMPLATE_ID
  : "";

const email = process.env.NEXT_MAILADRESS ? process.env.NEXT_MAILADRESS : "";

const api_key = process.env.NEXT_SENDGRID_API_KEY
  ? process.env.NEXT_SENDGRID_API_KEY
  : "";

export default function handle(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ messege: "INVALID_METHOD" });
  }

  const { senderMail, name, phone, content } = req.body;

  if (!senderMail.trim() || !name.trim() || !content.trim()) {
    return res.status(400).json({ message: "INVALID_PARAMETER" });
  }

  const sendGridMail = {
    from: email,
    to: email,
    templateId: template_id,
    dynamic_template_data: {
      senderMail: senderMail,
      name: name,
      phone: phone,
      content: content,
    },
    replyTo: senderMail,
  };

  sgMail.setApiKey(api_key);

  sgMail
    .send(sendGridMail)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error);
    });
}
