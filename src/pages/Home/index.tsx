import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import Logo from '../../components/Logo';
import CategoryButton from '../../components/CategoryButton';
import Footer from '../../components/Footer';
import api from '../../services/api';

import { Container } from './styles';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategories() {
      const response = await api.get('categories');
      setCategories(response.data);
      setLoading(false);
    }

    loadCategories();
  }, []);

  return (
    <>
      <Container>
        <header>
          <Logo />
          <p>Select a categorie for a random Chuck&apos;s joke</p>
        </header>

        {loading && (
          <ReactLoading type="bars" color="#F2591F" height={56} width={56} />
        )}
        <main>
          {categories.map(category => (
            <CategoryButton key={category} category={category} />
          ))}
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
