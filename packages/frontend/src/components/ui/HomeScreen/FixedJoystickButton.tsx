import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const FixedJoystickButton = () => {
  const router = useRouter();

  return (
    <motion.div
      id="joystick-button"
      className="absolute sm:fixed w-[180px] sm:w-[280px] bottom-[120px] right-0 z-10"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeOut' }}
    >
      <div
        onClick={() => router.push('/joy-machine')}
        className="flex flex-row items-center relative bg-sudope-red w-full rounded-l-full cursor-pointer pr-4"
      >
        <div className="max-w-[120px] scale-150 -translate-y-4 pointer-events-none select-none">
          <img src="/images/joystick.png" alt="Joy Machine" />
        </div>
        <p className="text-[16px] sm:text-[28px] leading-[22px] sm:leading-[28px] text-white font-[900] select-none">
          JOY MACHINE
        </p>
      </div>
    </motion.div>
  );
};

export default FixedJoystickButton;
