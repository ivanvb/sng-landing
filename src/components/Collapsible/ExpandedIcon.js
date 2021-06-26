import React from 'react';
import { motion } from 'framer-motion';

const ExpandedIcon = ({ expanded, transitionDuration, className }) => {
    return (
        <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <motion.line
                animate={{ transform: expanded ? 'rotate(270deg)' : 'rotate(0deg)' }}
                x1="12"
                y1="4"
                x2="12"
                y2="20"
                transition={{ duration: transitionDuration }}
            ></motion.line>
            <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                animate={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                transition={{ duration: transitionDuration }}
            ></motion.line>
        </svg>
    );
};

export default ExpandedIcon;
