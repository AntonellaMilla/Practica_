// src/components/Hero.jsx
function Hero() {
  const backgroundStyle = {
    backgroundImage: `url("https://wallpapercave.com/uwp/uwp4634969.jpeg")`,
    backgroundSize: "cover",
    
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "600px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    textShadow: "1px 1px 4px black",
    padding: "2rem",
    
  };

  return (
    <section style={backgroundStyle} className="mb-4">
      <div>
        <h1 className="display-4 fw-bold">Explora el contenido</h1>
        <p className="lead">
          Conecta tu API favorita y muestra datos dinámicos en esta plantilla.
        </p>
      </div>
    </section>
  );
}

export default Hero;
