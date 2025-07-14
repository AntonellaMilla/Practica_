import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import ItemList from './pages/ItemList';
import Contact from './pages/Contact';
import { ToastContainer } from 'react-toastify';
import CharacterDetail from './pages/CharacterDetail';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="list" element={<ItemList />} />
          <Route path="contact" element={<Contact />} />
          <Route path="detail/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
