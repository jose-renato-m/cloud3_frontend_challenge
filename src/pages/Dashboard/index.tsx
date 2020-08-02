import React from 'react';

import logoImg from '../../assets/logo.svg';

import { Container, Content, Background } from './styles';

const Dashboard: React.FC = () => (
  <>
    <Container>
      <Content>
        <img src={logoImg} alt="Nuvem3" />

        <form>
          <h1>Cadastro de registros</h1>

          <input placeholder="Nome" />

          <input placeholder="E-mail" />

          <input placeholder="Telefone" />

          <button type="submit" className="include">
            Incluir Registro
          </button>

          <button type="button" className="exclude">
            Excluir Registro
          </button>
        </form>
      </Content>

      <Background />
    </Container>
  </>
);

export default Dashboard;
