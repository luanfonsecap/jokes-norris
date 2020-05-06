import styled, { css } from 'styled-components';

interface LogoProps {
  loaded: boolean;
}

export const Container = styled.div<LogoProps>`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 40px 0;
    transition: all 1s;
  }

  ${props =>
    props.loaded &&
    css`
      img {
        transform: rotateY(360deg);
      }
    `}

  h1 {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;
