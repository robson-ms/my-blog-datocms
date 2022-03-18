import React from "react";
import Input from "../Input";
import Button from "@mui/material/Button";
import { phoneMask } from "../../utils/mask";
import { useFormik } from "formik";
import { sendContactSchema } from "../../validations";
import { sendContactMail } from "../../services/sendEmail";

import { Container, Grid } from "./styles";
import { toast } from "react-toastify";

type IContact = {
  name: string;
  phone: string;
  senderMail: string;
  content: string;
};

const ContactForm: React.FC = () => {
  function handleSubmitContact(values: any, resetForm: any) {
    sendContactMail(values);

    toast.success(`Enviado com sucesso`);
    resetForm();
  }
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      senderMail: "",
      content: "",
    },
    validationSchema: sendContactSchema,
    onSubmit: (values: IContact, { resetForm }) => {
      handleSubmitContact(values, resetForm);
    },
  });

  return (
    <Container>
      <div id="contact" className="form--area">
        <h1 className="title">Entre em contato</h1>
        <form onSubmit={formik.handleSubmit}>
          <Grid grid={2}>
            <Input
              label="Nome"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.errors.name}
            />
            <Input
              label="Telefone"
              name="phone"
              value={phoneMask(formik.values.phone)}
              onChange={formik.handleChange}
            />
          </Grid>

          <Grid grid={1}>
            <Input
              label="E-mail"
              name="senderMail"
              value={formik.values.senderMail}
              onChange={formik.handleChange}
              error={formik.errors.senderMail}
            />
          </Grid>

          <Grid grid={1}>
            <Input
              label="Mensagem"
              rows={6}
              multiline
              name="content"
              value={formik.values.content}
              error={formik.errors.content}
              onChange={formik.handleChange}
            />
          </Grid>

          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default ContactForm;
