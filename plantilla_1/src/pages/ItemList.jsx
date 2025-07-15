import { useEffect } from "react";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore"; // ✅
import { useSearchParams } from "react-router-dom";// ✅

function ItemList() {
  const { items, loading, fetchItems } = useItemStore(); // ✅


  const [searchParams] = useSearchParams();

const page = Math.max(1, parseInt(searchParams.get("page")) || 1);
const search = searchParams.get("search")?.toLowerCase() || "";// ✅

  useEffect(() => {
    fetchItems(search);   // el search es del buscador ✅
  }, [search]);

  return (
    <main className="container py-4">
      <h2 className="mb-4 text-center">Listado</h2>
      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : items.length > 0 ? (
        <CardList items={items} />
      ) : (
        <p className="text-center">No se encontraron elementos.</p>
      )}
    </main>
  );
}

export default ItemList;
