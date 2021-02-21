import "styled-components";

export interface IColors {
  primary: string;
  primaryVariant: string;
  secondary: string;
  secondaryVariant: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
}

interface IFonts {
  title: string;
  body: string;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
