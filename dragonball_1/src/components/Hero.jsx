function Hero() {
  return (
    <section
      className="text-white d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: 'url("https://wallpapercave.com/uwp/uwp4648945.jpeg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '90vh', // MÁS GRANDE: ocupa casi toda la pantalla
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Capa oscura semitransparente para contraste */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', zIndex: 0 }}
      ></div>

      {/* Contenido sobre la capa */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <h1 className="display-2 fw-bold">Bienvenido al Universo Dragon Ball</h1>
        <p className="lead fs-4 mt-3">
          Explora personajes, poderes y transformaciones de tus héroes favoritos
        </p>
      </div>
    </section>
  );
}

export default Hero;
