import { motion } from 'framer-motion'
import React from 'react'

import { Container } from './styles'

type BackdropType = {
  children: any
  onClick: any
}

const Backdrop: React.FC<BackdropType> = ({ children, onClick }) => {
  return (
    <Container
      as={motion.div}
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </Container>
  )
}

export default Backdrop
