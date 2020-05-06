import React from 'react';

import GlobalStyle from './css/global';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;
