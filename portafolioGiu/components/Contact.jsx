import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contacto</h1>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Correo:
          <input type="email" name="email" />
        </label>
        <label>
          Mensaje:
          <textarea name="message"></textarea>
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
