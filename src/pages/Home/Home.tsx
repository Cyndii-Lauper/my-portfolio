import React from 'react';
import Button from '@/components/core/Button/Button';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h2 className="text-3xl mb-4">Welcome to My React App</h2>
      <Button onClick={() => alert('Button Clicked!')}>Click Me</Button>
    </div>
  );
};

export default Home;
