/**
 * @type {import('gatsby').GatsbyConfig}
 */
const path = require('path');
module.exports = {
	siteMetadata: {
		title: `Jay Jariwala Portfolio`,
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
		'gatsby-plugin-material-ui',
	],
};
