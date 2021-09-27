import React from 'react';
import ReactTooltip from 'react-tooltip';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Footer from './modules/common/components/Footer';
import GlobalStyle from './modules/common/css/global';
import ROUTES from './routes';
import RenderRoutes from './routes/RenderRoutes';
import theme from './modules/common/css/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <RenderRoutes routes={ROUTES} />
      </BrowserRouter>
      <GlobalStyle />
      <ReactTooltip effect="solid" place="bottom" />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
