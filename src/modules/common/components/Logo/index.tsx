import React from 'react';
import { useHistory } from 'react-router';

import logoImg from '../../../../assets/logo.svg';

import { Container } from './styles';

type LogoProps = {
  showTitle?: boolean;
};

function Logo({ showTitle }: LogoProps) {
  const history = useHistory();

  return (
    <Container>
      <button onClick={() => history.push('/')}>
        <img src={logoImg} alt="Chuck Norris Character" />
        {showTitle ? <h1>Jokes Norris</h1> : null}
      </button>
    </Container>
  );
}

export default Logo;
