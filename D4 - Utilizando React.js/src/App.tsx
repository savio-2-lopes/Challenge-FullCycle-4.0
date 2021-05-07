import React from 'react';
import Logo from './Logo.png';
import './App.css';
import './styles';
import { AppContainer, Header, Content, TextHeader, Footer, FooterText } from './styles';
import Routes from './routes';

export default function App() {
  return (
    <AppContainer>
      <Header>
        <img src={Logo} alt="logo" />
        <TextHeader> Desafio 04 - Utilizando React.js</TextHeader>
      </Header>

      <Content>
        <Routes />
      </Content>

      <Footer>
        <FooterText> Desenvolvido por </FooterText>
        <a href="https://github.com/savio-2-lopes">
          Savio Augusto Lopes
        </a>
      </Footer>
    </AppContainer>
  );
}