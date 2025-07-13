// src/pages/ItemList.jsx
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore";

function ItemList() {
  const { items, setItems } = useItemStore();
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const baseURL = "https://rickandmortyapi.com/api/character";
        const url = searchQuery
          ? `${baseURL}/?name=${encodeURIComponent(searchQuery)}`
          : baseURL;

        const res = await axios.get(url);
        setItems(res.data.results);
      } catch (error) {
        setItems([]); // sin resultados
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <main className="container py-4">
      <h2>Listado de Personajes</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : items.length > 0 ? (
        <CardList items={items} />
      ) : (
        <p>No se encontraron personajes.</p>
      )}
    </main>
  );
}

export default ItemList;
