import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-dark text-white p-3 mb-4">
      <nav className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 m-0">Dragon Ball App</h1>
        <div>
          <Link to="/" className="btn btn-outline-light me-2">Inicio</Link>
          <Link to="/list" className="btn btn-outline-light me-2">Listado</Link>
          <Link to="/contact" className="btn btn-outline-light">Contacto</Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
