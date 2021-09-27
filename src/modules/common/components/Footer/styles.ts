import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 50px;

  background: ${({ theme }) => theme.colors.light};

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;

  p {
    font-size: 0.8rem;
    font-weight: 300;

    a {
      font-size: 0.8rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media (min-width: 768px) {
    p {
      font-size: 1rem;
    }
    a {
      font-size: 1rem;
    }
  }
`;
