import { keyframes } from 'styled-components';

export const pulseAnimation = keyframes`

  0% {
    transform: scale(0);
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  75% {
    transform: scale(1);
    opacity: 1;
  }

  100% {
    transform: scale(1.2);
    opacity: 0;
  }
`;

export const pulseFadeAnimation = keyframes`

  0% {
    opacity: 0;
  }

  30% {
    opacity: 1;
  }

  80% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;

export const spinLetters = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const maskImageIn = keyframes`
	from {
		mask-position: 0% 0;
	}

	to {
		mask-position: 100% 0;
	}
`;

export const maskImageOut = keyframes`
	from {
		mask-position: 100% 0;
	}

	to {
		mask-position: 0% 0;
	}
`;

export const seatSequenceKeyframes = keyframes`
  0% {
    background-position: 0px top;
  }
  100% {
    background-position: 100% top;
  }
`;

export const pulseFadeSeat = keyframes`

  0% {
    opacity: 0;
  }

  30% {
    opacity: 0.2;
  }

  80% {
    opacity: 0.2;
  }

  100% {
    opacity: 0;
  }
`;

export const bounce = keyframes`
  0% {
    transform: translateX(-50%) translateY(-5px) scale(1);
  }
  50% {
    transform: translateX(-50%) translateY(10px) scale(0.8);
  }
  100% {
    transform: translateX(-50%) translateY(-5px) scale(1);
  }
`;

export const scrollAnim = keyframes`
  0% {stroke-dashoffset: 10;}
  100% {stroke-dashoffset: 0;}
`;

export const scrollCopyFade = keyframes`
  0% {opacity: 1;}
  25% {opacity: 1;}
  50% {opacity: 0;}
  75% {opacity: 1;}
  100% {opacity: 1;}
`;
