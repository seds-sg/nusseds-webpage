import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TitleFont } from "../components/textStyles"

const PostLink = ({ className, post }) => (
  <div className={className}>
    <Link to={post.frontmatter.path}>
      <PostTitleWrapper>
        {post.frontmatter.title} ({post.frontmatter.date})
      </PostTitleWrapper>
      <ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
    </Link>
  </div>
)

const StyledPostLink = styled(PostLink)`
  margin-bottom: 2rem;
`

const PostTitleWrapper = styled(TitleFont)`
  padding-bottom: 1rem;
`

const ExcerptWrapper = styled.p`
  padding-bottom: 2rem;
  margin: 0;
  font-size: 0.75rem;
`

export default StyledPostLink
