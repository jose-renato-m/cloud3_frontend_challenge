import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import Header from '../../components/Header';

import { Container, TableContainer } from './styles';

interface Contact {
  Id: string;
  Nome: string;
  Email: string;
  Telefone: number;
}

const Dashboard: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

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

  return (
    <>
      <Header />
      <Container>
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
