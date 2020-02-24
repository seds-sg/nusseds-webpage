import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { TitleFont, DescriptionFont } from "../components/textStyles"

const PostLink = ({ className, post }) => (
	<div className={className}>
		<PostLine />
		<StyledLink to={post.frontmatter.path}>
			<PostTitleWrapper>{post.frontmatter.title}</PostTitleWrapper>
			<DateWrapper>Date: {post.frontmatter.date}</DateWrapper>
{post.frontmatter.writtenBy ? <ContentProducerWrapper>Written by: {post.frontmatter.writtenBy}</ContentProducerWrapper>:
post.frontmatter.recordedBy ? <ContentProducerWrapper>Recorded by: {post.frontmatter.recordedBy}</ContentProducerWrapper>: <></>}
			<ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
		</StyledLink>
	</div>
)

const BriefPostLink = ({ className, post, isUpcoming }) => (
	<StyledLink className={className} to={post.frontmatter.path}>
		<PostTitleWrapper>{post.frontmatter.title}</PostTitleWrapper>
		<DateWrapper>Date: {isUpcoming ? "Currently Postponed" : post.frontmatter.date}</DateWrapper>
		<ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
	</StyledLink>
)

const StyledLink = styled(Link)`
  max-width: 100%;
  :hover {
    text-decoration: none;
    box-shadow: inset 0 0 3px white;
  }
`

export const StyledBriefPostLink = styled(BriefPostLink)`
  max-width: 40rem;
  padding-bottom: 2rem;
`

const PostLine = styled.div`
	height: 0;
	width: 8.5vw;
	max-width: 5rem;
	border: 0;
	flex-shrink: 0;
	margin-left: -3rem;
	margin-top: 2.3rem;
	margin-right: 2rem;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
`


const DateWrapper = styled(DescriptionFont)`
  padding-bottom: 1rem;
  font-size: 1.25rem;
`
const ContentProducerWrapper = styled(DateWrapper)`
	font-style: italic;
`

const StyledPostLink = styled(PostLink)`
  padding-bottom: 2rem;
  display: flex;
`

const PostTitleWrapper = styled(TitleFont)`
  padding-bottom: 1rem;
`

const ExcerptWrapper = styled(DescriptionFont)`
  padding-bottom: 2rem;
  margin: 0;
`

export default StyledPostLink
