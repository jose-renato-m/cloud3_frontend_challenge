import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import api from '../../services/api';

import ModalAdd from '../../components/ModalAdd';
import ModalEdit from '../../components/ModalEdit';

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
  const [editContact, setEditContact] = useState<Contact>({} as Contact);

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
      <Button
        type="button"
        variant="success"
        onClick={() => setModalOpen(true)}
      >
        Criar Registro
      </Button>
      <ModalAdd isOpen={modalOpen} setIsOpen={toggleModal} />
      <ModalEdit
        isOpen={editModalOpen}
        setIsOpen={toggleEditModal}
        contact={editContact}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Ação</th>
            <th>Ação</th>
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
                <Button
                  type="button"
                  variant="danger"
                  onClick={() => handleDeleteContact(contact.Id)}
                >
                  Deletar
                </Button>
              </td>
              <td>
                <Button
                  type="button"
                  variant="warning"
                  onClick={() => {
                    setEditModalOpen(true);
                    setEditContact(contact);
                  }}
                >
                  Editar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Dashboard;
