import { ITheme } from "../../styled";

const vacciTheme: ITheme = {
  colors: {
    primary: "#065A82",
    secondary: "#1C7293",
    tertiary: "#065A82",
    background: "#ececec",
    surface: "#F9F9F9",
    error: "#C1292E",
    onPrimary: "#FDFFFC",
    onSecondary: "#FDFFFC",
    onBackground: "#033045",
    onBackgroundContrast: "#777777",
    onSurface: "#033045",
    onTertiary: "#FDFFFC",
    onError: "#FFFFFF",
  },
  fonts: {
    title: "'Merriweather', sans-serif;",
    body: "'Merriweather Sans', sans-serif;",
  },
  spacing: {
    s: "0.5rem",
    m: "1rem",
    l: "2rem",
    none: "0",
  },
};

export { vacciTheme };
