import React from 'react';

import logoImg from '../../assets/logo.svg'
import { Container } from './styles';

const Logo: React.FC = () => (
  <Container>
    <img src={logoImg} alt="Chuck Norris Character"/>
    <h1>Jokes Norris</h1>
  </Container>
);

export default Logo;
