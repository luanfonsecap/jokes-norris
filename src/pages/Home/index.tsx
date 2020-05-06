import React from 'react';

import Logo from '../../components/Logo'
import CategoryButton from '../../components/CategoryButton';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <header>
          <Logo />
          <p>Select a categorie for a random Chuck's joke</p>
        </header>

        <main>
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
          <CategoryButton />
        </main>
      </Container>
      <Footer />
    </>
  );

}

export default Home;
