import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  background: #fff;
  padding-top: 60px;

  .banner--container {
    display: flex;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    flex-wrap: initial;
    justify-content: space-between;
  }

  .image--container {
    max-width: 500px;
    order: 2;
    margin-bottom: -5px;

    img {
      width: 100%;
    }
  }

  .banner--descriptions {
    margin-top: 150px;
    padding: 0 10px;

    h1 {
      font-size: max(24px, min(48px, 3vw));
      font-weight: bold;
      color: var(--primary);
    }

    p {
      margin-top: 10px;
      max-width: 500px;
      font-size: 16px;
      line-height: 25px;
      color: var(--gray-100);
      font-family: Noto Sans, sans-serif;
    }
  }

  @media only screen and (max-width: 780px) {
    .banner--container {
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-wrap: initial;
      align-items: center;
    }

    .image--container {
      position: relative;
      max-width: 280px;
      order: 0;

      img {
        width: 100%;
      }

      .bg {
        position: absolute;
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 1;
        left: 0;
        top: 0;
        bottom: 0px;

        background: linear-gradient(
          0deg,
          rgba(255, 255, 255, 1) 0%,
          rgba(255, 255, 255, 0) 50%
        );
      }
    }

    .banner--descriptions {
      margin-top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;

      p {
        text-align: center;
      }
    }
  }

  //iPhone XR
  @media (width: 414px) and (height: 896px) {
    .image--container {
      max-width: 380px;
    }
  }

  //iPhone 12 pro
  @media (width: 390px) and (height: 844px) {
    .image--container {
      max-width: 380px;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  max-width: 400px;
  margin-top: 30px;
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }

  a + a {
    margin-left: 20px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 20px;
    padding: 10px 30px;
    border-radius: 8px;
    background: #fff;
    font-size: 18px;
    font-weight: bold;
    transition: all ease 0.2s;
    cursor: pointer;

    img {
      width: 20%;
      height: auto;
      margin-right: 20px;
    }
  }

  .instagram {
    color: #e24f62;

    :hover {
      background: #e24f62;
      color: #fff;
      transform: translateY(-5px);
    }
  }

  .whatsapp {
    color: #40c351;

    :hover {
      background: #40c351;
      color: #fff;
      transform: translateY(-5px);
    }
  }

  @media only screen and (max-width: 780px) {
    justify-content: center;

    button + button {
      margin-left: 10px;
    }

    button {
      font-size: 14px;
      padding: 8px 20px;

      img {
        margin-right: 10px;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    align-items: center;
    button {
      font-size: 14px;
      padding: 5px 15px;

      img {
        margin-right: 10px;
        width: 25px;
      }
    }
  }

  @media only screen and (max-width: 425px) {
    button {
      font-size: 14px;
      padding: 5px 10px;
    }
  }
`;
