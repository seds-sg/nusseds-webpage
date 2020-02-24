import React from "react"
import { graphql } from "gatsby"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import {
  PostHeaderFont,
  BlogPostWrapper,
  BlogPostContentWrapper,
} from "./common"
import { DescriptionFont } from "../components/textStyles"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title={frontmatter.title} />
        <BlogPostWrapper>
          <PostHeaderFont>{frontmatter.title}</PostHeaderFont>
          {frontmatter.writtenBy !== null ? (
            <DescriptionFont>
              Written by: {frontmatter.writtenBy}
            </DescriptionFont>
          ) : (
            <></>
          )}
          <DescriptionFont>{frontmatter.date}</DescriptionFont>
          <BlogPostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
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
        writtenBy
      }
    }
  }
`
