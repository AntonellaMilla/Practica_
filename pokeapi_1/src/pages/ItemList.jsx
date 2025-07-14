// src/pages/ItemList.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore";

const ITEMS_PER_PAGE = 20;

function ItemList() {
  const { items, setItems } = useItemStore();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Math.max(1, parseInt(searchParams.get("page")) || 1);
  const search = searchParams.get("search")?.toLowerCase() || "";

  const [totalPages, setTotalPages] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setErrorMsg("");

      try {
        if (search) {
          // Buscar por nombre exacto
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
          const poke = res.data;

          const item = {
            id: poke.id,
            name: poke.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`,
            types: poke.types.map((t) => t.type.name).join(", "),
          };

          setItems([item]);
          setTotalPages(1);
        } else {
          // Listado paginado
          const offset = (page - 1) * ITEMS_PER_PAGE;
          const url = `https://pokeapi.co/api/v2/pokemon?limit=${ITEMS_PER_PAGE}&offset=${offset}`;
          const res = await axios.get(url);

          const totalCount = res.data.count;
          setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));

          const detailedItems = await Promise.all(
            res.data.results.map(async (pokemon) => {
              const result = await axios.get(pokemon.url);
              const id = result.data.id;
              return {
                id,
                name: result.data.name,
                image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                types: result.data.types.map((t) => t.type.name).join(", "),
              };
            })
          );

          setItems(detailedItems);
        }
      } catch (error) {
        console.error("Error al obtener Pokémon:", error);
        setItems([]);
        setTotalPages(1);
        setErrorMsg(search ? `No se encontró el Pokémon "${search}"` : "Error al cargar los datos.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, search]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setSearchParams((prev) => {
        const params = new URLSearchParams(prev);
        params.set("page", newPage);
        return params;
      });
    }
  };

  return (
    <main className="container py-4">
      <h2 className="mb-4 text-center">Listado de Pokémon</h2>

      {loading ? (
        <p className="text-center">Cargando Pokémon...</p>
      ) : errorMsg ? (
        <p className="text-center text-danger">{errorMsg}</p>
      ) : items.length > 0 ? (
        <>
          <CardList items={items} />

          {/* PAGINACIÓN solo si no hay búsqueda */}
          {!search && (
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn btn-outline-secondary me-2"
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
              >
                Anterior
              </button>
              <span className="align-self-center mx-2">
                Página {page} de {totalPages}
              </span>
              <button
                className="btn btn-outline-secondary ms-2"
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
              >
                Siguiente
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center">No se encontraron Pokémon.</p>
      )}
    </main>
  );
}

export default ItemList;
