/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
	const { createPage } = actions;

	const result = await graphql(`
    {
      newFrontiers: allMarkdownRemark(
        filter: { frontmatter: { upcoming: { eq: null } }, fileAbsolutePath: { regex: "/(new-frontiers)/" } }  
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      newHorizons: allMarkdownRemark(
        filter: { frontmatter: { upcoming: { eq: null } }, fileAbsolutePath: { regex: "/(new-horizons)/" } }  
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
      upcomingEvents: allMarkdownRemark(
        filter: { frontmatter: { upcoming: { ne: null } } }  
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);
	if (result.errors) {
		console.error(result.errors);
	}

	result.data.newFrontiers.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: path.resolve(`src/templates/new-frontiers-post.js`)
		});
	});
	result.data.newHorizons.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: path.resolve(`src/templates/new-horizons-post.js`)
		});
	});
	result.data.upcomingEvents.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: path.resolve(`src/templates/upcoming-event-post.js`)
		});
	});
};
