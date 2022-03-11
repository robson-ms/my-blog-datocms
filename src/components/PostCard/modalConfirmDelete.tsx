import React from 'react'
import Button from '../Button'
import { ContainerModal } from './styles'
import { PostType } from '../../pages/api/posts/types'

type ConfirmeDeleteType = {
  post: PostType
  handleDelete: any
  setModalIsOpenDelete: any
}

const PostCard: React.FC<ConfirmeDeleteType> = ({
  post,
  handleDelete,
  setModalIsOpenDelete
}) => {
  return (
    <ContainerModal>
      <h3>Deseje mesmo exluir o post "{post.title}" ?</h3>
      <div className="btn--area">
        <Button color="secondary" onClick={() => setModalIsOpenDelete(false)}>
          Não
        </Button>
        <Button color="danger" onClick={handleDelete}>
          Sim
        </Button>
      </div>
    </ContainerModal>
  )
}

export default PostCard
