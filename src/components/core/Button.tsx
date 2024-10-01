import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="px-4 py-2 bg-[var(--color-primary)] text-white rounded hover:bg-blue-600 transition"
    >
      {children}
    </button>
  );
};

export default Button;
