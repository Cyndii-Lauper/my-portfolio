import React, { useEffect, useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const HeroEx: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <section>
      <div className="grid grid-cols-auto grid-rows-auto">
        <div className="mt-[200px] ml-[90px] p-8 col-span-2">
          <h1 className="font-light text-8xl">
            Front-End Developer <br /> currently based <br /> in Viet Nam
          </h1>
        </div>

        <div className="grid col-start-2 justify-center">
          <h2 className="font-light text-xl">Hi i'm Minh</h2>
        </div>

        <div className="row-start-2 ml-[90px] mt-32 p-8">
          <p className="font-light text-xs">
            I specialize in creating engaging <br /> and innovative experiences
            for <br />
            brands and their customers.
            <br /> With a background in marketing,
            <br /> I bring a unique perspective to <br /> my work that allows me
            to <br /> design solutions that not only <br /> meet user needs but
            also align <br /> with business goals.
          </p>
        </div>

        <div className="flex flex-row row-start-3 ml-[90px] p-8">
          <p className="font-light text-xs">
            <i className="fa-regular fa-clock" />{' '}
            {time.toLocaleTimeString('en-GB')}
          </p>
          <p className="font-light text-xs ml-[10px]">Sai gon, Viet Nam</p>
        </div>
      </div>
    </section>
  );
};
