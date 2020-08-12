import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const SignIn: React.FC = () => (
  <Link to="/dashboard">
    <Button variant="secondary" type="submit">
      Acessar Registros
    </Button>
  </Link>
);

export default SignIn;
