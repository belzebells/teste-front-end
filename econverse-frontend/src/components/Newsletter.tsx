import React, { useState } from 'react';
import '../styles/Newsletter.css';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    // Handle newsletter signup logic here
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2 className="newsletter-title">
            Inscreva-se em nossa newsletter
          </h2>
          <p className="newsletter-subtitle">
            Receba as últimas novidades e ofertas exclusivas diretamente em seu e-mail
          </p>
          <form className="newsletter-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-button">
              INSCREVER
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;