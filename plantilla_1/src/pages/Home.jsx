// src/pages/Home.jsx
import { useEffect } from 'react';
import { useItemStore } from '../store/useItemStore';
import CardList from '../components/CardList';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

function Home() {
  const { items, fetchItems } = useItemStore();

  useEffect(() => {
    if (items.length === 0) fetchItems();
  }, []);

  const previewItems = items.slice(0, 6);

  return (
    <>
      <Hero />
      <section className="container">
        <CardList items={previewItems} />
        <div className="text-center my-4">
          <Link to="/list" className="btn btn-primary">
            Ver todos los ítems
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;