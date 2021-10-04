import { BrowserRouter } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import 'react-toggle/style.css';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './modules/common/components/Footer';
import { Toast } from './modules/common/components/Toast';
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
      <Toast />
    </AppProvider>
  );
}

export default App;
