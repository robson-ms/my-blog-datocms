import axios from 'axios'
import { toast } from 'react-toastify'

type IContact = {
  name: string
  phone: string
  senderMail: string
  content: string
}

export const sendContactMail = async (data: IContact) => {
  try {
    await axios.post('/api/contact', data)
    toast.success('Enviado com sucesso!')
  } catch (error) {
    toast.error('Erro ao enviar!')
  }
}
