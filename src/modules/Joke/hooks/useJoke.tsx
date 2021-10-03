import React, { createContext, useContext, useCallback, useState } from 'react';

import JokesService from '../../common/services/jokesService';
import { WithChildren } from '../../common/utils/WithChildren';

interface AddJokeData {
  categories: string[];
  value: string;
}

interface JokeContextData {
  joke: AddJokeData;
  loadJoke(category: string): void;
  loading: boolean;
}

const JokeContext = createContext<JokeContextData>({} as JokeContextData);

const JokeProvider = ({ children }: WithChildren) => {
  const [joke, setJoke] = useState<AddJokeData>({
    categories: [],
    value: '',
  });
  const [loading, setLoading] = useState(false);

  const loadJoke = useCallback(async category => {
    const jokesService = new JokesService();
    setLoading(true);
    const response = await jokesService.getRandomJokeByCategory(category);
    setJoke(response);
    setLoading(false);
  }, []);

  return (
    <JokeContext.Provider value={{ joke, loadJoke, loading }}>
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

export { useJoke, JokeProvider };
