// src/components/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-primary text-white py-5 mb-5 rounded">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-3">
              🌟 Plantilla React API
            </h1>
            <p className="lead mb-4">
              Conecta y visualiza múltiples APIs públicas con esta plantilla 
              modular y reutilizable. Cambia entre diferentes fuentes de datos 
              con facilidad.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
              <Link to="/list" className="btn btn-light btn-lg px-4 me-md-2">
                Ver Lista Completa
              </Link>
              <Link to="/contact" className="btn btn-outline-light btn-lg px-4">
                Contactar
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="text-center">
              <div className="bg-white rounded-circle p-4 d-inline-block shadow">
                <span style={{ fontSize: '4rem' }}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;