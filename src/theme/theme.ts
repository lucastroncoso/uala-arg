const theme = {
  color: {
    black: '#000',
    white: '#FFF',
  },
  menu: {
    width: {
      collapsed: '90px',
      expanded: '288px',
    },
    mobileHeight: '83px',
  },
  fonts: {
    publicSans: 'Public Sans',
  },
  easing: {
    transitionIn: 'cubic-bezier(0.2, 0, 0, 1)',
  },
};

export default theme;

type CustomTheme = typeof theme;

export type ThemeColors = keyof typeof theme.color;

export type ColorProp = {
  $color?: ThemeColors;
};

// this will redeclare the global `DefaultTheme` so it is aware of our custom theme.
declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends CustomTheme {}
}
