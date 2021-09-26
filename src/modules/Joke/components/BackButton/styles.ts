import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: #f2591f;
  padding: 4px;

  position: absolute;
  left: 16px;
  top: 16px;
  cursor: pointer;

  img,
  button {
    width: 24px;
    height: 24px;
  }

  button {
    background: transparent;

    img {
      margin: 0;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
