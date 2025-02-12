import {CustomTheme} from './styles/theme';

declare module '@react-navigation/native' {
  export function useTheme(): CustomTheme;
}
