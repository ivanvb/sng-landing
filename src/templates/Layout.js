import React from 'react';
import Header from '../components/Header';
import '../styles/tailwind/build.css';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="flex flex-col flex-1">{children}</main>
        </>
    );
};

export default Layout;
