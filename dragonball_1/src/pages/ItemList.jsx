import { useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';
import { useLocation } from 'react-router-dom';

function ItemList() {
  const { items, fetchItems, loading, page, totalPages, setPage } = useItemStore();
  const location = useLocation();

  // 🔍 Extraer y capitalizar parámetro "name" de la URL
  const queryParams = new URLSearchParams(location.search);
  let nameFilter = queryParams.get('name');
  if (nameFilter) {
    nameFilter = nameFilter.charAt(0).toUpperCase() + nameFilter.slice(1).toLowerCase();
  }

  // 🧠 Llamar fetchItems cada vez que cambia la página o el filtro
  useEffect(() => {
    fetchItems(page, 12, nameFilter);
  }, [page, nameFilter]);

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  return (
    <section className="container py-5">
      <h2 className="mb-4 text-center">
        {nameFilter ? `Resultados para: "${nameFilter}"` : 'Listado de Personajes'}
      </h2>

      {loading ? (
        <p className="text-center">Cargando personajes...</p>
      ) : items.length > 0 ? (
        <>
          <CardList items={items} />
          <div className="d-flex justify-content-center mt-4">
            <button
              className="btn btn-outline-secondary me-2"
              onClick={handlePrev}
              disabled={page === 1}
            >
              Anterior
            </button>
            <span className="align-self-center mx-2">
              Página {page} de {totalPages}
            </span>
            <button
              className="btn btn-outline-secondary ms-2"
              onClick={handleNext}
              disabled={page === totalPages}
            >
              Siguiente
            </button>
          </div>
        </>
      ) : (
        <p className="text-center">No se encontraron personajes.</p>
      )}
    </section>
  );
}

export default ItemList;
