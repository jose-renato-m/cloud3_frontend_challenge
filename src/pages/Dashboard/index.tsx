import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';
import ModalAdd from '../../components/ModalAdd';
import ModalEdit from '../../components/ModalEdit';

import { Container, TableContainer } from './styles';

interface Contact {
  Id: number;
  Nome: string;
  Email: string;
  Telefone: number;
}

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  useEffect(() => {
    async function loadContacts(): Promise<void> {
      const response = await api.get('/contacts');

      const contactsLoaded = response.data.map((contact: Contact) => ({
        ...contact,
        contacts,
      }));

      setContacts(contactsLoaded);
    }

    loadContacts();
  }, [contacts]);

  async function handleDeleteContact(id: number): Promise<void> {
    await api.delete(`/contacts/${id}`);

    const updatedState = contacts.filter(contact => contact.Id !== id);

    setContacts(updatedState);
  }

  function toggleModal(): void {
    setModalOpen(!modalOpen);
  }

  function toggleEditModal(): void {
    setEditModalOpen(!editModalOpen);
  }

  return (
    <>
      <Header />
      <Container>
        <button type="button" onClick={() => setModalOpen(true)}>
          Criar Registro
        </button>
        <ModalAdd isOpen={modalOpen} setIsOpen={toggleModal} />
        <ModalEdit isOpen={editModalOpen} setIsOpen={toggleEditModal} />
        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
              </tr>
            </thead>

            <tbody>
              {contacts.map(contact => (
                <tr key={contact.Id}>
                  <td>{contact.Id}</td>
                  <td>{contact.Nome}</td>
                  <td>{contact.Email}</td>
                  <td>{contact.Telefone}</td>
                  <td>
                    <button
                      type="button"
                      onClick={() => handleDeleteContact(contact.Id)}
                    >
                      Deletar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() => setEditModalOpen(true)}
                    >
                      Editar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
