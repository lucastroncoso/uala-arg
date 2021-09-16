const map = [
  'null',
  'default',
  'floatingVideo',
  'menuItemText',
  'headerButtons',
  'menuImageContainer',
  'scrollBarProgressLine',
  'lineDecoratorContainer',
  'cookieBar',
  'menu',
  'hamburguerIcon',
  'headerContainer',
  'LiveEventMobileOpen',
  'sidebar',
] as const;

export const zIndex = (name: typeof map[number]): number =>
  map.findIndex((itemName) => itemName === name);
