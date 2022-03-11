import { Container } from './styles'

export interface IMageUrl {
  url: string
}

export interface IPosts {
  id: string
  title: string
  content: string
  image: IMageUrl
  visible: boolean
}

export interface IPost {
  post: IPosts
}

const Card: React.FC<IPost> = ({ post }) => {
  return (
    <>
      <Container>
        <div className="header">
          <h1>{post.title}</h1>
        </div>
        <div className="descriptions">
          <div className="container--image">
            <img src={post.image.url} alt="#" />
          </div>
          <div className="container--content">
            <p>{post.content}</p>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Card
