import { style } from '@mui/system'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: #eff0ff;
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;

  .descriptions {
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    padding: 20px 0px 20px 10px;

    h1 {
      font-size: max(20px, min(28px, 2vw));
      margin-bottom: 20px;
      color: var(--black);
    }

    p {
      width: 90%;
      color: var(--gray-70);
      font-size: 18px;
      line-height: 28px;
    }
  }

  .image--container {
    display: flex;
    width: 40%;
    justify-content: center;
    height: 500px;
    align-items: flex-end;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      width: 100;
    }
  }

  @media only screen and (max-width: 768px) {
    position: relative;

    .image--container {
      width: 100%;
      height: 350px;
      position: absolute;
      top: 0;

      img {
        width: 60%;
      }
    }

    .descriptions {
      width: 100%;
      padding-top: 350px;

      p {
        width: 100%;
        padding-right: 20px;
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
`
