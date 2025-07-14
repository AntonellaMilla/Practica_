// src/components/CardList.jsx
import Card from './Card';

function CardList({ items }) {
  if (!items || items.length === 0) return <p>No hay personajes disponibles.</p>;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => (
        <div className="col d-flex" key={item.id}>
          <Card
            id={item.id}
            name={item.name}
            image={item.image}
            species={item.species}
            status={item.status}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
