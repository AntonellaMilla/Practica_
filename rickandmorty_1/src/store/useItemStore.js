// src/store/useItemStore.js
import { create } from 'zustand';

export const useItemStore = create((set) => ({
  items: [],
  setItems: (newItems) => set({ items: newItems }),
}));
