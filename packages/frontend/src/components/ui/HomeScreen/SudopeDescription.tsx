import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';

const SudopeDescription = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '0px 0px -250px 0px' });

  const controls = useAnimationControls();
  const mascotControls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start({ opacity: 1, x: 0 });
      mascotControls.start({ opacity: 1, x: 0 });
    }
  }, [isInView]);

  return (
    <div className="bg-sudope-purple sm:h-[480px]">
      <div
        className="relative flex flex-col-reverse justify-between max-w-6xl px-4 py-8 mx-auto sm:flex-row"
        ref={ref}
      >
        <motion.div
          className="h-full max-w-full md:max-w-lg flex-1 tracking-wider text-white opacity-[0.8] pt-16 sm:pt-36"
          initial={{ opacity: 0, x: -200 }}
          animate={controls}
          transition={{ duration: 0.75, ease: 'easeOut' }}
        >
          <p className="mb-4 font-medium">
            SUDOPE is a fun culture-blend collectible platform that unlocks the gateway to exclusive
            drops and bridges the gap between dope creators and passionate collectors around the
            world.
          </p>
          <p className="font-medium">
            Showcase your style with virtual & customizable collector exhibitions, and flex your
            craft via integrated creator livestreams.
          </p>
        </motion.div>
        <div className="translate-y-[4rem] pointer-events-none select-none">
          <motion.div
            className="flex justify-center mb-12 sm:translate-y-16 sm:mb-0 "
            initial={{ opacity: 0, x: 200 }}
            animate={mascotControls}
            transition={{ duration: 0.75, ease: 'easeOut' }}
          >
            <img
              className="max-h-[500px]"
              src="/images/mascot_characters.png"
              alt="Mascot Characters"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SudopeDescription;
