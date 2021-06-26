import React from 'react';
import Logo from '../../images/Generator_logo.svg';
import { useStaticQuery, graphql } from 'gatsby';

const Header = () => {
    const {
        homepageJson: { navbar },
    } = useStaticQuery(graphql`
        query {
            homepageJson {
                navbar {
                    title
                    link
                }
            }
        }
    `);
    return (
        <header className="z-50 -mb-40">
            <div className="container flex items-center justify-between py-8 mb-5 md:mb-10">
                <h1>
                    <img
                        src={Logo}
                        alt="Song Name Generator by Generators™️"
                        className="h-6 xs:h-8 md:h-10"
                    />
                </h1>
                <nav className="text-sm font-bold tracking-wide xs:text-lg md:text-xl">
                    <ul className="flex items-center space-x-2 xs:space-x-3 md:space-x-8">
                        {navbar.map((item, i) => {
                            return (
                                <li className="" key={i}>
                                    <a href={item.link}>{item.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
