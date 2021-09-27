import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';

import Logo from '../common/components/Logo';
import CategoryButton from './components/CategoryButton';
import api from '../common/services/api';

import { Container } from './styles';

function Home() {
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
    <Container>
      <header>
        <Logo showTitle />
        <p>Select a category for a random Chuck&apos;s joke</p>
      </header>

      {loading ? (
        <ReactLoading type="bars" color="#F2591F" height={56} width={56} />
      ) : null}

      <main>
        {categories.map(category => (
          <CategoryButton key={category} category={category} />
        ))}
      </main>
    </Container>
  );
}

export default Home;
