
import styled from 'styled-components';

export const UserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-width: 40vw;
`;

export const UserAvatar = styled.img`
  border-radius: 50%;
  height: 80px;
  z-index: 100;
`;

export const UserDataContainer = styled.div`
  background-color: lightgray;
  border-radius: 10px;
  color: var(--background);
  height: 70px;
  margin: 20px;
  width: 100%;
  margin-left: -50px;
  padding-left: 70px;
`;

export const UserName = styled.div`
  font-weight: bold;
  margin-top: 10px;
`;

export const UserEmail = styled.div`
  color: var(--dark);
`;