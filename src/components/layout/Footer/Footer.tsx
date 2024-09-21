import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center bg-[var(--color-background)]">
      <p>&copy; {new Date().getFullYear()} My React App</p>
    </footer>
  );
};

export default Footer;
