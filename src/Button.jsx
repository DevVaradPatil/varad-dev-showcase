import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaStar } from 'react-icons/fa'

const slideInFromBottom = {
  hidden: {
    opacity: 0,
    y: 100, // Start from 100px below its normal position
  },
  visible: {
    opacity: 1,
    y: 0, // Return to its normal position
    transition: {
      duration: 0.5, // Animation duration
      ease: "easeOut", // Easing function for a smooth effect
    },
  },
};

const Button = ({ text, description, link, isSpecial, isSpecial2 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true, // Only trigger the animation once when it comes into view
    threshold: 0.2, // Trigger the animation when 20% of the element is in view
  });
  return (
    <a href={link} target="_blank" className="w-full" rel="noopener noreferrer">
      <motion.button
        ref={ref}
        initial={inView ? "hidden" : "visible"} // Initially hidden if in view, otherwise visible
        animate={inView ? "visible" : "hidden"} // Animate if in view, otherwise hidden
        variants={slideInFromBottom}
        className="custombtn w-full relative"
      >
        <span className="custombtn_top flex flex-col">
          <p className={`text-center flex justify-center items-center ${isSpecial && 'text-blue-700'} ${isSpecial2 && 'text-violet-600'}`}>
            {text}{" "}
          </p>
          <p className="text-left font-normal text-sm mt-1">{description}</p>
        </span>

      </motion.button>
    </a>
  );
};

export default Button;
