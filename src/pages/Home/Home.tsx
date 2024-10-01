import { Hero } from '@/components';
import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="grid h-screen w-full grid-rows-1 place-items-center md:grid-rows-3 gap-4 xs:grid-rows-1">
      <div className="md:row-span-1">
        <Hero />
      </div>
      <div className="md:row-span-2">
        <div className="flex flex-col md:flex-row gap-4 row-span-1">
          <div className="">Content 1</div>
          <div className="">Content 2</div>
        </div>
      </div>
    </div>
  );
};
