import React, { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorege";

export const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (<ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>);
};
