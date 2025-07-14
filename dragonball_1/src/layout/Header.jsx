import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim() !== '') {
      navigate(`/list?name=${encodeURIComponent(search.trim())}`);
      setSearch('');
    }
  };

  return (
    <header className="bg-dark text-white p-3 mb-4">
      <nav className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <h1 className="h3 m-0 mb-3 mb-md-0">Dragon Ball App</h1>

        <div className="d-flex align-items-center">
          <Link to="/" className="btn btn-outline-light me-2">Inicio</Link>
          <Link to="/list" className="btn btn-outline-light me-2">Listado</Link>
          <Link to="/contact" className="btn btn-outline-light me-3">Contacto</Link>

          <form className="d-flex" onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control me-2"
              placeholder="Buscar personaje..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-warning">Buscar</button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default Header;
