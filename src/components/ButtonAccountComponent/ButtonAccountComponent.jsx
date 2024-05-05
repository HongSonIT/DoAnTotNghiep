import React from 'react';
import { Comp, Child, LeftIcon, WrapButton } from './style';

const Button = ({ children, onClick, leftIcon }) => {
  return (
    <Comp className="Wrapper" onClick={onClick}>
      <WrapButton>
        <LeftIcon>{leftIcon}</LeftIcon>
        <Child>{children}</Child>
      </WrapButton>
    </Comp>
  );
};

export default Button;
