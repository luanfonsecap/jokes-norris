import styled from 'styled-components';

export const Container = styled.button`
  background: #24ADE3;
  border-radius: 4px;
  box-shadow: 0 0 4px #8f8f8f;

  padding: 16px;
  min-width: 156px;

  text-align: center;

  span {
    color: #fff;
    font-size: 1rem;
  }

  transition: all .2s;

  &:hover {
    transform: scale(1.1);
    background: #F2591F;
  }
`;
