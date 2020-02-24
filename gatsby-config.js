module.exports = {
	siteMetadata: {
		title: `NUS SEDS`,
		description: `Webpage for anything related to the NUS chapter of the Students for Exploration and Development of Space`,
		author: `@muruges95`
	},
	plugins: [
		`gatsby-plugin-sharp`,
		{
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 600,
            },
          },
        ],
      },
    },
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `content`,
				path: `${__dirname}/src/content`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
      },
    },
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `NUS SEDS`,
				short_name: `NUS SEDS`,
				start_url: `/`,
				background_color: `#141e22`,
				theme_color: `#141e22`,
				display: `minimal-ui`,
				icon: `src/images/site-icon.png` // This path is relative to the root of the site.
			}
		}
		// {
		// 	resolve: `gatsby-plugin-web-font-loader`,
		// 	options: {
		// 		custom: {
		// 			families: [ `Graphik, Brown, Graebenbach Mono` ],
		// 			urls: [ `/fonts/fonts.css` ]
		// 		}
		// 	}
		// }
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	]
};
