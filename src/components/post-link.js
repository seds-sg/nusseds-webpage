import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TitleFont, DescriptionFont } from "../components/textStyles"

const PostLink = ({ className, post }) => (
  <div className={className}>
    <Link to={post.frontmatter.path}>
      <PostTitleWrapper>{post.frontmatter.title}</PostTitleWrapper>
      <DateWrapper>Date of post: {post.frontmatter.date}</DateWrapper>
      <ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
    </Link>
  </div>
)

const DateWrapper = styled(DescriptionFont)`
  padding-bottom: 1rem;
`

const StyledPostLink = styled(PostLink)`
  padding-bottom: 2rem;
`

const PostTitleWrapper = styled(TitleFont)`
  padding-bottom: 1rem;
`

const ExcerptWrapper = styled(DescriptionFont)`
  padding-bottom: 2rem;
  margin: 0;
  font-size: 0.75rem;
`

export default StyledPostLink
