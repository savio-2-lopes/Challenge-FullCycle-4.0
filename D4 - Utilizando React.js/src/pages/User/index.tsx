import React from 'react';
import { IUser } from '../UsersList';
import { UserAvatar, UserContainer, UserDataContainer, UserEmail, UserName, } from './styles';

interface IUserComponentProps {
  listuser: IUser;
}

const User: React.FC<IUserComponentProps> = ({ listuser }) => {
  const { avatar, first_name, last_name, email } = listuser;
  return (
    <UserContainer>
      <UserAvatar src={avatar} />
      <UserDataContainer>
        <UserName>
          {first_name} {last_name}
        </UserName>
        <UserEmail>{email}</UserEmail>
      </UserDataContainer>
    </UserContainer>
  );
};

export default User;