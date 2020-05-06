import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import Typist from 'react-typist';
import ReactLoading from 'react-loading';

import logoImg from '../../assets/logo.svg';
import reloadImg from '../../assets/reload.svg';
import Footer from '../../components/Footer';
import { useJoke } from '../../hooks/joke';

import { Container, JokeBox, Badge, ReloadButton } from './styles';

const Joke: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const { category } = useParams();
  const { joke, loadJoke } = useJoke();

  useEffect(() => {
    loadJoke(category);
  }, [loadJoke, category]);

  const reloadJoke = useCallback(() => {
    setClicked(true);
    loadJoke(category);
    setTimeout(() => {
      setClicked(false);
    }, 1000);
  }, [loadJoke, category]);

  return (
    <>
      <Container>
        <img src={logoImg} alt="Chuck Norris Character" />

        <JokeBox>
          {!joke.value && (
            <ReactLoading type="bars" color="#F2591F" height={56} width={56} />
          )}
          {joke.value && (
            <Typist avgTypingDelay={60} cursor={{ hideWhenDone: true }}>
              {joke.value}
            </Typist>
          )}
          <Badge>
            <span>{joke.categories}</span>
          </Badge>
        </JokeBox>
        <ReloadButton clicked={clicked} onClick={() => setClicked(true)}>
          <img src={reloadImg} alt="Reload button to another joke" />
        </ReloadButton>
      </Container>
      <Footer />
    </>
  );
};

export default Joke;
