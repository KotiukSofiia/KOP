import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useGameStore = create(
  persist(
    (set) => ({
      // налаштування
      difficulty: 'easy',
      setDifficulty: (level) => set({ difficulty: level }),

      // результати
      history: [],
      
      addGameResult: (result) => set((state) => ({
        history: [result, ...state.history] // додаю новий результат на початок
      })),
      
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'hangman-storage',
    }
  )
);