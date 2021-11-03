import { useState, useEffect } from 'react';
import ReactLoading from 'react-loading';
import { useTheme } from 'styled-components';

import Logo from '../common/components/Logo';
import Switch from '../common/components/Switch';
import { useToggleTheme } from '../common/hooks/useToggleTheme';
import CategoriesService from '../common/services/categoriesService';
import CategoryButton from './components/CategoryButton';
import { Container } from './styles';

function Home() {
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const theme = useTheme();
  const toggleTheme = useToggleTheme();

  useEffect(() => {
    async function loadCategories() {
      const categoriesService = new CategoriesService();
      const response = await categoriesService.getCategories();
      setCategories(response);
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

      <Switch
        checked={toggleTheme.theme === 'dark'}
        onClick={toggleTheme.toggle}
      />

      {loading ? (
        <ReactLoading
          type="bars"
          data-testid="loading"
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
