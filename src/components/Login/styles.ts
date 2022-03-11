import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  width: 100vw;
  max-width: 80%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  .credentials {
    margin-bottom: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 350px;
  padding: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  box-shadow: 0px 0px 25px rgba(0,0,0,0.1);

  button {
    font-size: 18px;
  }

  button + button {
    margin-top: 20px;
  }

  span {
    color: #999;
    margin-bottom: 10px;
  }

  h1 {
    font-size: 26px;
    margin-bottom: 20px;
    white-space: nowrap;
    color: rgba(0,0,0,0.7);
  }
`;

