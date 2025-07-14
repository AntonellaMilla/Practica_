// src/pages/Favorites.jsx
import { useItemStore } from "../store/useItemStore";
import CardList from "../components/CardList";

function Favorites() {
  const favorites = useItemStore((state) => state.favorites);

  return (
    <main className="container py-4">
      <h2 className="text-center mb-4">Pokémon Favoritos</h2>

      {favorites.length > 0 ? (
        <CardList items={favorites} />
      ) : (
        <p className="text-center">No tienes Pokémon marcados como favoritos.</p>
      )}
    </main>
  );
}

export default Favorites;
