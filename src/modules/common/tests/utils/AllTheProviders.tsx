import { JokeProvider } from '../../../Joke/hooks/useJoke';
import { HomeErrorFallback } from '../../errors/HomeErrorFallback';
import { JokeErrorFallback } from '../../errors/JokeErrorFallback ';
import AppProvider from '../../hooks';
import { WithChildren } from '../../utils/WithChildren';

const AllTheProviders = ({ children }: WithChildren) => {
  return (
    <AppProvider>
      <JokeErrorFallback>
        <JokeProvider>
          <HomeErrorFallback>{children}</HomeErrorFallback>
        </JokeProvider>
      </JokeErrorFallback>
    </AppProvider>
  );
};

export { AllTheProviders };
