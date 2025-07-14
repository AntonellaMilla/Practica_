import { create } from 'zustand';
import axios from 'axios';

export const useItemStore = create((set) => ({
  items: [],
  loading: false,
  page: 1,
  totalPages: 1,

  // ⬇️ name es opcional, se usa para búsquedas exactas
  fetchItems: async (page = 1, limit = 12, name = '') => {
    set({ loading: true });

    try {
      let url = `https://dragonball-api.com/api/characters?page=${page}&limit=${limit}`;
      if (name) {
        url = `https://dragonball-api.com/api/characters?name=${encodeURIComponent(name)}`;
      }

      const response = await axios.get(url);
      const data = response.data;

      // 🔍 La API devuelve estructura distinta si hay filtro por nombre exacto
      if (Array.isArray(data)) {
        set({
          items: data,
          page: 1,
          totalPages: 1,
          loading: false,
        });
      } else {
        set({
          items: Array.isArray(data.items) ? data.items : [],
          page: data.meta?.currentPage || 1,
          totalPages: data.meta?.totalPages || 1,
          loading: false,
        });
      }

    } catch (error) {
      console.error('❌ Error al obtener personajes:', error);
      set({ loading: false });
    }
  },

  setPage: (newPage) => set({ page: newPage }),
}));
