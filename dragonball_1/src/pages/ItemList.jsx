import { useEffect, useState } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';

function ItemList() {
  const { items, fetchItems, loading } = useItemStore();
  const [filter, setFilter] = useState('');

  useEffect(() => {
    fetchItems();
  }, []);

  const filtered = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <section>
      <h2 className="mb-4">Listado de Personajes</h2>

      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por nombre..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {loading ? <p>Cargando...</p> : <CardList items={filtered} />}
    </section>
  );
}

export default ItemList;
