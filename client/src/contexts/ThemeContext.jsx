import { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

const availableThemes = [
  { label: 'VSCode Dark', value: 'vscode-dark' },
  { label: 'VSCode Light', value: 'vscode-light' },
  { label: 'Solarized Light', value: 'solarized-light' },
  { label: 'Solarized Dark', value: 'solarized-dark' }
];

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'vscode-dark');

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, availableThemes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
