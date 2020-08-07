import React from 'react';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <Button type="submit">Acessar Registros</Button>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
