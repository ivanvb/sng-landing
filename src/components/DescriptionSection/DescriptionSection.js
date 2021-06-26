import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import AudioWave from '../../images/AudioWave.svg';

const DescriptionSection = () => {
    const {
        homepageJson: { description_section },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                description_section {
                    title
                    text
                }
            }
        }
    `);
    return (
        <section className="py-12 bg-secondary-accent">
            <div className="container text-center">
                <img src={AudioWave} className="h-20 mx-auto mb-3" />
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">{description_section.title}</h2>
                <p className="w-full mx-auto text-lg text-secondary-gray md:w-9/12">
                    {description_section.text}
                </p>
            </div>
        </section>
    );
};

export default DescriptionSection;
