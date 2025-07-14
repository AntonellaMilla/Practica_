// src/components/CardList.jsx
import Card from './Card';

function CardList({ items }) {
  if (!items || items.length === 0) return <p>No hay Pokémon disponibles.</p>;

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {items.map((item) => (
        <div className="col" key={item.id}>
          <Card {...item} />
        </div>
      ))}
    </div>
  );
}

export default CardList;
