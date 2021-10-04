import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px;

  h1 {
    font-size: 2rem;
    text-align: center;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme.colors.tertiary};
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};
  border-radius: 4px;
  padding: 8px;
  min-width: 140px;

  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }
`;
