import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 80%;
  margin: 0 auto;
  height: calc(100vh - 50px);

  img {
    margin: 40px 0 48px;
  }
`;

export const JokeBox = styled.section`
  background: #fff;
  box-shadow: 0 0 4px #8f8f8f;
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 86px;

  min-height: 120px;
  min-width: 300px;
  max-width: 600px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  line-height: 1.7rem;

  position: relative;
`;

export const Badge = styled.div`
  background: #8d6236;
  border-radius: 4px;
  box-shadow: 0 0 4px #8f8f8f;

  padding: 16px 32px;

  color: #fff;
  font-weight: 300;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);

  span ~ span {
    margin-left: 8px;
  }
`;

const animationReload = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
`;

export const ReloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #f2591f;
  border-radius: 50%;
  box-shadow: 0 0 4px #8f8f8f;

  position: relative;

  height: 60px;
  width: 60px;

  transition: background 0.2s;

  img {
    position: absolute;
    top: -32px;
  }

  &.hasClicked {
    animation: ${animationReload} 1.2s;
  }

  &:hover {
    background: ${shade(0.1, '#F2591F')};
  }
`;
