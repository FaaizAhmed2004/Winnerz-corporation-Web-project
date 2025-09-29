'use client';

import { useEffect } from 'react';
import { useThemeStore } from '@/stores/theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme, loadTheme } = useThemeStore();

  useEffect(() => {
    loadTheme();
  }, [loadTheme]);

  useEffect(() => {
    if (typeof window !== 'undefined' && document) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return <>{children}</>;
}