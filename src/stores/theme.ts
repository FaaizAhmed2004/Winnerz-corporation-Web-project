import { create } from 'zustand';
import { Theme } from '@/types';
import { storage } from '@/lib/storage';

interface ThemeStore {
  theme: Theme;
  isLoading: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  loadTheme: () => Promise<void>;
  saveTheme: () => Promise<void>;
}

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: 'light',
  isLoading: false,

  toggleTheme: () => {
    const { theme } = get();
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';
    set({ theme: newTheme });
    get().saveTheme();
    
    // Apply theme to document
    if (typeof window !== 'undefined' && document) {
      document.documentElement.classList.toggle('dark', newTheme === 'dark');
    }
  },

  setTheme: (theme: Theme) => {
    set({ theme });
    get().saveTheme();
    
    // Apply theme to document
    if (typeof window !== 'undefined' && document) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  },

  loadTheme: async () => {
    set({ isLoading: true });
    try {
      const savedTheme = await storage.get<Theme>('theme');
      if (savedTheme) {
        set({ theme: savedTheme });
        
        // Apply theme to document
        if (typeof window !== 'undefined' && document) {
          document.documentElement.classList.toggle('dark', savedTheme === 'dark');
        }
      } else {
        // Default to light theme
        get().setTheme('light');
      }
    } catch (error) {
      console.error('Failed to load theme:', error);
    } finally {
      set({ isLoading: false });
    }
  },

  saveTheme: async () => {
    const { theme } = get();
    try {
      await storage.set('theme', theme);
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }
}));