// src/pages/CharacterDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
        setCharacter(res.data);
      } catch (err) {
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className="text-center mt-5">Cargando...</p>;
  if (!character) return <p className="text-center text-danger mt-5">Personaje no encontrado.</p>;

  return (
    <main className="container py-5">
      <Link to="/list" className="btn btn-secondary mb-4">← Volver</Link>

      <div className="row align-items-center">
        <div className="col-md-5 text-center mb-4">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-7">
          <h2 className="fw-bold">{character.name}</h2>
          <p><strong>Estado:</strong> {character.status}</p>
          <p><strong>Especie:</strong> {character.species}</p>
          {character.type && <p><strong>Tipo:</strong> {character.type}</p>}
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Origen:</strong> {character.origin.name}</p>
          <p><strong>Ubicación actual:</strong> {character.location.name}</p>
          <p><strong>Total de episodios:</strong> {character.episode.length}</p>
        </div>
      </div>
    </main>
  );
}

export default CharacterDetail;
