// src/components/Card.jsx
import { Link } from "react-router-dom";
import { useItemStore } from "../store/useItemStore";

function Card({ id, name, image, types }) {
  const toggleFavorite = useItemStore((state) => state.toggleFavorite);
  const isFavorite = useItemStore((state) => state.isFavorite(id));

  return (
    <div className="card h-100 shadow-sm border-0">
      <div className="text-center bg-light p-3">
        <img
          src={image}
          alt={name}
          className="img-fluid"
          style={{ maxHeight: "140px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title text-capitalize mb-2">{name}</h5>
        <p className="card-text mb-3">
          <strong>Tipo:</strong> {types}
        </p>
        <div className="d-flex justify-content-center gap-2">
          <Link to={`/detail/${id}`} className="btn btn-sm btn-outline-primary">
            Ver Detalles
          </Link>
          <button
            className={`btn btn-sm ${isFavorite ? "btn-warning" : "btn-outline-warning"}`}
            onClick={() =>
              toggleFavorite({ id, name, image, types })
            }
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
