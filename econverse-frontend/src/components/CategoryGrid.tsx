import React from 'react';
import '../styles/CategoryGrid.css';

const CategoryGrid: React.FC = () => {
  const categories = [
    { icon: '/images/icons/tecnologia.png' },
    { icon: '/images/icons/supermercado.png' },
    { icon: '/images/icons/bebidas.png' },
    { icon: '/images/icons/ferramentas.png' },
    { icon: '/images/icons/saude.png' },
    { icon: '/images/icons/esportes.png' },
    { icon: '/images/icons/moda.png' }
  ];

  return (
    <section className="category-grid">
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-icon">
              <img src={category.icon} alt={`Categoria ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
