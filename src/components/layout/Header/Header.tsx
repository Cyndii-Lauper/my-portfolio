import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '@/contexts/ThemeContext';
import { Menu } from '@/components';
export const Header: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { theme, toggleTheme } = themeContext;

  return (
    <header className="flex items-center justify-between p-4 bg-[var(--color-background)]">
      <div className="flex flex-col ml-[36px]">
        <h1 className="text-base font-semibold">
          <Link to="/">Cyndi Yui</Link>
        </h1>
        <div className="font-extralight text-xs">Trinh Do Tuan Minh</div>
      </div>
      {/* <nav className="z-[99] fixed top-5 left-[50%] -translate-x-[50%] bg-opacity-80 backdrop-blur-smtext-lg px-6 py-2 rounded-full flex justify-center items-center cursor-pointer">
        <Link to="/" className="mr-4">
          Home
        </Link>
        <Link to="/about">About</Link>
      </nav> */}

      {/* fix reposive this button */}
      <button
        onClick={toggleTheme}
        className="mr-[7%] px-2 py-1 border rounded"
      >
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
      <div>
        <Menu />
      </div>
    </header>
  );
};
