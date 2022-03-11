import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'

export const IconDelete = styled(DeleteForeverIcon)`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  padding: 10px;
  fill: #999;
  transition: all ease 0.2s;
  cursor: pointer;

  :hover {
    background-color: #eee;
    fill: #d82148;
  }

  @media only screen and (max-width: 740px) {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
`

export const IconEdit = styled(EditIcon)`
  display: flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid #ddd;
  padding: 10px;
  fill: #999;
  transition: all ease 0.2s;
  cursor: pointer;

  :hover {
    background-color: #eee;
    fill: var(--secondary);
  }

  @media only screen and (max-width: 740px) {
    width: 35px;
    height: 35px;
    padding: 5px;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  color: var(--black);
  margin-top: 50px;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    h1 {
      font-size: max(20px, min(28px, 2vw));
    }

    .btn--area {
      display: flex;
      svg + svg {
        margin-left: 12px;
      }
    }
  }

  .descriptions {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 20px;
    margin-top: 10px;

    p {
      font-size: 18px;
      line-height: 25px;
      color: var(--gray-70);
    }
  }

  .container--image {
    display: flex;
    width: 450px;
    height: 300px;
    justify-content: center;
    overflow: hidden;
    border-radius: 15px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 767px) {
    margin-top: 20px;
    .header h1 {
      font-size: 20px;
    }

    .descriptions {
      grid-template-columns: 1fr;
      gap: 0;

      p {
        margin-top: 5px;
        font-size: 14px;
        line-height: 20px;
      }
    }

    .container--image {
      width: 100%;
      height: 200px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`

export const ContainerModal = styled.div`
  width: 100%;
  .btn--area {
    display: flex;
    margin-top: 40px;

    button + button {
      margin-left: 12px;
    }
  }

  @media only screen and (max-width: 380px) {
    h3 {
      font-size: 16px;
    }

    .btn--area {
      display: flex;
      margin-top: 20px;

      button + button {
        margin-left: 12px;
      }

      button {
        font-size: 14px;
      }
    }
  }
`
