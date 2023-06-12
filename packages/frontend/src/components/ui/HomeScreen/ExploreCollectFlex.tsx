import { motion } from 'framer-motion';

const ExploreCollectFlex = () => {
  const data = ['EXPLORE', 'COLLECT', 'FLEX'];

  return (
    <div
      id="home-content-text"
      className="flex flex-col items-center text-whilte text-5xl sm:text-8xl xl:text-[8rem] font-back leading-9 sm:leading-[4.5rem] xl:leading-[4.5rem] xl:leaeding-[6rem] tracking-wide select-none"
      style={{ textShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)' }}
    >
      {data.map((item, itemIndex) => (
        <motion.p key={item} className="overflow-hidden">
          {item.split('').map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{
                duration: 0.75,
                delay: index * 0.05 + itemIndex * 0.4,
                ease: 'easeOut',
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.p>
      ))}
    </div>
  );
};

export default ExploreCollectFlex;
