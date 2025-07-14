// src/layout/Header.jsx
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/list?search=${encodeURIComponent(search)}&page=1`);
    } else if (location.pathname.startsWith("/list")) {
      navigate(`/list?page=1`);
    }
  };

  return (
    <header className="bg-primary text-white p-3">
      <nav className="container d-flex flex-wrap align-items-center justify-content-between">
        <h1 className="mb-2 mb-md-0">PokeAPI</h1>

        <form className="d-flex mb-2 mb-md-0" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Buscar Pokémon..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-light" type="submit">
            Buscar
          </button>
        </form>

        <div className="d-flex flex-wrap">
          <Link className="btn btn-light mx-1 my-1" to="/">Inicio</Link>
          <Link className="btn btn-light mx-1 my-1" to="/list">Listado</Link>
          <Link className="btn btn-light mx-1 my-1" to="/favorites">Favoritos ⭐</Link>
          <Link className="btn btn-light mx-1 my-1" to="/contact">Contacto</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
