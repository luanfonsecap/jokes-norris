import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import 'react-toggle/style.css';

import Footer from './modules/common/components/Footer';
import GlobalStyle from './modules/common/css/global';
import AppProvider from './modules/common/hooks';
import ROUTES from './routes';
import RenderRoutes from './routes/RenderRoutes';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
      <GlobalStyle />
      <ReactTooltip effect="solid" place="bottom" />
      <Footer />
    </AppProvider>
  );
}

export default App;
