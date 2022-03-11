import React, { ButtonHTMLAttributes } from 'react';

import { ButtonStatus } from './styles';

type IPropsStatus = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
    | 'paid'
    | 'delayed'
    | 'denied'
    | 'cancel'
    | 'scheduled'
    | 'finished'
    | 'refunded'
    | string;
};

const BtnStatus: React.FC<IPropsStatus> = ({
  children,
  color = 'scheduled',
  ...rest
}) => {
  return (
    <ButtonStatus {...rest} color={color}>
      {children}
    </ButtonStatus>
  );
};

export default BtnStatus;
