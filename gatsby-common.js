const React = require('react');
const Layout = require('./src/templates/Layout').default;

module.exports.wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};
