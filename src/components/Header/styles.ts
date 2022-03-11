import styled from 'styled-components'

type IProps = {
  background: boolean
}

export const Container = styled.div<IProps>`
  display: flex;
  position: fixed;
  height: 66px;
  width: 100%;
  background: ${props => (props.background ? '#fff' : '')};
  transition: all ease 0.2s;
  z-index: 10;

  .header--nav {
    display: flex;
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    left: 50px;
    justify-content: space-between;
    align-items: center;

    .logo {
      margin-left: 10px;
      width: 100px;

      img {
        width: 100%;
      }
    }

    .menu {
      margin-right: 50px;
      display: flex;
      align-items: center;

      ul {
        list-style: none;
        font-weight: bold;
        display: flex;
      }

      li {
        margin-left: 30px;
        border-radius: 8px;
        transition: all ease 0.2s;
        cursor: pointer;

        a {
          display: flex;
          width: 100%;
          height: 100%;
          text-decoration: none;
          white-space: nowrap;
          color: var(--primary);
          transition: all ease 0.2s;

          :hover {
            color: var(--secondary);
            transform: translateY(-3px);
          }
        }
      }

      .active {
        color: var(--secondary);
      }
    }
  }

  @media only screen and (max-width: 740px) {
    .header--nav {
      .menu {
        margin-right: 10px;

        li a {
          font-size: 14px;
        }
      }

      .button--singout button {
        font-size: 14px;
        padding: 5px 15px;
        border-radius: 5px;
      }
    }
  }
`
