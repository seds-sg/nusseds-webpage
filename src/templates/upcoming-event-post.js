import React from "react"
import { graphql } from "gatsby"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import { BlogPostWrapper, BlogPostContentWrapper } from "./common"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title={frontmatter.title} />
        <BlogPostWrapper>
          <PageHeaderFont>{frontmatter.title}</PageHeaderFont>
          {frontmatter.recordedBy !== null ? (
            <DescriptionFont>Recorded by: {frontmatter.recordedBy}</DescriptionFont>
          ) : (
            <></>
          )}
          <DescriptionFont>{frontmatter.date}</DescriptionFont>
          {frontmatter.youtubeLink !== null ? (
            <DescriptionFont>
              <a
                href={frontmatter.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Link to recording
              </a>
            </DescriptionFont>
          ) : (
            <></>
          )}
          <BlogPostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
          {/* <div>
						<h3>Recording of session</h3>
						<iframe
							// width="560"
							// height="315"
							src={frontmatter.youtubeLink}
							frameBorder="0"
							allowFullScreen
							title={frontmatter.title}
						/>
					</div> */}
        </BlogPostWrapper>
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
        path
        title
        youtubeLink
        recordedBy
      }
    }
  }
`
