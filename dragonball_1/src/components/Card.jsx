function Card({ name, ki, maxKi, race, image }) {
  return (
    <div className="text-center border rounded shadow p-3 w-100 h-100">
      <div
        style={{
          width: "100%",
          height: "300px", // Aumentamos el alto para mostrar el cuerpo entero
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <img
          src={image}
          alt={name}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </div>
      <h5 className="mt-3">{name}</h5>
      <p>Raza: {race}</p>
      <p>Ki: {ki}</p>
      <p>Ki Máx.: {maxKi}</p>
    </div>
  );
}
export default Card;
