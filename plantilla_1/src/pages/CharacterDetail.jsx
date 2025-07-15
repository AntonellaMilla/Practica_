// src/pages/CharacterDetail.jsx
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useItemStore } from "../store/useItemStore"; // ✅ Importar el store

function CharacterDetail() {
  const { id } = useParams(); // ✅ Obtener el ID desde la URL

  // ✅ Acceder al estado global del store
  const { selectedItem, fetchItemById, loadingDetail } = useItemStore();

  // ✅ Llamar a la función del store al montar el componente
  useEffect(() => {
    fetchItemById(id);
  }, [id]);

  // ⏳ Mostrar mensaje mientras se carga
  if (loadingDetail) {
    return <p className="text-center mt-4">Cargando detalles...</p>;
  }

  // ⚠️ Mostrar error si no se encontró el ítem
  if (!selectedItem) {
    return (
      <p className="text-center text-danger mt-4">
        No se pudo cargar la información del producto.
      </p>
    );
  }

  // ✅ Renderizar el contenido una vez cargado
  return (
    <main className="container py-4">
      {/* 🔙 Botón para volver al listado */}
      <Link to="/list" className="btn btn-outline-primary mb-4">
        ← Volver al Listado
      </Link>

      {/* 🧾 Tarjeta con detalle del ítem */}
      <div className="card shadow p-4 text-center">
        <img
          src={selectedItem.image || "https://via.placeholder.com/200"} // ✅ Imagen con respaldo
          alt={selectedItem.title}
          className="mx-auto mb-3"
          style={{ maxWidth: "200px" }}
        />
        <h2 className="text-capitalize">{selectedItem.title}</h2> {/* ✅ Título */}
        <p><strong>ID:</strong> {selectedItem.id}</p>
        <p><strong>Categoría:</strong> {selectedItem.category}</p> {/* ✅ Categoría */}
        <p><strong>Precio:</strong> ${selectedItem.price}</p> {/* ✅ Precio */}
        <p><strong>Descripción:</strong> {selectedItem.description}</p> {/* ✅ Descripción */}
      </div>
    </main>
  );
}

export default CharacterDetail;
