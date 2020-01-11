import React from 'react';
import { graphql } from 'gatsby';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import { BlogPostWrapper, BlogPostContentWrapper } from './common';

export default function Template({ data }) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title={frontmatter.title} />
				<BlogPostWrapper>
					<h1>{frontmatter.title}</h1>
					<h6>{frontmatter.date}</h6>
					<BlogPostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
				</BlogPostWrapper>
			</NavbarPaddingContainer>
		</Layout>
	);
}

export const pageQuery = graphql`
	query($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				title
			}
		}
	}
`;
