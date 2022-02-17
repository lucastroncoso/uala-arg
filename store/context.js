import React, { useState, useMemo, useContext, createContext } from 'react';

export const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [locale, setLocale] = useState('es');
  const [region, setRegion] = useState('mx');
  const [youtubeModalVideoId, setYoutubeModalVideoId] = useState('');
  const [downloadModalActiveState, setDownloadModalActiveState] = useState({
    qr: '/public/assets/images/qr_ar_hero.svg',
    state: false,
  });

  const values = useMemo(
    () => ({
      locale,
      region,
      downloadModalActiveState,
      youtubeModalVideoId,
      setDownloadModalActiveState,
      setYoutubeModalVideoId,
      setLocale,
      setRegion,
    }),
    [locale, downloadModalActiveState, youtubeModalVideoId, region],
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
