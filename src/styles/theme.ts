import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';

type Mode = 'adaptive' | 'exact';

export interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    surface: string;
    surfaceVariant: string;
    outline: string;
    elevation: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
  };
  mode: Mode;
  roundness: number;
  animation: {
    scale: number;
  };
}

export const lightTheme: CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#415F91',
    background: '#111318',
    surface: '#F9F9FF',
    surfaceVariant: '#E0E2EC',
    outline: '#74777F',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(247, 243, 249)',
      level2: 'rgb(243, 237, 246)',
      level3: 'rgb(238, 232, 244)',
      level4: 'rgb(236, 230, 243)',
      level5: 'rgb(233, 227, 241)',
    },
  },
  fonts: {
    ...DefaultTheme.fonts,
  },
  mode: 'adaptive',
  roundness: 4,
  animation: {
    scale: 1.0,
  },
};

export const darkTheme: CustomTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#AAC7FF',
    background: '#111318',
    surface: '#111318',
    surfaceVariant: '#44474E',
    outline: '#8E9099',
    elevation: {
      level0: 'transparent',
      level1: 'rgb(37, 35, 42)',
      level2: 'rgb(44, 40, 49)',
      level3: 'rgb(49, 44, 56)',
      level4: 'rgb(51, 46, 58)',
      level5: 'rgb(52, 49, 63)',
    },
  },
  fonts: {
    ...DarkTheme.fonts,
  },
  mode: 'adaptive',
  roundness: 4,
  animation: {
    scale: 1.0,
  },
};
