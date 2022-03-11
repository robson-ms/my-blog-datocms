import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shade } from 'polished';

interface IProps {
  color?: string;
  cursor: 'pointer' | 'not-allowed';
}

interface IPropsStatus {
  color?: string;
}

export const ButtonCustom = styled.button<IProps>`
  width: 100%;
  padding: 10px 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-size: 16px;

  ${Props =>
    Props.color === 'default' &&
    css`
      background: #999;
      color: #fff;

      &:hover {
        background: ${shade(0.3, '#999')};
      }
    `}
  
  ${Props =>
    Props.color === 'primary' &&
    css`
      background: #17204b ;
      color: #fff;

      &:hover {
        background: ${shade(0.3, '#17204b')};
      }
    `}

  ${Props =>
    Props.color === 'secondary' &&
    css`
      background: #39d6b4;
      color: #fff;

      &:hover {
        background: ${shade(0.2, '#39d6b4')};
      }
    `}

  ${Props =>
    Props.color === 'danger' &&
    css`
      background: #df8350;
      color: #fff;

      &:hover {
        background: ${shade(0.3, '#df8350')};
      }
    `}

  ${Props =>
    Props.cursor === 'pointer' &&
    css`
      cursor: pointer;
    `}

  ${Props =>
    Props.cursor === 'not-allowed' &&
    css`
      cursor: not-allowed;
    `}
`;

export const ButtonStatus = styled.button<IPropsStatus>`
  width: auto;
  padding: 2px 15px;
  font-size: 14px;
  border: none;
  color: #fff;
  border-radius: 5px;
  transition: background-color 0.2s;
  cursor: default;

  ${Props =>
    Props.color === 'paid' &&
    css`
      background: #4aa96c;
    `}

  ${Props =>
    Props.color === 'agreed' &&
    css`
      background: #4aa96c;
    `}

  ${Props =>
    Props.color === 'active' &&
    css`
      background: #4aa96c;
    `}

  ${Props =>
    Props.color === 'success' &&
    css`
      background: #4aa96c;
    `}

  ${Props =>
    Props.color === 'renew' &&
    css`
      background: #688053;
    `}

  ${Props =>
    Props.color === 'finished' &&
    css`
      background: #688053;
    `}

  ${Props =>
    Props.color === 'delayed' &&
    css`
      background: #bb371a;
      color: #fff;
    `}

  ${Props =>
    Props.color === 'denied' &&
    css`
      background: #ff3333;
    `}

  ${Props =>
    Props.color === 'canceled' &&
    css`
      background: #444444;
    `}

  ${Props =>
    Props.color === 'refunded' &&
    css`
      background: #999;
    `}

  ${Props =>
    Props.color === 'expired' &&
    css`
      background: #999;
    `}

  ${Props =>
    Props.color === 'scheduled' &&
    css`
      background: #e2b213;
    `}

  ${Props =>
    Props.color === 'pending' &&
    css`
      background: #e2b213;
    `}

  ${Props =>
    Props.color === 'danger' &&
    css`
      background: #ff3333;
    `}
`;

export const ContainerAuth = styled.button`
  padding: 20px 30px;
  border-radius: 8px;
  color: #fff;
  background: black;
  font-size: 20px;
  border: none;
`;