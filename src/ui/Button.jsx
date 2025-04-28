import React from 'react';

const Button = ({ children, bgColor = 'white', hoverColor = '#022183' }) => {
  return (
    <button
      className="w-[171px] h-[48px] rounded-[33.86px] text-[19.4px] font-medium transition-colors duration-300 flex items-center justify-center gap-2"
      style={{
        backgroundColor: bgColor,
        color: bgColor === 'white' ? '#022183' : 'white',
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = hoverColor;
        e.target.style.color = 'white';
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = bgColor;
        e.target.style.color = bgColor === 'white' ? '#022183' : 'white';
      }}
    >
      {children}
    </button>
  );
};

export default Button;
