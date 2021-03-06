import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { motion } from 'framer-motion';
import { useSideAppear } from '../../hooks/useSideAppear';
import NetworkGraphic from './NetworkGraphic';

const NetworkSection = () => {
    const {
        homepageJson: { network_section },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                network_section {
                    title
                    text
                }
            }
        }
    `);

    const { currentVariant, ref, elementsVariants, containerVariants } = useSideAppear({
        responsiveStaggerDirection: -1,
    });

    return (
        <section className="container py-6 mb-6 overflow-hidden" ref={ref}>
            <motion.div
                className="flex flex-col-reverse md:flex-row md:space-x-24"
                variants={containerVariants}
                animate={currentVariant}
            >
                <motion.div
                    className="flex flex-col justify-center w-full md:w-1/2 md:mb-20 md:pl-8"
                    variants={elementsVariants}
                >
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">{network_section.title}</h2>
                    <p className="text-lg text-secondary-gray">{network_section.text}</p>
                </motion.div>
                <motion.div
                    className="w-full mb-10 md:w-1/2 md:mb-0"
                    variants={elementsVariants}
                    custom={1}
                >
                    <NetworkGraphic />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default NetworkSection;
