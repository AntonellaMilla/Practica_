// src/config/apiConfig.js

// Configuración general para distintas APIs públicas.
// Cada entrada incluye:
// - url: URL base para hacer fetch
// - getItems: función para extraer la lista de elementos del response
// - mapItem: función para mapear cada elemento a un formato común (id, name, image, types)

export const CURRENT_API = 'dogapi'; // Puedes cambiar por: 'dragonBall', 'rickAndMorty', etc.


export const apiConfig = {
  dragonBall: {
    url: 'https://dragonball-api.com/api/characters?page=1&limit=12',
    getItems: (data) => {
      // Si la búsqueda es exacta, devuelve un array directamente; si no, usa data.items
      return Array.isArray(data) ? data : data.items || [];
    },
    mapItem: (item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      types: item.race || 'Desconocido',
    }),
  },

  rickAndMorty: {
    url: 'https://rickandmortyapi.com/api/character',
    getItems: (data) => data.results,
    mapItem: (item) => ({
      id: item.id,
      name: item.name,
      image: item.image,
      types: item.species,
    }),
  },

  pokeapi: {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0',
    getItems: (data) => data.results,
    mapItem: (item) => {
      // Este mapeo supone que ya se ha hecho una segunda petición con detalles completos
      return {
        id: item.id,
        name: item.name,
        image:
          item.sprites?.other?.['official-artwork']?.front_default ??
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`,
        types: Array.isArray(item.types)
          ? item.types.map((t) => t.type.name).join(', ')
          : 'Pokémon',
      };
    },
  },

  tmdb: {
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=<<YOUR_API_KEY>>&language=es-ES&page=1',
    getItems: (data) => data.results,
    mapItem: (item) => ({
      id: item.id,
      name: item.title,
      image: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      types: item.genre_ids?.join(', ') || 'Película',
    }),
  },

  fakestore: {
    url: 'https://fakestoreapi.com/products',
    getItems: (data) => data,
    mapItem: (item) => ({
      id: item.id,
      name: item.title,
      image: item.image,
      types: item.category,
    }),
  },

  jsonplaceholder: {
    url: 'https://jsonplaceholder.typicode.com/users',
    getItems: (data) => data,
    mapItem: (item) => ({
      id: item.id,
      name: item.name,
      image: `https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(item.name)}`,
      types: item.company?.name || 'Usuario',
    }),
  },

  dummyjson: {
    url: 'https://dummyjson.com/products',
    getItems: (data) => data.products,
    mapItem: (item) => ({
      id: item.id,
      name: item.title,
      image: item.thumbnail,
      types: item.category,
    }),
  },

  dogapi: {
    url: 'https://dog.ceo/api/breeds/image/random/10',
    getItems: (data) => data.message,
    mapItem: (imageUrl, index) => {
      const breedMatch = imageUrl.match(/breeds\/([^/]+)\//);
      const breed = breedMatch ? breedMatch[1].replace(/-/g, ' ') : 'Desconocido';
      return {
        id: index + 1,
        name: breed,
        image: imageUrl,
        types: 'Perro',
      };
    },
  },

  // Puedes agregar más APIs aquí siguiendo el mismo formato
};
