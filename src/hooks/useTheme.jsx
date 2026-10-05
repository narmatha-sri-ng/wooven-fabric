import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const defaultThemeColors = {
  'theme-a': { primary: '#111111', accent: '#C9A86A', bgBase: '#FFFFFF', bgAlt: '#FAFAFA' },
  'theme-b': { primary: '#8B5E83', accent: '#A36A95', bgBase: '#FFFFFF', bgAlt: '#FAF6F7' },
  'theme-c': { primary: '#5C4033', accent: '#A68A64', bgBase: '#FFFFFF', bgAlt: '#FDFBF7' },
  'theme-d': { primary: '#1E1E1E', accent: '#D4AF37', bgBase: '#FFFFFF', bgAlt: '#F4F4F4' },
};

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('fashion-boutique-theme') || 'theme-a';
  });

  const [customColors, setCustomColorsState] = useState(() => {
    const saved = localStorage.getItem('fashion-custom-colors');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return { ...defaultThemeColors[theme] };
  });

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('fashion-boutique-theme', newTheme);
    
    // Reset custom colors to new theme defaults on theme change
    const newDefaults = { ...defaultThemeColors[newTheme] };
    setCustomColorsState(newDefaults);
    localStorage.setItem('fashion-custom-colors', JSON.stringify(newDefaults));
  };

  const updateCustomColor = (key, val) => {
    const updated = { ...customColors, [key]: val };
    setCustomColorsState(updated);
    localStorage.setItem('fashion-custom-colors', JSON.stringify(updated));
  };

  // Synchronize CSS variables and data attributes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    
    // Apply custom colors as inline CSS variables overriding stylesheets
    root.style.setProperty('--primary', customColors.primary);
    root.style.setProperty('--accent', customColors.accent);
    root.style.setProperty('--bg-base', customColors.bgBase);
    root.style.setProperty('--bg-alt', customColors.bgAlt);
  }, [theme, customColors]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, customColors, updateCustomColor, defaultColors: defaultThemeColors[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
