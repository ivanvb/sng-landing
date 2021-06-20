import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

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
                                gatsbyImageData(width: 350)
                            }
                        }
                        link
                    }
                    android {
                        image {
                            childImageSharp {
                                gatsbyImageData(width: 350)
                            }
                        }
                        link
                    }
                }
            }
        }
    `);
    return (
        <section
            className="relative flex flex-col items-center py-20 overflow-hidden border-b-8 bg-opacity-30 bg-primary-accent border-primary-accent"
            id="download"
        >
            <div className="container">
                <h2 className="mb-4 text-2xl font-bold text-center md:mb-8 md:text-3xl">
                    {download.cta}
                </h2>
                <div className="flex justify-center space-x-4 md:space-x-16">
                    {[download.apple, download.android].map((item, i) => (
                        <a
                            href={item.link}
                            className="inline-block w-40 h-16 md:w-48 md:h-16"
                            key={i}
                        >
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
            <div className="absolute bottom-0 w-full h-16 translate-y-1/2 rounded-b-none bg-primary-accent rounded-1/2 blur-2xl"></div>
        </section>
    );
};

export default DownloadSection;
