import React, { useState } from 'react';

import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Contacts, Container, Content, Background } from './styles';

const Dashboard: React.FC = () => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="Nuvem3" />

          <form>
            <h1>Cadastro de registros</h1>

            <input
              value={newName}
              onChange={e => setNewName(e.target.value)}
              placeholder="Nome"
            />

            <input
              value={newEmail}
              onChange={e => setNewEmail(e.target.value)}
              placeholder="E-mail"
            />

            <input
              value={newPhone}
              onChange={e => setNewPhone(e.target.value)}
              placeholder="Telefone"
            />

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

      <Contacts>
        <ul>
          <li className="header">Id</li>
          <li className="content">9597732</li>
        </ul>
        <ul>
          <li className="header">Nome</li>
          <li className="content">Jose Renato</li>
        </ul>
        <ul>
          <li className="header">Email</li>
          <li className="content">jrenato78@gmail.com</li>
        </ul>
        <ul>
          <li className="header">Telefone</li>
          <li className="content">976134425</li>
        </ul>
      </Contacts>
    </>
  );
};

export default Dashboard;
