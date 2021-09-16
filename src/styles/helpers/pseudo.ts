export const pseudo = (display = 'block', position = 'absolute', content = '') => `
  content: '${content}';
  display: ${display};
  position: ${position};
`;
