import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@/contexts/ThemeContext';

const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <header className="flex items-center justify-between p-4 bg-[var(--color-background)]">
      <h1 className="text-xl font-bold">
        <Link to="/">My React App</Link>
      </h1>
      <nav>
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav>
      <button onClick={toggleTheme} className="ml-4 px-2 py-1 border rounded">
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;
