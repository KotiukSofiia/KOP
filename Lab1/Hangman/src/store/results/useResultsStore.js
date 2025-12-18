import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useResultsStore = create(
  persist(
    (set) => ({
      history: [],
      
      addGameResult: (result) => set((state) => ({
        history: [result, ...state.history] 
      })),
      
      clearHistory: () => set({ history: [] }),
    }),
    {
      name: 'results-storage',
    }
  )
);