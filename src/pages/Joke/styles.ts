import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  max-width: 80%;
  margin: 0 auto;
  margin-bottom: 48px;

  img {
    margin: 40px 0 48px;
  }
`;

export const JokeBox = styled.section`
  background: #fff;
  box-shadow: 0 0 4px #8f8f8f;
  border-radius: 4px;
  padding: 32px;
  margin-bottom: 56px;

  min-width: 300px;
  min-height: 120px;

  display: flex;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  line-height: 1.4rem;

  position: relative;
`;

export const Badge = styled.div`
  background: #8D6236;
  border-radius: 4px;
  box-shadow: 0 0 4px #8f8f8f;

  padding: 16px 32px;

  color: #fff;
  font-weight: 300;
  height: 40px;

  display: flex;
  align-items: center;

  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
`;

const animationReload = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 4px;
  }
  to {
    transform: rotate(360deg);
    border-radius: 50%;
  }
`;

export const ReloadButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #F2591F;
  border-radius: 4px;
  box-shadow: 0 0 4px #8f8f8f;

  position: relative;

  height: 60px;
  width: 60px;

  transition: background 0.2s;

  img {
    position: absolute;
    top: -32px;
  }

  &:hover {
    background: ${shade(0.1, '#F2591F')};
    animation: ${animationReload} 1.2s forwards;
  }
`;