import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import DescriptionSection from '../components/DescriptionSection';

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            <DescriptionSection />
        </>
    );
};

export default IndexPage;
