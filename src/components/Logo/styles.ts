import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 40px 0;
  }

  h1 {
    font-size: 1.7rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }
  }
`;
