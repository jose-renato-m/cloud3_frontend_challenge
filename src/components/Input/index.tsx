import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<IInputProps> = ({ name, ...rest }) => {
  return (
    <Container>
      <input placeholder={name} {...rest} />
    </Container>
  );
};

export default Input;
