export const size = (width: string, height?: string | undefined) => `
  width: ${width};
  height: ${height || width};
`;
