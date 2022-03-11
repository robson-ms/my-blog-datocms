import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  background-color: var(--secondary);

  @media only screen and (max-width: 780px) {
    background-color: #fff;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  padding: 80px 10px;

  h1 {
    font-size: max(20px, min(28px, 2vw));
    color: #fff;
    margin-bottom: 30px;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
    width: 100%;
  }

  .content {
    display: flex;
    background: #fff;
    width: 100%;
    align-items: center;
    border-radius: 10px;
    padding: 2px;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
    transition: all ease 0.2s;

    :hover {
      transform: translateY(-5px);
    }
  }

  .descriptions {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: var(--gray-100);
    flex: 1;

    h2 {
      font-size: 20px;
    }

    p {
      color: var(--gray-100);
      font-size: 16px;
      word-wrap: break-word;
    }
  }

  .img--content {
    display: flex;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 12px;
    border: 4px solid #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 780px) {
    background-color: var(--secondary);
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    padding: 20px 10px 50px;

    h1 {
      display: flex;
      width: 100%;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 30px;
    }

    .grid {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`
