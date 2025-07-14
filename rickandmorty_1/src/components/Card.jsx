// src/components/Card.jsx
import { Link } from 'react-router-dom';

function Card({ id, name, image, species, status }) {
  return (
    <div className="text-center border rounded shadow p-3 w-100 h-100 bg-light">
      <div
        style={{
          width: '100%',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            objectFit: 'contain',
          }}
        />
      </div>
      <h5 className="mt-3 fw-bold">{name}</h5>
      <p className="mb-1">Especie: <strong>{species}</strong></p>
      <p className="mb-2">Estado: <strong>{status}</strong></p>

      <Link to={`/detail/${id}`} className="btn btn-primary btn-sm">
        Ver más
      </Link>
    </div>
  );
}

export default Card;
