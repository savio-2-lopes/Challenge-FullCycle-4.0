import styled from 'styled-components';

export const AppContainer = styled.div`
  background-color: #262626;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

export const Header = styled.header`
  background-color: #303030;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextHeader = styled.div`
  color: #fff;
`;

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffcd01;
  margin-bottom: 10px;
  & a {
    color: #ffcd01;
    text-decoration: none;
  }
`;

export const FooterText = styled.div`
  font-size: 10px;
`;
