// src/pages/CharacterDetail.jsx

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function CharacterDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = res.data;

        const abilities = await Promise.all(
          data.abilities.map(async (ab) => {
            const abRes = await axios.get(ab.ability.url);
            const effectEntry = abRes.data.effect_entries.find(
              (entry) => entry.language.name === "en"
            );
            return {
              name: ab.ability.name,
              effect: effectEntry?.short_effect || "No effect description available.",
              is_hidden: ab.is_hidden,
            };
          })
        );

        setPokemon({
          id: data.id,
          name: data.name,
          image:
            data.sprites.other["official-artwork"].front_default ||
            data.sprites.front_default,
          height: data.height,
          weight: data.weight,
          types: data.types.map((t) => t.type.name).join(", "),
          abilities,
        });
      } catch (err) {
        console.error("Error loading Pokémon details:", err);
        setPokemon(null);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <p className="text-center mt-4">Cargando detalles...</p>;

  if (!pokemon)
    return (
      <p className="text-center text-danger mt-4">
        No se pudo cargar la información del Pokémon.
      </p>
    );

  return (
    <main className="container py-4">
      <Link to="/list" className="btn btn-outline-primary mb-4">
        ← Volver al Listado
      </Link>

      <div className="card shadow p-4 text-center">
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="mx-auto mb-3"
          style={{ maxWidth: "200px" }}
        />
        <h2 className="text-capitalize">{pokemon.name}</h2>
        <p>
          <strong>ID:</strong> {pokemon.id}
        </p>
        <p>
          <strong>Altura:</strong> {pokemon.height} |{" "}
          <strong>Peso:</strong> {pokemon.weight}
        </p>
        <p>
          <strong>Tipo(s):</strong> {pokemon.types}
        </p>

        <h4 className="mt-4">Habilidades</h4>
        <ul className="list-group">
          {pokemon.abilities.map((ab, idx) => (
            <li
              key={idx}
              className="list-group-item d-flex justify-content-between align-items-start"
            >
              <div>
                <strong className="text-capitalize">{ab.name}</strong>{" "}
                {ab.is_hidden && (
                  <span className="badge bg-secondary ms-1">Oculta</span>
                )}
                <br />
                <small>{ab.effect}</small>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default CharacterDetail;
