// src/pages/ItemList.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore";

function ItemList() {
  const { items, setItems } = useItemStore();
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseURL = "https://rickandmortyapi.com/api/character";
        const url = `${baseURL}?page=${page}${
          searchQuery ? `&name=${encodeURIComponent(searchQuery)}` : ""
        }`;

        const res = await axios.get(url);
        setItems(res.data.results);
        setTotalPages(res.data.info.pages);
      } catch (error) {
        setItems([]);
        setTotalPages(1);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery, page]);

  const handlePageChange = (newPage) => {
    setSearchParams({ search: searchQuery, page: newPage });
  };

  return (
    <main className="container py-4">
      <h2 className="mb-4 text-center">
        {searchQuery ? `Resultados para: "${searchQuery}"` : "Listado de Personajes"}
      </h2>

      {loading ? (
        <p className="text-center">Cargando...</p>
      ) : items.length > 0 ? (
        <>
          <CardList items={items} />

          {/* PAGINACIÓN */}
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
        </>
      ) : (
        <p className="text-center">No se encontraron personajes.</p>
      )}
    </main>
  );
}

export default ItemList;
