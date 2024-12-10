import React, { useState } from 'react';

function ContactForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Obrigado pelo seu e-mail: ${email}`);
  };

  return (
    <section>
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
