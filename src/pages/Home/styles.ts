import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  height: 100vh;
  max-width: 80%;
  margin: 0 auto;

  header {
    margin: 40px 0 48px;

    display: flex;
    flex-direction: column;

    p {
      margin-top: 16px;
      font-weight: 300;

      font-size: 1rem;
      color: #8D6236;
      text-align: center;
    }
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
    grid-row-gap: 32px;
  }
`;


