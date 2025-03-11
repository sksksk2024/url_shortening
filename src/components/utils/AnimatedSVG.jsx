import { motion } from 'framer-motion';

const svgVariants = {
  hidden: { rotate: -360 },
  visible: {
    rotate: 360,
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
};

const pathVariants = {
  hidden: { opacity: 0, pathLength: 0 },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
};

const AnimatedSVG = ({ pathData, label }) => {
  return (
    <div className="group cursor-pointer" aria-label={label} role="button">
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        className="fill-white group-hover:fill-cyan transition duration-300"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.path
          d={pathData}
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
      </motion.svg>
    </div>
  );
};

export default AnimatedSVG;
