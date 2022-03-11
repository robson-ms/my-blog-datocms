import Button from '../Button'
import { Container, Content } from './styles'
import Router from 'next/router'
import Link from 'next/link'

const SignIn: React.FC = () => {
  const handleHomePage = () => {
    Router.push('/')
  }

  return (
    <Container>
      <Content>
        <span>Next landing page</span>
        <h1>Login Admin</h1>
      </Content>
    </Container>
  )
}

export default SignIn
