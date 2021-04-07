import "styled-components";

export interface IColors {
  primary: string;
  secondary: string;
  tertiary: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onTertiary: string;
  onBackground: string;
  onBackgroundContrast: string;
  onSurface: string;
  onError: string;
}

export interface ISpacing {
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
  none: string;
}

interface IFonts {
  title: string;
  body: string;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
  spacing: ISpacing;
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
