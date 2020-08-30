import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Landing = styled(Link)`
  background-color: var(--cyan);
  padding: 10px 20px;
  border-radius: 10px;
  margin: 40px 0;
  cursor: pointer;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #f0f0f0;
    color: #000;
  }
`;