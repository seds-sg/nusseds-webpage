import React from 'react';
import { graphql } from 'gatsby';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import { BlogPostWrapper, BlogPostContentWrapper } from './common';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';

export default function Template({ data }) {
	const { markdownRemark } = data; // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title={frontmatter.title} />
				<BlogPostWrapper>
					<PageHeaderFont>{frontmatter.title}</PageHeaderFont>
					<DescriptionFont>{frontmatter.date}</DescriptionFont>
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
