import React from 'react';

import Footer from './components/Footer';
import GlobalStyle from './css/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Footer />
    </>
  );
};

export default App;
