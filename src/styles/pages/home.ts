import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  .main--center {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    padding: 0 10px;
  }

  .btn--create--post {
    width: 150px;

    margin-top: 20px;

    button {
      font-size: 14px;
      padding: 10px 10px;
      border-radius: 5px;
    }
  }
`
