import React from "react"
import { graphql } from "gatsby"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const BlogPostWrapper = styled.div`
  margin: 3rem;
`

const BlogPostContentWrapper = styled.div`
  margin-top: 3rem;
`

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title={frontmatter.title} />
        <BlogPostWrapper>
          <h1>{frontmatter.title}</h1>
          <h6>Recorded by: {frontmatter.recordedBy}</h6>
          <h6>{frontmatter.date}</h6>
          <BlogPostContentWrapper dangerouslySetInnerHTML={{ __html: html }} />
          <div>
            <h3>Recording of session</h3>
            <iframe
              // width="560"
              // height="315"
              src={frontmatter.youtubeLink}
              frameBorder="0"
              allowFullScreen
              title={frontmatter.title}
            />
          </div>
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
