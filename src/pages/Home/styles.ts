import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 3rem;

  header   {
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

  @media (min-width: 768px) {
    margin-bottom: 5rem;

    main {
      grid-template-columns: repeat(4, 2fr);
      grid-column-gap: 32px;
      grid-row-gap: 64px;
    }

    header p {
      font-size: 2rem;
    }
  }
`;
