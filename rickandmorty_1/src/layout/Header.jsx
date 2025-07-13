// src/layout/Header.jsx
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/list?search=${encodeURIComponent(query.trim())}`);
      setQuery(""); // limpiar campo
    }
  };

  return (
    <header className="bg-dark text-white p-3 mb-4">
      <nav className="container d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="h4 m-0">Rick & Morty</h1>
        <ul className="nav me-3">
          <li className="nav-item">
            <NavLink to="/" className="nav-link text-white">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/list" className="nav-link text-white">Personajes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className="nav-link text-white">Contacto</NavLink>
          </li>
        </ul>
        <form className="d-flex" onSubmit={handleSearch}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Buscar personaje..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-light" type="submit">Buscar</button>
        </form>
      </nav>
    </header>
  );
}

export default Header;
