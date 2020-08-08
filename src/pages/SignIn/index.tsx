import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <Link to="/dashboard">
          <Button type="submit">Acessar Registros</Button>
        </Link>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
