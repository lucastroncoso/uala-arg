import globalHook from 'use-global-hook';
import app from './module/app';

const initialState = {
  ...app.initialState,
};

const actions = {
  ...app.actions,
};

const useGlobal = globalHook(initialState, actions);

export default useGlobal;
