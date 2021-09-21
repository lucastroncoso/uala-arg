import React, { useState, useMemo, useContext, createContext } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState('es');
  const [downloadModalActiveState, setDownloadModalActiveState] = useState(false);

  const values = useMemo(
    () => ({
      locale,
      downloadModalActiveState,
      setDownloadModalActiveState,
      setLocale,
    }),
    [locale, downloadModalActiveState],
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context');
  }

  return context;
}

export default useAppContext;
