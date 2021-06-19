import React from 'react';
import Seo from '../components/Seo';

const IndexPage = () => {
    return (
        <>
            <Seo title="Home" />
            <div>
                <p className="relative inline-block before:absolute before:top-full before:left-0 before:w-full before:h-2 before:bg-red-500">hello world</p>
            </div>
        </>
    );
};

export default IndexPage;
