import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styles';

const CategoryButton: React.FC = () => {
  const history = useHistory();

  const navigateToJoke = useCallback(() => {
    history.push('joke');
  }, []);

  return (
    <Container onClick={navigateToJoke}>
      <span>Animal</span>
    </Container>
  );
}

export default CategoryButton;
