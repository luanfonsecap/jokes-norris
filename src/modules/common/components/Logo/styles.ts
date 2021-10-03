import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotateY(0);
  }
  from {
    transform: rotateY(360deg);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  cursor: pointer;

  button {
    background: transparent;
  }

  img {
    margin: 40px 0;
    transition: all 1.4s;
  }

  animation: ${rotate} 1s;

  h1 {
    font-size: 1.7rem;
    color: ${({ theme }) => theme.colors.textDark};
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;
