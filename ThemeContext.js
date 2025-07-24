import React, { createContext, useState, useEffect } from "react";
import { Appearance } from "react-native";
import { lightTheme, darkTheme } from "./theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
  isDark: false,
});

export const ThemeProvider = ({ children }) => {
  const systemColorScheme = Appearance.getColorScheme();
  const [isDark, setIsDark] = useState(systemColorScheme === "dark");
  const [manual, setManual] = useState(false);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (!manual) {
        setIsDark(colorScheme === "dark");
      }
    });
    return () => subscription.remove();
  }, [manual]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    setManual(true);
  };

  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
