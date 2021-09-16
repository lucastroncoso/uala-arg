/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { pseudo } from './pseudo';

const calcRatio = (aspectRatioParam: [number, number]) =>
  (aspectRatioParam[1] / aspectRatioParam[0]) * 100;

export const aspectRatio = (aspectRatioParam: [number, number], position: string = 'relative') => `
  &::before {
    ${pseudo()};
    position: ${position};
    padding-top: ${calcRatio(aspectRatioParam)}%;
  }
`;
