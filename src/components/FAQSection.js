import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Collapsible from './Collapsible';

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

    return (
        <section id="faq" className="container py-8 md:px-12 lg:px-40">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faq.map(({ question, answer }, i) => {
                    return <Collapsible key={i} title={question} body={answer} />;
                })}
            </div>
        </section>
    );
};

export default FAQSection;
