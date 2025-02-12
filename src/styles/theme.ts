import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';
import color from 'color';

const palette = {
  neutral10: 'rgba(28, 27, 31, 1)',
  neutralVariant20: 'rgba(50, 47, 55, 1)',
  neutral90: 'rgba(230, 225, 229, 1)',
};

const opacity = {
  level2: 0.12,
  level4: 0.38,
};

export interface CustomTheme extends Theme {
  colors: Theme['colors'] & {
    primaryContainer: string;
    secondary: string;
    secondaryContainer: string;
    tertiary: string;
    tertiaryContainer: string;
    surface: string;
    surfaceVariant: string;
    surfaceDisabled: string;
    error: string;
    errorContainer: string;
    onPrimary: string;
    onPrimaryContainer: string;
    onSecondary: string;
    onSecondaryContainer: string;
    onTertiary: string;
    onTertiaryContainer: string;
    onSurface: string;
    onSurfaceVariant: string;
    onSurfaceDisabled: string;
    onError: string;
    onErrorContainer: string;
    onBackground: string;
    outline: string;
    outlineVariant: string;
    inverseSurface: string;
    inverseOnSurface: string;
    inversePrimary: string;
    shadow: string;
    scrim: string;
    backdrop: string;
    elevation: {
      level0: string;
      level1: string;
      level2: string;
      level3: string;
      level4: string;
      level5: string;
    };
  };
}

export const lightTheme: CustomTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#415F91',
    primaryContainer: '#D6E3FF',
    secondary: '#565F71',
    secondaryContainer: '#DAE2F9',
    tertiary: '#705575',
    tertiaryContainer: '#FAD8FD',
    surface: '#F9F9FF',
    surfaceVariant: '#E0E2EC',
    surfaceDisabled: color(palette.neutral10)
      .alpha(opacity.level2)
      .rgb()
      .string(),
    background: '#F9F9FF',
    error: '#BA1A1A',
    errorContainer: '#FFDAD6',
    onPrimary: '#FFFFFF',
    onPrimaryContainer: '#284777',
    onSecondary: '#FFFFFF',
    onSecondaryContainer: '#3E4759',
    onTertiary: '#FFFFFF',
    onTertiaryContainer: '#573E5C',
    onSurface: '#191C20',
    onSurfaceVariant: '#44474E',
    onSurfaceDisabled: color(palette.neutral10)
      .alpha(opacity.level4)
      .rgb()
      .string(),
    onError: '#FFFFFF',
    onErrorContainer: '#93000A',
    onBackground: '#191C20',
    outline: '#74777F',
    outlineVariant: '#C4C6D0',
    inverseSurface: '#2E3036',
    inverseOnSurface: '#F0F0F7',
    inversePrimary: '#AAC7FF',
    shadow: '#000000',
    scrim: '#000000',
    backdrop: color(palette.neutralVariant20).alpha(0.4).rgb().string(),
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
};

export const darkTheme: CustomTheme = {
  dark: true,
  colors: {
    ...DarkTheme.colors,
    primary: '#AAC7FF',
    primaryContainer: '#284777',
    secondary: '#BEC6DC',
    secondaryContainer: '#3E4759',
    tertiary: '#DDBCE0',
    tertiaryContainer: '#573E5C',
    surface: '#111318',
    surfaceVariant: '#44474E',
    surfaceDisabled: color(palette.neutral90)
      .alpha(opacity.level2)
      .rgb()
      .string(),
    background: '#111318',
    error: '#FFB4AB',
    errorContainer: '#93000A',
    onPrimary: '#0A305F',
    onPrimaryContainer: '#D6E3FF',
    onSecondary: '#283141',
    onSecondaryContainer: '#DAE2F9',
    onTertiary: '#3F2844',
    onTertiaryContainer: '#FAD8FD',
    onSurface: '#E2E2E9',
    onSurfaceVariant: '#C4C6D0',
    onSurfaceDisabled: color(palette.neutral90)
      .alpha(opacity.level4)
      .rgb()
      .string(),
    onError: '#690005',
    onErrorContainer: '#FFDAD6',
    onBackground: '#E2E2E9',
    outline: '#8E9099',
    outlineVariant: '#44474E',
    inverseSurface: '#E2E2E9',
    inverseOnSurface: '#2E3036',
    inversePrimary: '#415F91',
    shadow: '#000000',
    scrim: '#000000',
    backdrop: color(palette.neutralVariant20).alpha(0.4).rgb().string(),
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
};
