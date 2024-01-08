import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {DARK_THEME_COLORS, LIGHT_THEME_COLORS} from '../shared/theme.ts';

interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext({
  darkMode: false,
  toggleTheme: () => {},
  getColors: () => DARK_THEME_COLORS,
});

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadThemeFromStorage = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('darkMode');
        if (storedTheme !== null) {
          setDarkMode(JSON.parse(storedTheme));
        }
      } catch (error) {
        console.log(error);
      }
    };

    loadThemeFromStorage();
  }, []);

  useEffect(() => {
    const updateLocalDarkMode = async () => {
      try {
        await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
      } catch (error) {
        console.log(error);
      }
    };

    updateLocalDarkMode();
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const getColors = () => {
    return darkMode ? DARK_THEME_COLORS : LIGHT_THEME_COLORS;
  };

  return {darkMode, toggleTheme, getColors};
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const theme = useTheme();

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  return useContext(ThemeContext);
};
