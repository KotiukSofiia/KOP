import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useSettingsStore = create(
  persist(
    (set) => ({
      difficulty: 'easy',
      
      setDifficulty: (level) => set({ difficulty: level }),
    }),
    {
      name: 'settings-storage', 
    }
  )
);