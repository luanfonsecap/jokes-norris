import React from 'react';
import ReactTooltip from 'react-tooltip';

import Footer from './components/Footer';
import GlobalStyle from './css/global';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <Routes />
      <GlobalStyle />
      <Footer />
      <ReactTooltip effect="solid" place="bottom" />
    </>
  );
};

export default App;
