import { keyframes } from 'styled-components';

export const fontColorChanger = keyframes`
    0% { color: #4285F4; }
	25% { color: #DE3E35; }
	50% { color: #F7C223; }
	75% { color: #1B9A59; }
    100% { color: #4285F4; }
`;

export const backgroundColorChanger = keyframes`
0% { background: #4285F4; }
25% { background: #DE3E35; }
50% { background: #F7C223; }
75% { background: #1B9A59; }
100% { background: #4285F4; }
`; 

export const fadeInTop = keyframes`
0% { top: 250px; opacity: 0.5; }
100% { top: 0px; opacity: 1; }
`;

export const fadeInBottom = keyframes`
0% { top: -250px; opacity: 0.5; }
100% { top: 0px; opacity: 1; }
`;

export const popup = keyframes`
0% { bottom: -50px; }
100% { bottom: 0px; }
`;

export const colorPulsate = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(114,187,250, 0.4);
  }
  70% {
      box-shadow: 0 0 0 15px rgba(114,187,250, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0,0,0, 0);
  }
`;

export const pulsate = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0,0,0, 0.4);
  }
  70% {
      box-shadow: 0 0 0 15px rgba(0,0,0, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(0,0,0, 0);
  }
`;