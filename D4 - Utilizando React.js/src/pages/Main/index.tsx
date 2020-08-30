import React from 'react';
import { Landing } from '../Landing';

import logo from './Logo.png';
import { FullText } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <img src={logo} alt="react" />
      <FullText> Eu sou Full Cycle </FullText>
      <Landing to="/users"> Lista de Usuários </Landing>
    </>
  );
};

export default Main;