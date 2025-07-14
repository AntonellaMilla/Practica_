// src/store/useItemStore.js
import { create } from 'zustand';
import axios from 'axios';

export const useItemStore = create((set, get) => ({
  items: [],
  loading: false,
  favorites: [],

  setItems: (items) => set({ items }),
  
  toggleFavorite: (pokemon) => {
    const { favorites } = get();
    const exists = favorites.some((p) => p.id === pokemon.id);

    set({
      favorites: exists
        ? favorites.filter((p) => p.id !== pokemon.id)
        : [...favorites, pokemon],
    });
  },

  isFavorite: (id) => {
    return get().favorites.some((p) => p.id === id);
  },

  fetchItems: async () => {
    set({ loading: true });
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=20');
      const results = response.data.results;

      const detailedItems = await Promise.all(
        results.map(async (pokemon) => {
          const res = await axios.get(pokemon.url);
          return {
            id: res.data.id,
            name: res.data.name,
            image: res.data.sprites.other['official-artwork'].front_default,

            types: res.data.types.map((t) => t.type.name).join(', '),
          };
        })
      );

      set({ items: detailedItems, loading: false });
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
      set({ loading: false });
    }
  },
}));
