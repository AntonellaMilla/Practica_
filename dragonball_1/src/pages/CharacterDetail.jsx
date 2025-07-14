import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function CharacterDetail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      try {
        const res = await axios.get(`https://dragonball-api.com/api/characters/${id}`);
        setCharacter(res.data);
      } catch (error) {
        console.error("Error al cargar el personaje:", error);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <p className="text-center mt-5">Cargando detalles...</p>;
  }

  if (!character) {
    return <p className="text-center text-danger mt-5">Personaje no encontrado.</p>;
  }

  return (
    <section className="container py-5">
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
          <p><strong>Raza:</strong> {character.race}</p>
          <p><strong>Género:</strong> {character.gender}</p>
          <p><strong>Ki:</strong> {character.ki}</p>
          <p><strong>Ki Máximo:</strong> {character.maxKi}</p>
          <p><strong>Afiliación:</strong> {character.affiliation}</p>
          <p className="mt-3"><strong>Descripción:</strong></p>
          <p>{character.description}</p>
        </div>
      </div>
    </section>
  );
}

export default CharacterDetail;
