import React from 'react';

const About: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">About Us</h2>
      <p>This is the about page of the application.</p>
      <div className="bg-white dark:bg-gray-800">
        <p className="text-black dark:text-white">Hello World</p>
      </div>
    </div>
  );
};

export default About;
