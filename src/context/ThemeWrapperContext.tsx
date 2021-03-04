import React, { Dispatch, SetStateAction } from "react";
import { vacciTheme } from "../theme/default";
import { ThemeProvider } from "styled-components";

interface Props {
  background: string;
  setBackground: Dispatch<SetStateAction<string>>;
  resetBackground: () => void;
  primary: string;
  setPrimary: Dispatch<SetStateAction<string>>;
  resetPrimary: () => void;
  secondary: string;
  setSecondary: Dispatch<SetStateAction<string>>;
  resetSecondary: () => void;
  tertiary: string;
  setTertiary: Dispatch<SetStateAction<string>>;
  resetTertiary: () => void;
  onPrimary: string;
  setOnPrimary: Dispatch<SetStateAction<string>>;
  resetOnPrimary: () => void;
  onSecondary: string;
  setOnSecondary: Dispatch<SetStateAction<string>>;
  resetOnSecondary: () => void;
  onTertiary: string;
  setOnTertiary: Dispatch<SetStateAction<string>>;
  resetOnTertiary: () => void;
  onBackground: string;
  setOnBackground: Dispatch<SetStateAction<string>>;
  resetOnBackground: () => void;
  onBackgroundContrast: string;
  setOnBackgroundContrast: Dispatch<SetStateAction<string>>;
  resetOnBackgroundContrast: () => void;
  copyToClipboard: () => void;
}
const ThemeWrapperContext = React.createContext<Props>({
  background: vacciTheme.colors.background,
  setBackground: () => {},
  resetBackground: () => {},
  primary: vacciTheme.colors.primary,
  setPrimary: () => {},
  resetPrimary: () => {},
  secondary: vacciTheme.colors.secondary,
  setSecondary: () => {},
  resetSecondary: () => {},
  tertiary: vacciTheme.colors.tertiary,
  setTertiary: () => {},
  resetTertiary: () => {},
  onPrimary: vacciTheme.colors.onPrimary,
  setOnPrimary: () => {},
  resetOnPrimary: () => {},
  onSecondary: vacciTheme.colors.onSecondary,
  setOnSecondary: () => {},
  resetOnSecondary: () => {},
  onTertiary: vacciTheme.colors.onTertiary,
  setOnTertiary: () => {},
  resetOnTertiary: () => {},
  onBackground: vacciTheme.colors.onBackground,
  setOnBackground: () => {},
  resetOnBackground: () => {},
  onBackgroundContrast: vacciTheme.colors.onBackgroundContrast,
  setOnBackgroundContrast: () => {},
  resetOnBackgroundContrast: () => {},
  copyToClipboard: () => {},
});

const ThemeWrapperContextProvider: React.FC = ({ children }) => {
  const [background, setBackground] = React.useState(
    vacciTheme.colors.background
  );
  const [primary, setPrimary] = React.useState(vacciTheme.colors.primary);
  const [secondary, setSecondary] = React.useState(vacciTheme.colors.secondary);
  const [tertiary, setTertiary] = React.useState(vacciTheme.colors.tertiary);
  const [onPrimary, setOnPrimary] = React.useState(vacciTheme.colors.onPrimary);
  const [onSecondary, setOnSecondary] = React.useState(
    vacciTheme.colors.onSecondary
  );
  const [onTertiary, setOnTertiary] = React.useState(
    vacciTheme.colors.onTertiary
  );
  const [onBackground, setOnBackground] = React.useState(
    vacciTheme.colors.onBackground
  );
  const [onBackgroundContrast, setOnBackgroundContrast] = React.useState(
    vacciTheme.colors.onBackgroundContrast
  );

  function resetBackground() {
    setBackground(vacciTheme.colors.background);
  }

  function resetPrimary() {
    setPrimary(vacciTheme.colors.primary);
  }

  function resetSecondary() {
    setSecondary(vacciTheme.colors.secondary);
  }

  function resetTertiary() {
    setTertiary(vacciTheme.colors.tertiary);
  }

  function resetOnPrimary() {
    setOnPrimary(vacciTheme.colors.onPrimary);
  }

  function resetOnSecondary() {
    setOnSecondary(vacciTheme.colors.onSecondary);
  }

  function resetOnTertiary() {
    setOnTertiary(vacciTheme.colors.onTertiary);
  }

  function resetOnBackground() {
    setOnBackground(vacciTheme.colors.onBackground);
  }

  function resetOnBackgroundContrast() {
    setOnBackgroundContrast(vacciTheme.colors.onBackgroundContrast);
  }

  function copyToClipboard() {
    window.prompt(
      "Copy to clipboard: Ctrl+C, Enter",
      JSON.stringify({
        ...vacciTheme.colors,
        background,
        primary,
        secondary,
        tertiary,
        onPrimary,
        onSecondary,
        onTertiary,
        onBackground,
        onBackgroundContrast,
      })
    );
  }
  return (
    <ThemeWrapperContext.Provider
      value={{
        background,
        setBackground,
        resetBackground,
        primary,
        setPrimary,
        resetPrimary,
        secondary,
        setSecondary,
        resetSecondary,
        tertiary,
        setTertiary,
        resetTertiary,
        onPrimary,
        setOnPrimary,
        resetOnPrimary,
        onSecondary,
        setOnSecondary,
        resetOnSecondary,
        onTertiary,
        setOnTertiary,
        resetOnTertiary,
        onBackground,
        setOnBackground,
        resetOnBackground,
        onBackgroundContrast,
        setOnBackgroundContrast,
        resetOnBackgroundContrast,
        copyToClipboard,
      }}
    >
      <ThemeProvider
        theme={{
          ...vacciTheme,
          colors: {
            ...vacciTheme.colors,
            background,
            primary,
            secondary,
            tertiary,
            onPrimary,
            onSecondary,
            onTertiary,
            onBackground,
            onBackgroundContrast,
          },
        }}
      >
        {children}
      </ThemeProvider>
    </ThemeWrapperContext.Provider>
  );
};

export { ThemeWrapperContextProvider, ThemeWrapperContext };
