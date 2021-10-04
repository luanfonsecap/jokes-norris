import { createContext, useContext, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppSignatureStorage } from '../../common/constants/storage';
import { JokeResponse } from '../../common/services/interfaces/JokeResponse';
import JokesService from '../../common/services/jokesService';
import { WithChildren } from '../../common/utils/WithChildren';

interface AddJokeData {
  id: string;
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
    id: '',
    categories: [],
    value: '',
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const recursiveLoadNewJoke = useCallback(
    async (
      category: string,
      loadJokeRequest: (arg: string) => Promise<JokeResponse | null>,
      attempts: number,
    ): Promise<JokeResponse | null> => {
      if (attempts >= 15) {
        return null;
      }

      let attempt = attempts;

      let response = await loadJokeRequest(category);
      if (response === null) {
        return null;
      }

      const jokesAlreadyRead: string[] = JSON.parse(
        localStorage.getItem(`${AppSignatureStorage}jokesAlreadyRead`) || '[]',
      );

      if (jokesAlreadyRead.includes(response.id)) {
        attempt += 1;
        response = await recursiveLoadNewJoke(
          category,
          loadJokeRequest,
          attempt,
        );
      }

      if (response) {
        jokesAlreadyRead.push(response.id);
        localStorage.setItem(
          `${AppSignatureStorage}jokesAlreadyRead`,
          JSON.stringify(jokesAlreadyRead),
        );
      }

      return response || null;
    },
    [],
  );

  const loadJoke = useCallback(
    async (category: string) => {
      const jokesService = new JokesService();
      setLoading(true);
      const response = await recursiveLoadNewJoke(
        category,
        jokesService.getRandomJokeByCategory,
        0,
      );

      if (!response) {
        toast.info('You have read all jokes from this category.');
        history.push('/');
        return;
      }

      setJoke(response);
      setLoading(false);
    },
    [recursiveLoadNewJoke, history],
  );

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
