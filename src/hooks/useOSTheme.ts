import { useEffect, useState } from 'react';

const useOSTheme = () => {
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Detect system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // Function to update color scheme
    const updateColorScheme = () => {
      setColorScheme(mediaQuery.matches ? 'dark' : 'light');
    };

    // Initial check
    updateColorScheme();

    // Listen for changes
    mediaQuery.addEventListener('change', updateColorScheme);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', updateColorScheme);
  }, []);

  return colorScheme;
};

export { useOSTheme };
