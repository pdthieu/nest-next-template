import { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const socials = [
  {
    name: 'Twitter',
    icon: '/images/icons/twitter.svg',
    link: 'https://twitter.com/itssudope',
  },
  {
    name: 'Facebook',
    icon: '/images/icons/facebook.svg',
    link: 'https://www.facebook.com/itssudope',
  },
  {
    name: 'Instagram',
    icon: '/images/icons/instagram.svg',
    link: 'https://www.instagram.com/itssudope',
  },
  {
    name: 'TikTok',
    icon: '/images/icons/tiktok.svg',
    link: 'https://www.tiktok.com/@itssudope',
  },
];
export const FixedSocialButtons = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    if (controls) {
      controls.start(i => ({
        scale: 1,
        rotateZ: 0,
        transition: {
          type: 'spring',
          damping: 20,
          stiffness: 200,
          delay: i * 0.1,
        },
      }));
    }
  }, [controls]);

  return (
    <div id="socials" className="absolute right-0 z-40 -translate-y-1/2 sm:fixed top-1/2">
      {socials.map((social, index) => (
        <a
          key={social.name}
          href={social.link}
          className="block transition-all duration-300 hover:scale-105 active:scale-95"
          target="_blank"
        >
          <motion.div
            className="bg-white rounded-lg p-2 my-4 cursor-pointer shadow-md mr-[14px]"
            initial={{ scale: 0, rotateZ: 180 }}
            animate={controls}
            custom={index}
          >
            <img src={social.icon} alt={social.name} className="block w-5 h-5" />
          </motion.div>
        </a>
      ))}
    </div>
  );
};
