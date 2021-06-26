import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Collapsible from './Collapsible';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const variants = {
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const FAQSection = () => {
    const {
        homepageJson: { faq },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                faq {
                    question
                    answer
                }
            }
        }
    `);

    const { ref, inView } = useInView({ threshold: 0.6, triggerOnce: true });

    return (
        <section id="faq" className="container py-8 md:px-12 lg:px-40" ref={ref}>
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <motion.div
                className="space-y-4"
                initial={false}
                animate={inView ? 'visible' : 'hidden'}
                variants={variants}
            >
                {faq.map(({ question, answer }, i) => {
                    return <Collapsible key={i} title={question} body={answer} />;
                })}
            </motion.div>
        </section>
    );
};

export default FAQSection;
