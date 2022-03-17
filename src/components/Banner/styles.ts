import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background: #fff;

  .banner--container {
    flex-wrap: initial;
    display: flex;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    justify-content: space-between;
    overflow: hidden;
  }

  .banner--descriptions--content {
    display: flex;
    padding-top: 250px;
    padding-left: 20px;
    padding-bottom: 50px;
  }

  .banner--descriptions {
    h1 {
      font-size: max(24px, min(48px, 3vw));
      font-weight: bold;
      color: var(--primary);
    }

    p {
      margin-top: 40px;
      max-width: 500px;
      font-size: 16px;
      line-height: 25px;
      color: var(--gray-100);
      font-family: Noto Sans, sans-serif;
    }
  }

  .image--container {
    display: flex;
    width: 100%;
    max-width: 460px;
    margin-top: 80px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  @media only screen and (max-width: 780px) {
    display: flex;
    width: 100%;
    height: 95vh;
    box-shadow: none;

    .banner--container {
      flex-wrap: wrap-reverse;
      justify-content: center;
    }

    .banner--descriptions--content {
      display: flex;
      width: 100%;
      padding-top: 0;
      padding-left: 0;
      padding-bottom: 0;

      .banner--descriptions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;

        z-index: 2;

        p {
          margin-top: 30px;
          text-align: center;
          padding: 0 10px;
        }
      }
    }

    .image--container {
      width: 100%;
      max-width: 500px;
      position: relative;
      top: 10px;

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
  }

  @media (width: 540px) and (height: 720px) {
    .image--container {
      width: 100%;
      max-width: 380px;
      position: relative;
      top: 100px;

      img {
        width: 100%;
      }
    }
  }

  @media (width: 360px) and (height: 740px) {
    .image--container {
      width: 100%;
      max-width: 300px;
      position: relative;
      top: 10px;

      img {
        width: 100%;
      }
    }
  }

  @media (width: 375px) and (height: 667px) {
    .image--container {
      width: 100%;
      max-width: 250px;
      position: relative;
      top: 10px;

      img {
        width: 100%;
      }
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
