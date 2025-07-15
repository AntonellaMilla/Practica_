function Contact() {
  return (
    <main className="container py-4">
      <h2 className="mb-3">Contacto</h2>
      <p>¿Tienes preguntas? ¡Déjanos un mensaje!</p>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo electrónico</label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea className="form-control" id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </main>
  );
}

export default Contact;
