import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;

  .react-toggle-track-check {
    height: 16px;
  }

  .react-toggle-track-x {
    height: 16px;
  }

  .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.shadow};
  }

  .react-toggle:hover:not(.react-toggle--disabled) .react-toggle-track {
    background-color: ${({ theme }) => theme.colors.shadow};
  }
`;
