import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <p>
        Jokes powered by{' '}
        <a target="blank" href="https://api.chucknorris.io/">
          Chuck Norris IO
        </a>
      </p>
    </Container>
  );
};

export default Footer;
