import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';
import { WithChildren } from '../utils/WithChildren';

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
    setLoading(true);
    const response = await api.get<AddJokeData>(`/random?category=${category}`);
    setJoke(response.data);
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
