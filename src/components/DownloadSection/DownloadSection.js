import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const DownloadSection = () => {
    const {
        homepageJson: { download },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                download {
                    cta
                    apple {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 350, placeholder: NONE)
                            }
                        }
                        link
                        label
                    }
                    android {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 350, placeholder: NONE)
                            }
                        }
                        link
                        label
                    }
                }
            }
        }
    `);

    const { inView, ref } = useInView({ threshold: 0.65, triggerOnce: true });
    const containerVariants = {
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
        hidden: {
            y: 30,
            opacity: 0,
        },
    };

    const itemOffset = 1.5;
    const itemVariants = {
        visible: {
            y: [itemOffset, itemOffset * -1, itemOffset],
            transition: {
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
            },
        },
        hidden: {
            y: itemOffset * -1,
        },
    };

    return (
        <section
            className="relative flex flex-col items-center py-20 overflow-hidden border-b-8 bg-opacity-30 bg-primary-accent border-primary-accent"
            id="download"
            ref={ref}
        >
            <motion.div
                className="container"
                variants={containerVariants}
                animate={Object.keys(containerVariants)[inView ? 0 : 1]}
            >
                <h2 className="mb-4 text-2xl font-bold text-center md:mb-8 md:text-3xl">
                    {download.cta}
                </h2>
                <div className="flex justify-center space-x-4 md:space-x-16">
                    {[download.apple, download.android].map((item, i) => (
                        <motion.a
                            variants={itemVariants}
                            href={item.link}
                            className="inline-block w-40 h-16 rounded-md md:w-48 md:h-16 ring-primary-text ring-opacity-80"
                            key={i}
                            aria-label={item.label}
                        >
                            <GatsbyImage
                                image={item.image.childImageSharp.gatsbyImageData}
                                alt=""
                                className="w-full h-full"
                                objectFit="contain"
                            />
                        </motion.a>
                    ))}
                </div>
            </motion.div>
            <div className="absolute bottom-0 w-full translate-y-1/2">
                <div className="absolute bottom-0 w-full h-12 rounded-b-none bg-primary-accent rounded-1/2 blur-2xl animate-shine"></div>
            </div>
        </section>
    );
};

export default DownloadSection;
