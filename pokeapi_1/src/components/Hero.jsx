// src/components/Hero.jsx
function Hero() {
  return (
    <section className="text-center bg-light py-5 mb-4">
      <div className="container">
        <h1 className="display-4">¡Explora el mundo Pokémon!</h1>
        <p className="lead">Descubre, atrapa y entrena tus Pokémon favoritos desde la PokéAPI.</p>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
          alt="PokéAPI logo"
          className="img-fluid my-3"
          style={{ maxHeight: '100px' }}
        />
      </div>
    </section>
  );
}

export default Hero;
