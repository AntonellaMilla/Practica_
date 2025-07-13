// src/components/CardList.jsx
import Card from "./Card";

const CardList = ({ items }) => (
  <div className="row">
    {items.map((item) => (
      <div key={item.id} className="col-md-4 mb-3">
        <Card item={item} />
      </div>
    ))}
  </div>
);

export default CardList;
