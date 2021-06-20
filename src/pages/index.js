import React from 'react';
import Seo from '../components/Seo';
import Hero from '../components/Hero';
import DescriptionSection from '../components/DescriptionSection';
import PremiumSection from '../components/PremiumSection';
import NetworkSection from '../components/NetworkSection';

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            <DescriptionSection />
            <PremiumSection />
            <NetworkSection />
        </>
    );
};

export default IndexPage;
