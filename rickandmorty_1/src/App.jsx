// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import ItemList from "./pages/ItemList";
import Contact from "./pages/Contact";
import CharacterDetail from "./pages/CharacterDetail"; // ✅ Importar la vista de detalle

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="list" element={<ItemList />} />
        <Route path="contact" element={<Contact />} />
        <Route path="detail/:id" element={<CharacterDetail />} /> {/* ✅ Ruta agregada */}
      </Route>
    </Routes>
  );
}

export default App;
