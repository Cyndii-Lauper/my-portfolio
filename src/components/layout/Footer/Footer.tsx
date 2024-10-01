import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="p-4 text-center bg-[var(--color-background)]">
      <p>&copy; {new Date().getFullYear()} My React App</p>
    </footer>
  );
};
