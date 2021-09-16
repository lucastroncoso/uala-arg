import type { MediaQuery } from '../mediaQuery';

export const respondTo = (query: MediaQuery) => `only screen and ${query}`;
