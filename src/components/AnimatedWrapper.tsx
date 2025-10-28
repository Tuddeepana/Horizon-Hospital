import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
}

const AnimatedWrapper = ({ children, delay = 0 }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedWrapper;