import { HomeErrorFallback } from '../../modules/common/errors/HomeErrorFallback';
import AppProvider from '../../modules/common/hooks/index';
import { WithChildren } from '../../modules/common/utils/WithChildren';

const AllTheProviders = ({ children }: WithChildren) => {
  return (
    <AppProvider>
      <HomeErrorFallback>{children}</HomeErrorFallback>
    </AppProvider>
  );
};

export { AllTheProviders };
