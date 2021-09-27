import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Typist from 'react-typist';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import reloadImg from '../../assets/reload.svg';
import BackButton from './components/BackButton';
import { useJoke } from './hooks/useJoke';

import { Container, JokeBox, Badge, ReloadButton } from './styles';
import Logo from '../common/components/Logo';

interface RouteParams {
  category: string;
}

function Joke() {
  const reloadButtonRef = useRef<HTMLButtonElement>(null);
  const { category } = useParams<RouteParams>();
  const { joke, loadJoke, loading } = useJoke();
  const theme = useTheme();

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
      <Logo />

      <BackButton />

      <JokeBox>
        {loading ? (
          <ReactLoading
            type="bars"
            color={theme.colors.primary}
            height={56}
            width={56}
          />
        ) : (
          <Typist avgTypingDelay={60} cursor={{ hideWhenDone: true }}>
            {joke.value}
          </Typist>
        )}

        <Badge>
          {joke.categories.length ? (
            joke.categories.map(categoryLabel => <span>{categoryLabel}</span>)
          ) : (
            <ReactLoading
              type="bars"
              color={theme.colors.light}
              height={26}
              width={26}
            />
          )}
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
