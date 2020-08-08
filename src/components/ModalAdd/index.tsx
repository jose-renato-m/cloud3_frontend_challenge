import React, { useState } from 'react';

import api from '../../services/api';

import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface Contact {
  Id: number;
  Nome: string;
  Email: string;
  Telefone: string;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalAdd: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleCreateContact(): Promise<void> {
    const response = await api.post<Contact>('/contacts', {
      Nome: nome,
      Email: email,
      Telefone: telefone,
    });

    const contact = response.data;

    setContacts([...contacts, contact]);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleCreateContact}>
        <h1>Registrar Contato</h1>
        <Input
          name="Nome"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <Input
          name="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Input
          name="Telefone"
          value={telefone}
          onChange={e => setTelefone(e.target.value)}
        />

        <button type="submit">
          <div className="text">Adicionar</div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAdd;
