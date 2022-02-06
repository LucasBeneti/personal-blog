import {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

type DarkThemeType = {
  dark: boolean;
  setDarkTheme: (dark: boolean) => void;
};

const DarkTheme = createContext<DarkThemeType>({
  dark: false,
  setDarkTheme: (dark) => console.warn("no dark theme provider"),
});
export const DarkThemeProvider: React.FC = ({ children }) => {
  const [dark, setDarkTheme] = useState(false);
  return (
    <DarkTheme.Provider value={{ dark, setDarkTheme }}>
      {children}
    </DarkTheme.Provider>
  );
};

export const useDarkTheme = () => {
  const { dark, setDarkTheme } = useContext(DarkTheme);
  return {
    dark,
    setDarkTheme,
  };
};
