import React from 'react';

import LogoImg from '../../assets/logo.svg';

import { Container } from './styles';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={LogoImg} alt="Nuvem3" />
    </header>
  </Container>
);

export default Header;
