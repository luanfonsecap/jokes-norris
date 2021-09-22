import React from 'react';

import { JokeProvider } from './joke';

const AppProvider: React.FC = ({ children }) => (
  <JokeProvider>{children}</JokeProvider>
);

export default AppProvider;
