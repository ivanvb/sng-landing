import React from 'react';
import { useStaticQuery, gsonghql } from 'gatsby';
import NetworkImage from '../images/NetworkImage.svg';

const NetworkSection = () => {
    const {
        homepageJson: { network_section },
    } = useStaticQuery(gsonghql`
        query {
            homepageJson {
                network_section {
                    title
                    text
                }
            }
        }
    `);
    return (
        <section className="container py-6 mb-6">
            <div className="flex flex-col-reverse md:flex-row md:space-x-24">
                <div className="flex flex-col justify-center w-full md:w-1/2 md:mb-20 md:pl-8">
                    <h2 className="mb-2 text-2xl font-bold md:text-4xl">{network_section.title}</h2>
                    <p className="text-lg text-secondary-gray">{network_section.text}</p>
                </div>
                <div className="w-full mb-6 md:w-1/2 md:mb-0">
                    <img
                        src={NetworkImage}
                        alt=""
                        className="h-56 mx-auto md:ml-0 md:mr-auto md:h-80"
                    />
                </div>
            </div>
        </section>
    );
};

export default NetworkSection;
