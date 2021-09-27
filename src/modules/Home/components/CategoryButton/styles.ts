import styled from 'styled-components';

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  box-shadow: 0 0 4px ${({ theme }) => theme.colors.shadow};

  padding: 16px;
  min-width: 140px;

  text-align: center;

  span {
    color: ${({ theme }) => theme.colors.textLight};
    font-size: 1rem;
  }

  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);
    background: ${({ theme }) => theme.colors.primary};
  }
`;
