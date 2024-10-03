import { motion } from 'framer-motion';
import { PERSPECTIVE, SLIDEIN, LINKS, FOOTERLINKS } from '@/constants';

export function Nav() {
  return (
    <div className="flex flex-col justify-between pt-[100px] pb-[50px] px-[40px] h-full box-border">
      <div className="flex gap-[10px] flex-col">
        {LINKS.map((link, i) => {
          const { title, href } = link;
          return (
            <div
              key={`b_${i}`}
              className="perspective-120 perspective-origin-bottom"
            >
              <motion.div
                custom={i}
                variants={PERSPECTIVE}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a className="no-underline text-[46px]" href={href}>
                  {title}
                </a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className="flex flex-wrap">
        {FOOTERLINKS.map((link, i) => {
          const { title } = link;
          return (
            <motion.a
              className="w-[50%] mt-1"
              variants={SLIDEIN}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
