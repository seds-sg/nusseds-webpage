import React from "react"
import StyledPostLink from "../components/post-link"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import styled from "styled-components"
import StyledButton from "../components/button"

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
        <PostsTitleWrapper>We Write too.</PostsTitleWrapper>
        <PostsDescription>
          Get an update we have a fancy new article. Learn tidbits about space
          exploration and our progress - right from your inbox.
        </PostsDescription>
        <ButtonWrapper buttonText="Get Updates" onClick={() => null} />
        {Posts}
      </NavbarPaddingContainer>
    </Layout>
  )
}

const PostsTitleWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const PostsDescription = styled(DescriptionFont)`
  padding-bottom: 3rem;
`

const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 10rem;
  padding: 0.75rem 2rem;
`

export default Posts

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { upcoming: { eq: null } } }
    ) {
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
