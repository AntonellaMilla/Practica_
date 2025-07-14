// src/pages/Contact.jsx
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function Contact() {
  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }

    if (!form.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[\w.-]+@[\w.-]+\.\w{2,4}$/.test(form.correo)) {
      newErrors.correo = 'Formato de correo inválido';
    }

    if (!form.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simula envío exitoso
    toast.success('Formulario enviado con éxito 🎉');

    // Limpia formulario y errores
    setForm({ nombre: '', correo: '', mensaje: '' });
    setErrors({});
  };

  return (
    <section className="container">
      <h2>Contacto</h2>
      <form className="mt-4" onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
            value={form.nombre}
            onChange={handleChange}
          />
          {errors.nombre && <div className="invalid-feedback">{errors.nombre}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo electrónico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            className={`form-control ${errors.correo ? 'is-invalid' : ''}`}
            value={form.correo}
            onChange={handleChange}
          />
          {errors.correo && <div className="invalid-feedback">{errors.correo}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            className={`form-control ${errors.mensaje ? 'is-invalid' : ''}`}
            rows="4"
            value={form.mensaje}
            onChange={handleChange}
          ></textarea>
          {errors.mensaje && <div className="invalid-feedback">{errors.mensaje}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>

      <ToastContainer position="top-center" autoClose={3000} />
    </section>
  );
}

export default Contact;
