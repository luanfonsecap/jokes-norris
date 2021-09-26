import React, { useState, useEffect } from 'react';

import logoImg from '../../../../assets/logo.svg';
import { Container } from './styles';

const Logo: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Container loaded={loaded}>
      <img src={logoImg} alt="Chuck Norris Character" />
      <h1>Jokes Norris</h1>
    </Container>
  );
};

export default Logo;
