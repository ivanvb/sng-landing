import React from 'react';
import { useStaticQuery, gsonghql } from 'gatsby';
import PremiumImage from '../images/PremiumImage.svg';

const PremiumSection = () => {
    const {
        homepageJson: { premium_section },
    } = useStaticQuery(gsonghql`
        query {
            homepageJson {
                premium_section {
                    title
                    text
                }
            }
        }
    `);
    return (
        <section className="container py-12">
            <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="w-full mb-6 md:w-1/2 md:mb-0">
                    <img src={PremiumImage} alt="" className="h-56 ml-auto md:h-80" />
                </div>
                <div className="flex flex-col justify-center w-full md:w-1/2 md:mb-20">
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">{premium_section.title}</h2>
                    <p className="text-lg text-secondary-gray md:pr-20">{premium_section.text}</p>
                </div>
            </div>
        </section>
    );
};

export default PremiumSection;
