import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BrowserRouter } from 'react-router-dom';

import Footer from './modules/common/components/Footer';
import GlobalStyle from './modules/common/css/global';
import ROUTES from './routes';
import RenderRoutes from './routes/RenderRoutes';
console.log(ROUTES);

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
      <GlobalStyle />
      <ReactTooltip effect="solid" place="bottom" />
      <Footer />
    </>
  );
};

export default App;
