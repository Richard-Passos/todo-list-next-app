import { createContext } from "react";

export const SetThemeContext = createContext();

export function SetThemeProvider({ children, setTheme }) {
  return (
    <SetThemeContext.Provider value={{ setTheme }}>
      {children}
    </SetThemeContext.Provider>
  );
}
