import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="flex w-full flex-col items-center">
        <div className="translate-y-96 overflow-visible">
          <h1 className="text-base">Hey, I&apos;m Minh</h1>
        </div>

        <div className="translate-y-96 overflow-visible">
          <h1 className="text-center font-bold uppercase 2xl:text-[9vw]">
            My Portfolio
          </h1>
        </div>

        <div className="translate-y-96 overflow-visible">
          <h1 className="text-lg font-[400] leading-tight uppercase">
            create by cyndi lauper (it's me)
          </h1>
        </div>
      </div>

      <div className="absolute bottom-12 right-0 flex flex-col items-center justify-center space-y-8">
        <span className="rotate-90">scroll</span>
      </div>
    </section>
  );
};
