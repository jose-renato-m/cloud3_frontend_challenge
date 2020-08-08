import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <form>
        <Button type="submit">
          <Link to="/dashboard">Acessar registros</Link>
        </Button>
      </form>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
