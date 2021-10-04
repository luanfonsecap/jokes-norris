import { ToastContainer, Theme } from 'react-toastify';

import { useToggleTheme } from '../../hooks/useToggleTheme';

export function Toast() {
  const toggleTheme = useToggleTheme();

  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      closeOnClick
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={toggleTheme.theme as Theme}
    />
  );
}
