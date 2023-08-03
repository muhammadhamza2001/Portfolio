import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppIcon = ({ phoneNumber }) => {
  const handleClick = () => {
    
    window.open(`https://wa.me/${+923211688108}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // You can customize the background color
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        zIndex:"9999",
      }}
      onClick={handleClick}
    >
      <FaWhatsapp size={30} color="#FFFFFF" /> {/* You can customize the size and color of the icon */}
    </div>
  );
};

export default WhatsAppIcon;
