import React from 'react'

import { Container, Content } from './styles'

interface ImageUrl {
  url: string
}

interface IService {
  id: string
  title: string
  content: string
  image: ImageUrl
}

type ServiceType = {
  services: IService[]
}

const MyServices: React.FC<ServiceType> = ({ services }) => {
  return (
    <Container>
      <Content>
        <h1>Meus serviços</h1>
        <div className="grid">
          {services.map(service => (
            <div className="content" key={service.id}>
              <div className="img--content">
                <img src={service.image.url} alt="services" />
              </div>
              <div className="descriptions">
                <h2>{service.title}</h2>
                <p>{service.content}</p>
              </div>
            </div>
          ))}
        </div>
      </Content>
    </Container>
  )
}

export default MyServices
