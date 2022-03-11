import styled, { css } from 'styled-components'

type ILds = {
  height: number
  border: number
  color: string
  marginTop: number
  marginBottom: number
}

export const Container = styled.div<ILds>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4px;
  padding-bottom: 4px;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: ${props => `${props.height}px`};
    height: ${props => `${props.height}px`};
    margin-top: ${props => `${props.marginTop}px`};
    margin-bottom: ${props => `${props.marginBottom}px`};
  }
  .lds-ring div {
    ${props => css`
      width: ${`${props.height}px`};
      height: ${`${props.height}px`};
    `}

    box-sizing: border-box;
    display: block;
    position: absolute;
    border: ${props => `${props.border}px`} solid ${props => props.color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.color} transparent transparent transparent;
  }
  .lds-ring div:nth-of-type(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-of-type(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-of-type(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
