import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { Container } from './styles'

const Header: React.FC = () => {
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const scrollListiner = () => {
      if (window.scrollY > 20) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }

    window.addEventListener('scroll', scrollListiner)
    return () => {
      window.removeEventListener('scroll', scrollListiner)
    }
  }, [])

  return (
    <Container background={background}>
      <div className="header--nav">
        <a href="#">
          <div className="logo">
            <img src="/logo-n.png" alt="logo" />
          </div>
        </a>

        <div className="menu">
          <ul>
            <li>
              <a href="#contact">Entrar em contato</a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  )
}

export default Header
