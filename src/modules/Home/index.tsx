import React, { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import Logo from '../common/components/Logo';
import CategoryButton from './components/CategoryButton';

import { Container } from './styles';
import CategoriesService from '../common/services/categoriesService';

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const categoriesService = new CategoriesService();
  const theme = useTheme();

  useEffect(() => {
    async function loadCategories() {
      const categories = await categoriesService.getCategories();
      setCategories(categories);
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
        <ReactLoading
          type="bars"
          color={theme.colors.primary}
          height={56}
          width={56}
        />
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
