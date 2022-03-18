import axios from "axios";

type IContact = {
  name: string;
  phone: string;
  senderMail: string;
  content: string;
};

export const sendContactMail = async (data: IContact) => {
  console.log("ser", data);
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  console.log("response", response);

  const res = await response.json();

  if (!res.ok) {
    console.log("erro");
  } else {
    console.log("OK");
  }
};
