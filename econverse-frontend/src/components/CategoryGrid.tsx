import React from 'react';
import '../styles/CategoryGrid.css';

const CategoryGrid: React.FC = () => {
  const categories = [
    { name: 'Tecnologia', icon: '💻' },
    { name: 'Supermercado', icon: '🏪' },
    { name: 'Bebidas', icon: '🍷' },
    { name: 'Ferramentas', icon: '🔧' },
    { name: 'Saúde', icon: '❤️' },
    { name: 'Esportes e Fitness', icon: '🏃' },
    { name: 'Moda', icon: '👗' }
  ];

  return (
    <section className="category-grid">
      <div className="category-container">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <div className="category-icon">
              {category.icon}
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;