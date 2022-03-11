import React, { ButtonHTMLAttributes } from 'react'

import { ButtonCustom } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'default' | 'primary' | 'secondary' | 'danger'
  cursor?: 'pointer' | 'not-allowed'
  loading?: boolean
}

const CustomButton: React.FC<ButtonProps> = ({
  children,
  color = 'default',
  loading = false,
  cursor = 'pointer',
  ...rest
}) => {
  const Loading = 'Carregando...'
  return (
    <ButtonCustom {...rest} color={color} cursor={cursor}>
      {loading ? Loading : children}
    </ButtonCustom>
  )
}

export default CustomButton
