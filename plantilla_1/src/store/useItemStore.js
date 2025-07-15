// src/store/useItemStore.js
import { create } from 'zustand';

// 🔧 IMPORTAR configuración de API
import { apiConfig } from '../config/apiConfig';

// 🌐 CAMBIA AQUÍ LA API ACTUAL → Rick and Morty, Dragon Ball, PokeAPI, etc.
const currentAPI = apiConfig.dragonBall; // ← CAMBIAS SOLO ESTA LÍNEA

export const useItemStore = create((set, get) => ({
  items: [],              // Lista general de ítems
  loading: false,         // Cargando ítems
  favorites: [],          // Lista de favoritos

  selectedItem: null,     // Detalle del ítem seleccionado
  loadingDetail: false,   // Estado de carga del detalle

  // 👉 Set manual de ítems si lo necesitas
  setItems: (items) => set({ items }),

  // ⭐ Agregar o quitar favoritos
  toggleFavorite: (item) => {
    const { favorites } = get();
    const exists = favorites.some((f) => f.id === item.id);
    set({
      favorites: exists
        ? favorites.filter((f) => f.id !== item.id)
        : [...favorites, item],
    });
  },

  // ✅ Saber si un ítem es favorito
  isFavorite: (id) => get().favorites.some((f) => f.id === id),

  // 🔍 Obtener todos los ítems con filtro opcional
  fetchItems: async (search = "") => {
    set({ loading: true });

    try {
      // ✅ PARTE QUE CAMBIA SEGÚN LA API USADA
      const response = await fetch(currentAPI.url); // ← URL centralizada
      const data = await response.json();

      // ✅ EXTRAER LISTA DE ÍTEMS DE LA API (según estructura de cada una)
      const rawItems = currentAPI.getItems(data); // ← getItems personalizado

      // ✅ FILTRO GENERAL (usa name o title si existe)
      const filtered = rawItems.filter((item) => {
        const name = (item.name || item.title || "").toLowerCase();
        return name.includes(search.toLowerCase());
      });

      // ✅ MAPEAR A FORMATO ESTÁNDAR USADO EN TU APP
      const mappedItems = filtered.map(currentAPI.mapItem); // ← formatea item

      set({ items: mappedItems, loading: false });

    } catch (error) {
      console.error("Error fetching items:", error);
      set({ loading: false });
    }
  },

  // 🔎 Obtener un ítem por ID (detalle)
  fetchItemById: async (id) => {
    set({ loadingDetail: true });

    try {
      // ✅ PARTE QUE CAMBIA SEGÚN LA API USADA
      const response = await fetch(`${currentAPI.url}/${id}`); // ← ENDPOINT detalle
      const data = await response.json();
      set({ selectedItem: data, loadingDetail: false });

    } catch (error) {
      console.error("Error fetching item by ID:", error);
      set({ selectedItem: null, loadingDetail: false });
    }
  },
}));
