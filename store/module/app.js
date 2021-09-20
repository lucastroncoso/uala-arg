// initialState
const initialState = {
  downloadModalActiveState: false,
  locale: 'es',
  youtubeModalVideoId: '',
};

// actions
const setDownloadModalActiveState = (store, downloadModalActiveState) => {
  store.setState({ ...store.state, downloadModalActiveState });
};

const setYoutubeModalVideoId = (store, youtubeModalVideoId) => {
  store.setState({ ...store.state, youtubeModalVideoId });
};

const setLocale = (store, locale) => {
  store.setState({ ...store.state, locale });
};

export default {
  actions: {
    setDownloadModalActiveState,
    setYoutubeModalVideoId,
    setLocale,
  },
  initialState,
};
