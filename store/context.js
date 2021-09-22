import React, { useState, useMemo, useContext, createContext } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState('es');
  const [youtubeModalVideoId, setYoutubeModalVideoId] = useState('');
  const [downloadModalActiveState, setDownloadModalActiveState] = useState(false);

  const values = useMemo(
    () => ({
      locale,
      downloadModalActiveState,
      youtubeModalVideoId,
      setDownloadModalActiveState,
      setYoutubeModalVideoId,
      setLocale,
    }),
    [locale, downloadModalActiveState, youtubeModalVideoId],
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
