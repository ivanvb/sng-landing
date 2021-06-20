import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, meta, title, image, socialTitle }) => {
    meta = meta ? meta : [];
    description = description ? description : '';

    const { site, file } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        keywords
                    }
                }
                file(relativePath: { regex: "/icon.png/" }) {
                    publicURL
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const img_url = image ? image.src : `${process.env.GATSBY_URL}/${file.publicURL}`;

    const imageTags = [
        {
            property: 'og:image',
            content: img_url,
        },
        {
            property: 'twitter:image',
            content: img_url,
        },
        {
            name: 'twitter:card',
            content: image ? 'summary_large_image' : 'summary',
        },
    ];

    const extraTags = [...imageTags, ...meta];

    return (
        <Helmet
            htmlAttributes={{
                lang: 'en',
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: socialTitle || title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },

                {
                    name: `twitter:title`,
                    content: socialTitle || title,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: 'keywords',
                    content: site.siteMetadata.keywords.join(','),
                },
                ...extraTags,
            ]}
        />
    );
};

export default Seo;
