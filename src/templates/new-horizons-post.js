import React from "react"
import { graphql } from "gatsby"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import { PostHeaderFont, ArticlePostWrapper, ArticlePostContentWrapper } from "./common"
import { DescriptionFont } from "../components/textStyles"

export default function Template({ data }) {
	const { markdownRemark } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title={frontmatter.title} />
				<ArticlePostWrapper>
					<PostHeaderFont>{frontmatter.title}</PostHeaderFont>
					<DescriptionFont>{frontmatter.date}</DescriptionFont>
					<ArticlePostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
				</ArticlePostWrapper>
			</NavbarPaddingContainer>
		</Layout>
	)
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
`
