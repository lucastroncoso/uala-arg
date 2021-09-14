/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.scss' {
  const content: { [className: string]: string };
  export = content;
}

declare module '*.png' {
  const exp: string;
  export default exp;
}

declare module '*.jpg' {
  const exp: string;
  export default exp;
}

declare module '*.jpeg' {
  const exp: string;
  export default exp;
}

declare module '*.json' {
  const exp: Array<any> | { [key: string]: any };
  export default exp;
}

declare module '*.txt' {
  const exp: string;
  export default exp;
}

declare module '*.svg' {
  const exp: string;
  export default exp;
}

declare module '*.glsl' {
  const exp: string;
  export default exp;
}

declare module '*.fs' {
  const exp: string;
  export default exp;
}

declare module '*.vs' {
  const exp: string;
  export default exp;
}

declare module '*.dds' {
  const exp: string;
  export default exp;
}

declare module '*.obj' {
  const exp: string;
  export default exp;
}

declare module '*.mp4' {
  const exp: string;
  export default exp;
}

declare module '*.mtl' {
  const exp: string;
  export default exp;
}

declare module 'single-example';

interface Window {
  webkitAudioContext: typeof AudioContext;
}

declare module 'locomotive-scroll';

declare module 'body-scroll-lock';
