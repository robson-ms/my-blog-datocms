import styled, { css } from 'styled-components'

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: #000000b1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`

type SizeWidth = {
  maxWidth: string
}

export const ContainerModal = styled.div<SizeWidth>`
  position: absolute;
  width: 100%;
  max-width: ${props => `${props.maxWidth}`};
  display: flex;
  align-items: center;
  margin: auto;
  padding: 20px;
  border-radius: 12px;
  background: #fff;

  @media only screen and (max-width: 768px) {
    margin: 50px;
  }
`
