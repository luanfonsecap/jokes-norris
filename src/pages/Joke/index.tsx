import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Typist from 'react-typist';
import ReactLoading from 'react-loading';

import logoImg from '../../assets/logo.svg';
import reloadImg from '../../assets/reload.svg';
import { useJoke } from '../../hooks/joke';

import { Container, JokeBox, Badge, ReloadButton } from './styles';

interface RouteParams {
  category: string;
}

function Joke() {
  const reloadButtonRef = useRef<HTMLButtonElement>(null);
  const { category } = useParams<RouteParams>();
  const { joke, loadJoke, loading } = useJoke();

  const reloadJoke = () => {
    if (reloadButtonRef.current) {
      reloadButtonRef.current.className = `${reloadButtonRef.current.className} hasClicked`;
    }

    loadJoke(category);

    setTimeout(() => {
      if (reloadButtonRef.current)
        reloadButtonRef.current.className = reloadButtonRef.current.className.replace(
          'hasClicked',
          '',
        );
    }, 1200);
  };

  useEffect(() => {
    loadJoke(category);
  }, [loadJoke, category]);

  return (
    <Container>
      <img src={logoImg} alt="Chuck Norris Character" />

      <JokeBox>
        {loading ? (
          <ReactLoading type="bars" color="#F2591F" height={56} width={56} />
        ) : (
          <Typist avgTypingDelay={60} cursor={{ hideWhenDone: true }}>
            {joke.value}
          </Typist>
        )}

        <Badge>
          {joke.categories.map(categoryLabel => (
            <span>{categoryLabel}</span>
          ))}
        </Badge>
      </JokeBox>

      <ReloadButton
        ref={reloadButtonRef}
        onClick={reloadJoke}
        disabled={loading}
        data-tip="Click to load another joke"
      >
        <img src={reloadImg} alt="Reload button to another joke" />
      </ReloadButton>
    </Container>
  );
}

export default Joke;
