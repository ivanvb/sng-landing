import React from 'react';
import { motion } from 'framer-motion';
import ExpandedIcon from './ExpandedIcon';

const Collapsible = ({ title, body }) => {
    const contentRef = React.useRef();

    const trasitionDuration = 0.3;
    const expandedVariants = {
        nonExpanded: {
            height: '0px',
        },
        expanded: {
            height: `${contentRef?.current?.scrollHeight || '0'}px`,
        },
    };

    const [expanded, setExpanded] = React.useState(false);

    return (
        <button
            className="px-4 py-4 text-left rounded-lg cursor-pointer md:px-6 bg-secondary-accent focus:outline-none"
            onClick={() => setExpanded((prev) => !prev)}
            transition={{ duration: 2 }}
        >
            <div className="flex items-center justify-between space-x-2">
                <h3 className="text-lg font-bold md:text-xl ">{title}</h3>
                <ExpandedIcon
                    className="flex-shrink-0 inline-block w-5 h-5"
                    expanded={expanded}
                    duration={trasitionDuration}
                />
            </div>
            <motion.div
                className="flex overflow-hidden text-base md:text-lg text-secondary-gray"
                ref={contentRef}
                variants={expandedVariants}
                animate={Object.keys(expandedVariants)[expanded ? 1 : 0]}
                style={{ height: '0px' }}
                transition={{ duration: trasitionDuration }}
            >
                <p className="mt-2">{body}</p>
            </motion.div>
        </button>
    );
};

export default Collapsible;
