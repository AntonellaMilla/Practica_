// src/components/Card.jsx
const Card = ({ item }) => (
  <div className="card">
    <img src={item.image} className="card-img-top" alt={item.name} />
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p className="card-text">Status: {item.status}</p>
    </div>
  </div>
);

export default Card;
