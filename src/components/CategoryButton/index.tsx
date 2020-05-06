import React, { useCallback, ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({ category }) => {
  const history = useHistory();

  const navigateToJoke = useCallback(() => {
    history.push(`joke/${category}`);
  }, [history, category]);

  return (
    <Container onClick={navigateToJoke}>
      <span>{category}</span>
    </Container>
  );
};

export default CategoryButton;
