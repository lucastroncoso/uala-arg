export const fluidType = (
  minFontSize: number,
  maxFontSize: number,
  minViewport = 480,
  maxViewport = 1920,
) => `
  font-size: ${minFontSize}px;

  @media screen and (min-width: ${minViewport}px) {
    font-size: calc(
      ${minFontSize}px + ${maxFontSize - minFontSize} * (100vw - ${minViewport}px) /
        ${maxViewport - minViewport}
    );
  }

  @media screen and (min-width: ${maxViewport}px) {
    font-size: ${maxFontSize}px;
  }
`;
