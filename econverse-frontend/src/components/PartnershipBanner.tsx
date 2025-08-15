import React from 'react';
import '../styles/PartnershipBanner.css';

interface PartnershipBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  backgroundImage?: string;
}

const PartnershipBanner: React.FC<PartnershipBannerProps> = ({
  title,
  subtitle,
  buttonText,
  backgroundImage
}) => {
  return (
    <section className="partnership-banner">
      <div 
        className="banner-content"
        style={{
          backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined
        }}
      >
        <div className="banner-overlay">
          <div className="banner-text">
            <h2 className="banner-title">{title}</h2>
            <p className="banner-subtitle">{subtitle}</p>
            <button className="banner-button">{buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBanner;