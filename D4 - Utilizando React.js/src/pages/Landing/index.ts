import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Landing = styled(Link)`
  background-color: var(--yellow);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 40px 0;
  cursor: pointer;
  color: var(--background);
  text-decoration: none;

  &:hover {
    background-color: var(--yellow);
    color: var(--background);
  }
`;