import React from "react"
import PostLink from "../components/post-link"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const Posts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <SEO title="New Frontier Posts" />
      <h1>New Frontier Posts</h1>
      {Posts}
    </Layout>
  )
}

export default Posts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`
