import { HomeErrorFallback } from '../../errors/HomeErrorFallback';
import AppProvider from '../../hooks';
import { WithChildren } from '../../utils/WithChildren';

const AllTheProviders = ({ children }: WithChildren) => {
  return (
    <AppProvider>
      <HomeErrorFallback>{children}</HomeErrorFallback>
    </AppProvider>
  );
};

export { AllTheProviders };
