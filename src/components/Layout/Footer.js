import React from 'react';
import GeneratorsLogo from '../../images/Generator_logo.svg';

const Footer = () => {
    return (
        <footer className="container flex flex-col items-center justify-between pt-8 pb-6 text-sm md:flex-row">
            <span className="block mb-2 md:mb-0">Copyright© 2021 - present</span>
            <span className="flex items-center">
                A product by <img src={GeneratorsLogo} alt="Generators logo" className="h-6 ml-2" />
            </span>
        </footer>
    );
};

export default Footer;
