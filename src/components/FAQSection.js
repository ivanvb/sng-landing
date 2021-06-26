import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

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
        <section id="faq" className="container py-8">
            <h2 className="mb-4 text-2xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {faq.map(({ question, answer }, i) => {
                    return (
                        <div key={i} className="p-4 rounded-lg bg-secondary-accent">
                            <h3 className="mb-2 text-lg font-bold">{question}</h3>
                            <p>{answer}</p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQSection;
