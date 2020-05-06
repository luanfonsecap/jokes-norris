import React, { useState } from 'react';
import Typist from 'react-typist';

import logoImg from '../../assets/logo.svg'
import reloadImg from '../../assets/reload.svg'
import Footer from '../../components/Footer'

import { Container, JokeBox, Badge, ReloadButton } from './styles';

const Joke: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <Container>
        <img src={logoImg} alt="Chuck Norris Character"/>

        <JokeBox>
          <Typist avgTypingDelay={60} cursor={{ hideWhenDone: true }} >
            Chuck Norris created the Chinese basketball player, Yao Ming by means of torture stretching a sumo wrestler on \"the rack\
          </Typist>
        <Badge>
          <span>Dev</span>
        </Badge>
        </JokeBox>
        <ReloadButton
          clicked={clicked}
          onClick={() => setClicked(true)}
        >
          <img src={reloadImg} alt="Reload button to another joke"/>
        </ReloadButton>
      </Container>
      <Footer />
    </>
  );
}

export default Joke;
