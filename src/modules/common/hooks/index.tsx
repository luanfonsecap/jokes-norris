import { WithChildren } from '../utils/WithChildren';
import { ToggleThemeProvider } from './useToggleTheme';

function AppProvider({ children }: WithChildren) {
  return <ToggleThemeProvider>{children}</ToggleThemeProvider>;
}

export default AppProvider;
