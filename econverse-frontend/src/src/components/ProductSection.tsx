import React, { useState } from 'react';
import ProductModal from './ProductModal';
import './ProductSection.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  installments: string;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
}

const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="product-section">
        <div className="product-container">
          <h2 className="section-title">{title}</h2>
          
          {/* Add the category menu here */}
          <div className="product-category-menu">
            <span className="category-tab active">CELULAR</span>
            <span className="category-tab">ACESSÓRIOS</span>
            <span className="category-tab">TABLETS</span>
            <span className="category-tab">NOTEBOOKS</span>
            <span className="category-tab">TVS</span>
            <span className="category-tab">VER TODOS</span>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div 
                key={product.id} 
                className="product-card"
                onClick={() => handleProductClick(product)}
              >
                <div className="product-image">
                  <img src={product.image || "/placeholder.svg"} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <div className="product-pricing">
                    {product.originalPrice && (
                      <span className="original-price">R$ {product.originalPrice.toFixed(2)}</span>
                    )}
                    <span className="current-price">R$ {product.price.toFixed(2)}</span>
                  </div>
                  <p className="installments">{product.installments}</p>
                  <button className="buy-button">COMPRAR</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default ProductSection;