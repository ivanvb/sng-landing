import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { useSideAppear } from '../hooks/useSideAppear';
import PremiumImage from '../images/PremiumImage.svg';
import { motion } from 'framer-motion';

const PremiumSection = () => {
    const {
        homepageJson: { premium_section },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                premium_section {
                    title
                    text
                }
            }
        }
    `);

    const { containerVariants, elementsVariants, ref, currentVariant } = useSideAppear();

    return (
        <section className="container py-6 mt-6" ref={ref}>
            <motion.div
                className="flex flex-col md:flex-row md:space-x-24"
                variants={containerVariants}
                animate={currentVariant}
            >
                <motion.div className="w-full mb-6 md:w-1/2 md:mb-0" variants={elementsVariants}>
                    <img
                        src={PremiumImage}
                        alt=""
                        className="h-56 mx-auto md:mr-0 md:ml-auto md:h-80"
                    />
                </motion.div>
                <motion.div
                    className="flex flex-col justify-center w-full md:w-1/2 md:mb-20"
                    variants={elementsVariants}
                >
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">{premium_section.title}</h2>
                    <p className="text-lg text-secondary-gray md:pr-20">{premium_section.text}</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default PremiumSection;
