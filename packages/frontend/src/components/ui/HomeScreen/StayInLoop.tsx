import { useEffect, useRef } from 'react';
import { motion, useAnimationControls, useInView } from 'framer-motion';
import Link from 'next/link';

import Subscribe from './Subscribe';

const StayInLoop = () => {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();

  const isInView = useInView(ref, { margin: '0px 0px -50px 0px', once: true });

  useEffect(() => {
    if (isInView) controls.start({ scale: 1 });
  }, [isInView]);

  return (
    <motion.div
      className="relative flex flex-col items-center p-4 pt-24 pb-20 sm:pt-52"
      initial={{ scale: 0 }}
      animate={controls}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      ref={ref}
    >
      <div className="flex flex-col items-center max-w-lg mb-20 sm:mb-36">
        <p className="mb-2 text-3xl font-black text-white opacity-100">STAY IN LOOP</p>
        <p className="mb-10 text-sm leading-6 text-center text-white opacity-80">
          Join our mailing list to stay in the loop with our newest feature releases, NFT drops, and
          tips and tricks.
        </p>
        <Subscribe />
      </div>
      <div className="flex-col text-center text-white opacity-50">
        <div className="flex justify-between w-full max-w-[320px] mb-4 text-sm font-bold m-auto">
          <Link href="/terms-and-conditions">
            <a>TERMS & CONDITIONS</a>
          </Link>
          <Link href="/privacy-policy">
            <a>PRIVACY POLICY</a>
          </Link>
        </div>
        <p className="text-xs">©{new Date().getFullYear()} Sudope. All Rights Reserved.</p>
        <p className="text-xs">
          Copyright Notice - All images, illustrations, logos and artworks are copyright to their
          respective owners
        </p>
      </div>
    </motion.div>
  );
};

export default StayInLoop;
