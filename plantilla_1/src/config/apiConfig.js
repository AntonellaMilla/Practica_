export const apiConfig = {
  dragonBall: {
    url: 'https://dragonball-api.com/api/characters?page=1',
    getItems: data => data, // ya es un array
    mapItem: item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      types: item.race || 'Desconocido',
    }),
  },

  rickAndMorty: {
    url: 'https://rickandmortyapi.com/api/character',
    getItems: data => data.results,
    mapItem: item => ({
      id: item.id,
      name: item.name,
      image: item.image,
      types: item.species,
    }),
  },

  pokeapi: {
    url: 'https://pokeapi.co/api/v2/pokemon?limit=20',
    getItems: data => data.results,
    mapItem: item => {
      const id = item.url.split("/").filter(Boolean).pop();
      return {
        id,
        name: item.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        types: 'Pokémon',
      };
    },
  },

  // Agrega aquí otras APIs si las necesitas...
};
