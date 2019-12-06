import React from "react"
import { graphql } from "gatsby"
import "./post.css"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <h6>Recorded by: {frontmatter.recordedBy}</h6>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
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
      </div>
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
