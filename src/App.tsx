import React from 'react';
import routes, { renderRoutes } from './routes';
import Main from './layouts/Main';
import { AuthProvider } from './contexts/JWTAuthContext';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDarkMode } from './hooks/useDarkMode';

function App() {
  const { i18n } = useTranslation();
  const [theme, componentMounted] = useDarkMode();
  if (!componentMounted) {
    return <div />;
  }
  const wrapperClass = ` wrapper${theme === 'dark' ? ' dark' : ''}${
    i18n.language === 'ar' ? ' rtl' : ''
  }`;

  return (
    <div className={wrapperClass}>
      <BrowserRouter>
        <AuthProvider>
          <Main>{renderRoutes(routes)}</Main>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
