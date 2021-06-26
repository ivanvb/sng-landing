import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Logo from '../../images/SNG_Logo.svg';
import iPhoneMobile from '../../images/iphone_mobile.svg';
import iPhoneDesktop from '../../images/iphone_desktop.svg';
import { motion } from 'framer-motion';

const Hero = () => {
    const {
        homepageJson: { hero, download },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                hero {
                    title
                    text
                }
                download {
                    apple {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 350, placeholder: NONE)
                            }
                        }
                        link
                    }
                    android {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 350, placeholder: NONE)
                            }
                        }
                        link
                    }
                }
            }
        }
    `);

    return (
        <section className="pt-40 overflow-y-hidden hero-section">
            <div className="container flex flex-col-reverse mt-4 md:space-x-8 xl:space-x-16 md:flex-row">
                <motion.div
                    className="w-full md:w-1/2"
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <img src={iPhoneDesktop} alt="" className="hidden mx-auto h-128 md:block" />
                    <img src={iPhoneMobile} alt="" className="block md:hidden" />
                </motion.div>
                <div className="flex flex-col justify-center w-full mb-16 text-lg md:text-xl md:w-1/2 space text-secondary-gray md:mb-0">
                    <img src={Logo} alt="SNG Logo" className="h-16 mb-4 mr-auto md:h-16" />
                    <h2 className="font-bold text-3xl xl:text-4.5xl  text-white mb-3">
                        {hero.title}
                    </h2>
                    <div className="xl:pr-16">
                        {hero.text.map((p, i) => {
                            return (
                                <p className="mb-4" key={i}>
                                    {p}
                                </p>
                            );
                        })}
                        <div className="flex space-x-6">
                            {[download.apple, download.android].map((item, i) => (
                                <a href={item.link} className="inline-block w-40 h-12" key={i}>
                                    <GatsbyImage
                                        image={item.image.childImageSharp.gatsbyImageData}
                                        alt=""
                                        className="w-full h-full"
                                        objectFit="contain"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
