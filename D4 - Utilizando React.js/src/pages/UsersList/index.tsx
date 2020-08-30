import React, { useEffect, useState } from 'react';

import { Landing } from '../Landing';
import api from '../../services/api';

import { Container, Title, UsersContainer } from './styles';
import User from '../User';

export interface IUser { 
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

const Users: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await api.get('/users?per_page=12');
      const allUsers = response.data.data;
      console.log('allUsers', allUsers);
      setUsers(allUsers);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>Listar Usuários</Title>
      <UsersContainer>
        {users.map((listuser) => {
          return <User key={listuser.id} listuser={listuser} />;
        })}
      </UsersContainer>
      <Landing to ="/">Voltar para o Início</Landing>
    </Container>
  );
};

export default Users;