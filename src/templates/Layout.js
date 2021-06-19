import React from 'react';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <main className="flex flex-1 flex-col">{children}</main>
        </>
    );
};

export default Layout;
