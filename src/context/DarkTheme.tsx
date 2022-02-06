import { useContext, createContext, useState } from "react";

type DarkThemeType = {
  dark: boolean;
  setDarkTheme: (dark: boolean) => void;
};
const ThemeStore = createContext<DarkThemeType>({
  dark: false,
  setDarkTheme: () => {},
});

export const DarkThemeProvider: React.FC = ({ children }) => {
  const [dark, setDarkTheme] = useState<boolean>(false);
  return (
    <ThemeStore.Provider value={{ dark, setDarkTheme }}>
      {children}
    </ThemeStore.Provider>
  );
};

export const useDarkTheme = () => {
  const { dark, setDarkTheme } = useContext(ThemeStore);
  return {
    dark,
    setDarkTheme,
  };
};
