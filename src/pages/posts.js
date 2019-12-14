import React from "react"
import StyledPostLink from "../components/post-link"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { PageHeaderFont } from "../components/textStyles"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"

const Posts = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date)
    .map(edge => <StyledPostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title="New Frontier Posts" />
        <PostTitleWrapper>We Write too.</PostTitleWrapper>
        {Posts}
      </NavbarPaddingContainer>
    </Layout>
  )
}

const PostTitleWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

export default Posts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 100)
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
