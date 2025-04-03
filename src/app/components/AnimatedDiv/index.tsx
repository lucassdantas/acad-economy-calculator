import { motion } from 'framer-motion';

interface AnimatedDivProps{
  animation:any;
  children:any;
  className:string;
}
export const AnimatedDiv = ({ animation, children, className }:AnimatedDivProps) => {
  const animations = {
    fadeIn: { initial: { opacity: 0 }, animate: { opacity: 1, transition: { duration: 0.5 } } },
    slideUp: { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1, transition: { duration: 0.5 } } },
    scaleIn: { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } } }
  };

  const selectedAnimation = animations.slideUp;

  return (
    <motion.div
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      className={className}
    >
      {children}
    </motion.div>
  );
};
