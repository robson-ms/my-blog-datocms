import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Backdrop from './backdrop'
import { ContainerModal } from './styles'
import { width } from '@mui/system'

type ModalType = {
  setOpenModal: any
  status: boolean
  children: any
  maxWidth: string
}

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.3,
      type: 'string',
      damping: 25,
      stiffness: 500
    }
  },
  exit: {
    y: '-100vh',
    opacity: 0
  }
}

const Modal: React.FC<ModalType> = ({
  setOpenModal,
  status,
  children,
  maxWidth
}) => {
  return (
    <>
      {status && (
        <Backdrop onClick={() => setOpenModal(!status)}>
          <ContainerModal
            as={motion.div}
            maxWidth={maxWidth}
            onClick={(e: any) => e.stopPropagation()}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {children}
          </ContainerModal>
        </Backdrop>
      )}
    </>
  )
}

export default Modal
