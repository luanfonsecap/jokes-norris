import React, { createContext, useContext, useCallback, useState } from 'react';

interface SelectCategoryData {
  category: string;
}

interface JokeContextData {
  joke: string;
  category: string;
  selectCategory(category: SelectCategoryData): void;
}

const JokeContext = createContext<JokeContextData>({} as JokeContextData);

const JokeProvdier: React.FC = ({ children }) => {
  const [joke, setJoke] = useState('');
  const [category, setCategory] = useState('');

  const selectCategory = useCallback(selectedCategory => {
    setCategory(selectedCategory);
  }, []);

  return (
    <JokeContext.Provider value={{ joke, category, selectCategory }}>
      {children}
    </JokeContext.Provider>
  );
};

function useJoke() {
  const context = useContext(JokeContext);

  if (!context) {
    throw new Error('useJoke must be used within JokeProvider');
  }

  return context;
}

export { useJoke, JokeProvdier };
