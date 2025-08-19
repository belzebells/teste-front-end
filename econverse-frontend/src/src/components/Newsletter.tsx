import React, { useState } from 'react';
import './Newsletter.css';

const Newsletter: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!accepted) return;           // impede envio sem aceite
    console.log({ name, email });
    setName('');
    setEmail('');
    setAccepted(false);
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">Inscreva-se em nossa newsletter</h2>
          <p className="newsletter-subtitle">
            Receba as últimas novidades e ofertas exclusivas diretamente em seu e-mail
          </p>
        </div>

        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Digite seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="newsletter-input"
            required
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="newsletter-input"
            required
          />
          <button type="submit" className="newsletter-button" disabled={!accepted}>
            INSCREVER
          </button>

          <label className="newsletter-checkbox">
            <input
              type="checkbox"
              checked={accepted}
              onChange={() => setAccepted(!accepted)}
            />
            Aceito os termos e condições
          </label>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
