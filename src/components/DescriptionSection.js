import React from 'react';
import { gsonghql, useStaticQuery } from 'gatsby';

const DescriptionSection = () => {
    const {
        homepageJson: { description_section },
    } = useStaticQuery(gsonghql`
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
                <div className="">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-primary-accent"></div>
                </div>
                <h2 className="mb-2 text-2xl font-bold md:text-4xl">{description_section.title}</h2>
                <p className="w-full mx-auto text-lg text-secondary-gray md:w-9/12">
                    {description_section.text}
                </p>
            </div>
        </section>
    );
};

export default DescriptionSection;