import { darkTheme, lightTheme } from '../modules/common/css/theme';

declare module 'styled-components' {
  type ThemeType = typeof lightTheme & typeof darkTheme;

  export interface DefaultTheme extends ThemeType {}
}
