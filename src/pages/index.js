import React from 'react';
import Seo from '../components/Seo/Seo';
import Hero from '../components/HeroSection/Hero';
import DescriptionSection from '../components/DescriptionSection/DescriptionSection';
import PremiumSection from '../components/PremiumSection/PremiumSection';
import NetworkSection from '../components/NetworkSection/NetworkSection';
import FAQSection from '../components/FaqSection/FAQSection';
import DownloadSection from '../components/DownloadSection/DownloadSection';

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <Hero />
            <DescriptionSection />
            <PremiumSection />
            <NetworkSection />
            <FAQSection />
            <DownloadSection />
        </>
    );
};

export default IndexPage;
