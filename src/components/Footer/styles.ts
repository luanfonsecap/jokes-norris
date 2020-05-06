import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 70px;

  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1rem;
    font-weight: 300;

    a {
      font-size: 1rem;
      font-weight: bold;
      text-decoration: none;
    }
  }

  @media (min-width: 768px){
    position: fixed;
    bottom: 0;
  }
`;
