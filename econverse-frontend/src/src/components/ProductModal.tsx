import React from 'react';
import './ProductModal.css';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  installments: string;
}

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
  const [quantity, setQuantity] = React.useState(1);

  if (!isOpen || !product) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-body">
          <div className="modal-image">
            <img src={product.image || "/placeholder.svg"} alt={product.name} />
          </div>
          
          <div className="modal-info">
            <h2 className="modal-title">LOREM IPSUM DOLOR SIT AMET</h2>
            <div className="modal-pricing">
              <span className="modal-price">R$ {product.price.toFixed(2).replace('.', ',')}</span>
            </div>
            <p className="modal-description">
              Many desktop publishing packages and web page editors now use many desktop publishing
            </p>
            <a href="#" className="modal-details-link">
              Veja mais detalhes do produto &gt;
            </a>
            
            <div className="modal-quantity">
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="quantity-display">{quantity.toString().padStart(2, '0')}</span>
              <button 
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            
            <button className="modal-buy-btn">COMPRAR</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;