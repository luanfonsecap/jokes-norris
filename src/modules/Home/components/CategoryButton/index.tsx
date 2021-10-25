import React, { useCallback, ButtonHTMLAttributes } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

interface CategoryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  category: string;
}

function CategoryButton({ category }: CategoryButtonProps) {
  const history = useHistory();

  const navigateToJoke = useCallback(() => {
    history.push(`/joke/${category}`);
  }, [history, category]);

  return <Container onClick={navigateToJoke}>{category}</Container>;
}

export default CategoryButton;
