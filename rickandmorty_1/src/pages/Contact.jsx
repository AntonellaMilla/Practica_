// src/pages/Contact.jsx
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <main className="container py-4">
      <h2>Contáctanos</h2>
      <p>Completa el formulario para dejarnos tu mensaje. Te responderemos pronto.</p>
      <ContactForm />
    </main>
  );
}

export default Contact;
