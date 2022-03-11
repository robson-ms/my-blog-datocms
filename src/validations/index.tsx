import * as Yup from 'yup'

export const sendContactSchema = Yup.object().shape({
  name: Yup.string().required('Favor informar.'),
  senderMail: Yup.string().required('Favor informar.'),
  content: Yup.string().required('Favor, deixe uma mensagem.')
})
