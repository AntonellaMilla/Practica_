import { useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

function Home() {
  const { items, fetchItems, loading } = useItemStore();

  useEffect(() => {
    if (items.length === 0) {
      fetchItems();
    }
  }, []);

  return (
    <>
      <Hero />

      <section className="container mt-5">
        <div className="text-center mb-4">
          <h2 className="fw-bold">Personajes Destacados</h2>
          <p className="text-muted">Una muestra de los más poderosos del universo Dragon Ball</p>
          <Link to="/list" className="btn btn-outline-warning mt-2">Ver Todos</Link>
        </div>

        {loading ? (
          <p className="text-center">Cargando personajes...</p>
        ) : items.length > 0 ? (
          <CardList items={items.slice(0, 6)} />
        ) : (
          <p className="text-center">No se encontraron personajes.</p>
        )}
      </section>
    </>
  );
}

export default Home;
