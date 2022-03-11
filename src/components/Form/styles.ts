import styled, { css } from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 40px;
  margin-bottom: 20px;

  .form--area {
    width: 100%;
    color: var(--gray);
    justify-content: flex-end;
    align-items: center;

    h1 {
      color: var(--gray-100);
      font-size: max(20px, min(28px, 2vw));
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      color: var(--gray);
      background: #fff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);

      button {
        background: var(--rose);
        color: #fff;
        box-shadow: none;
        font-size: 16px;
        transition: all ease 0.2s;
        margin-top: 10px;

        :hover {
          background: var(--rose-hover);
          transform: translateY(-3px);
        }
      }
    }
  }

  @media only screen and (max-width: 740px) {
    margin-top: 20px;
    margin-bottom: 0px;

    .form--area {
      h2 {
        font-size: 18px;
      }

      form {
        button {
          font-size: 14px;
        }
      }
    }
  }
`

type IGridProps = {
  grid: number
}

export const Grid = styled.div<IGridProps>`
  display: grid;
  gap: 10px;

  ${props =>
    props.grid === 1 &&
    css`
      grid-template-columns: 1fr;
    `}

  ${props =>
    props.grid === 2 &&
    css`
      grid-template-columns: 1fr 1fr;
    `}

    & + div {
    margin-top: 12px;
  }
`
