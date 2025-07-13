// src/pages/Home.jsx
import Hero from "../components/Hero";
import CardList from "../components/CardList";
import { useItemStore } from "../store/useItemStore";
import { useEffect } from "react";
import axios from "axios";

function Home() {
  const { items, setItems } = useItemStore();

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/character")
      .then((res) => setItems(res.data.results.slice(0, 6))); // solo 6 para vista previa
  }, []);

  return (
    <main className="container">
      <Hero />
      <h2 className="mt-4">Personajes destacados</h2>
      <CardList items={items} />
    </main>
  );
}

export default Home;
