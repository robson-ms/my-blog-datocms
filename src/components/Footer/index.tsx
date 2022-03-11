import Image from 'next/image'
import { Container } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
        <div className='footer--area' >
          <p>@ Todos os direitos autorais</p>
        </div>
    </Container>
  )
}

export default Header