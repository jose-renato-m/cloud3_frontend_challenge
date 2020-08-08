import React, { useState } from 'react';

import api from '../../services/api';

import Modal from '../Modal';
import Input from '../Input';

import { Form } from './styles';

interface Contact {
  Id: number;
  Nome: string;
  Email: string;
  Telefone: number;
}

interface IModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEdit: React.FC<IModalProps> = ({ isOpen, setIsOpen }) => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [id, setId] = useState<number>();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  async function handleEditContact(Id?: number): Promise<void> {
    const response = await api.put<Contact>('/contacts', {
      Id,
      Nome: nome,
      Email: email,
      Telefone: telefone,
    });

    const updatedState = contacts.filter(item => item.Id !== Id);
    setContacts([...updatedState, response.data]);
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={() => handleEditContact(id)}>
        <h1>Editar Contato</h1>
        <Input
          name="Id"
          value={id}
          onChange={e => setId(Number(e.target.value))}
        />
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
          <div className="text">Editar</div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalEdit;
