import { create } from 'zustand';
import axios from 'axios';

export const useItemStore = create((set) => ({
  items: [],
  loading: false,
  fetchItems: async () => {
    set({ loading: true });
    try {
      const res = await axios.get('https://dragonball-api.com/api/characters?limit=30');
      set({ items: res.data.items, loading: false });
    } catch (err) {
      console.error('Error al obtener personajes:', err);
      set({ loading: false });
    }
  },
}));
