import React from 'react';

import logoImg from '../../assets/logo.svg'
import reloadImg from '../../assets/reload.svg'
import Footer from '../../components/Footer'

import { Container, JokeBox, Badge, ReloadButton } from './styles';

const Joke: React.FC = () => {
  return (
    <>
      <Container>
        <img src={logoImg} alt="Chuck Norris Character"/>

        <JokeBox>
          <p>
            Chuck Norris created the Chinese basketball player, Yao Ming by means of torture stretching a sumo wrestler on \"the rack\
          </p>
        <Badge>
          <span>Dev</span>
        </Badge>
        </JokeBox>
        <ReloadButton>
          <img src={reloadImg} alt="Reload button to another joke"/>
        </ReloadButton>
      </Container>
      {/* <Footer /> */}
    </>
  );
}

export default Joke;
