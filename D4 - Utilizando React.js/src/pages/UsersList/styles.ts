import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h2`
  display: flex;
  width: 100%;
  padding: 20px;
  justify-content: center;
  color: var(--yellow);
`;

export const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;  