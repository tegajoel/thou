import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  text?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, children}) => {
  return (
    <div>
      <button onClick={onClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        {text}
          {children}
      </button>
    </div>
  );
};

export default Button;
