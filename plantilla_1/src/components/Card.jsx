// src/components/Card.jsx
import { Link } from 'react-router-dom';
import { useItemStore } from '../store/useItemStore'; // ✅ Importar el store

function Card({ id, name, image, types }) { ///IMPORTANTE

  const { toggleFavorite, isFavorite } = useItemStore(); // ✅ Acceder a favoritos
  const favorite = isFavorite(id); // ✅ Saber si este ítem es favorito

  return (
    <div className="card h-100 d-flex flex-column shadow-sm">
      {/* Imagen */}
      <img
        src={image || 'https://via.placeholder.com/200'} // ✅ Imagen de respaldo
        alt={name}
        className="card-img-top bg-light p-3"
        style={{ objectFit: 'contain', height: '200px' }} // ✅ Misma altura
      />

      {/* Contenido */}
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-capitalize">{name}</h5>
          <p className="card-text">Tipo: {types}</p>
        </div>

        {/* Botones */}
        <div className="mt-3 d-flex justify-content-between align-items-center">
          <Link to={`/detail/${id}`} className="btn btn-sm btn-primary">
            Ver Detalles
          </Link>
          <button
            className={`btn btn-sm ${favorite ? 'btn-warning' : 'btn-outline-warning'}`}
            onClick={() => toggleFavorite({ id, name, image, types })}
          >
            {favorite ? '★' : '☆'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
