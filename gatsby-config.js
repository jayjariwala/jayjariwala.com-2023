/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');
module.exports = {
	siteMetadata: {
		title: `jayjariwala.com-2023`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-resolve-src',
			options: {
				srcPath: path.resolve(__dirname, 'src'),
			},
		},
		'gatsby-plugin-postcss',
	],
};
