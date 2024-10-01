import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header, Footer } from '@/components';
import { Home, About } from '@/pages';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
