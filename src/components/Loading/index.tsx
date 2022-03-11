import React from 'react'
import { Container } from './styles'

interface ILoading {
  height?: number
  border?: number
  color?: string
  marginTop?: number
  marginBottom?: number
}

const CircularIndeterminate: React.FC<ILoading> = ({
  height = 32,
  border = 5,
  color = '#999',
  marginTop = 0,
  marginBottom = 0
}) => {
  return (
    <Container
      height={height}
      border={border}
      marginTop={marginTop}
      marginBottom={marginBottom}
      color={color}
    >
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </Container>
  )
}

export default CircularIndeterminate
