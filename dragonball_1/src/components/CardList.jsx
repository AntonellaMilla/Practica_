import Card from './Card';

function CardList({ items }) {
  if (!items || items.length === 0) return <p>No hay personajes disponibles.</p>;

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => (
        <div className="col d-flex" key={item.id}>
          <Card
            id={item.id} // ✅ Aquí estaba el problema
            name={item.name}
            ki={item.ki}
            maxKi={item.maxKi}
            race={item.race}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
}

export default CardList;
