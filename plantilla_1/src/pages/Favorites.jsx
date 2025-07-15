import { useItemStore } from "../store/useItemStore"; // ✅
import CardList from "../components/CardList"; // ✅

function Favorites() {
  const { favorites } = useItemStore(); // ✅

  return (
    <main className="container py-4">
      <h2 className="mb-4 text-center">Favoritos ⭐</h2>
      <p className="text-center text-muted">
        Aquí puedes mostrar tus elementos favoritos desde la API.
      </p>

      {favorites.length > 0 ? (
        <CardList items={favorites} /> // ✅
      ) : (
        <p className="text-center">Aún no tienes favoritos seleccionados.</p> // ✅
      )}
    </main>
  );
}

export default Favorites;
