import React, { createContext, useContext, useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { AppSignatureStorage } from '../constants/storage';
import { darkTheme, lightTheme } from '../css/theme';
import { WithChildren } from '../utils/WithChildren';

interface ToggleThemeContextData {
  toggle: () => void;
  theme: string;
}

const ToggleThemeContext = createContext<ToggleThemeContextData>(
  {} as ToggleThemeContextData,
);

const ToggleThemeProvider = ({ children }: WithChildren) => {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem(`${AppSignatureStorage}theme`);

    return storageTheme || 'light';
  });

  const toggle = useCallback(() => {
    if (theme === 'light') {
      localStorage.setItem(`${AppSignatureStorage}theme`, 'dark');
      return setTheme('dark');
    }

    localStorage.setItem(`${AppSignatureStorage}theme`, 'light');
    return setTheme('light');
  }, [theme]);

  return (
    <ToggleThemeContext.Provider value={{ toggle, theme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        {children}
      </ThemeProvider>
    </ToggleThemeContext.Provider>
  );
};

function useToggleTheme() {
  const context = useContext(ToggleThemeContext);

  if (!context) {
    throw new Error('useToggleTheme must be used within ToggleThemeProvider');
  }

  return context;
}

export { useToggleTheme, ToggleThemeProvider };
