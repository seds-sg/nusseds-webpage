import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { TitleFont, DescriptionFont } from '../components/textStyles';

const PostLink = ({ className, post }) => (
	<div className={className}>
		<PostLine />
		<StyledLink to={post.frontmatter.path}>
			<PostTitleWrapper>{post.frontmatter.title}</PostTitleWrapper>
			<DateWrapper>Date: {post.frontmatter.date}</DateWrapper>
			<ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
		</StyledLink>
	</div>
);

const BriefPostLink = ({ className, post }) => (
	<StyledLink className={className} to={post.frontmatter.path}>
		<PostTitleWrapper>{post.frontmatter.title}</PostTitleWrapper>
		<DateWrapper>Date: {post.frontmatter.date}</DateWrapper>
		<ExcerptWrapper>{post.excerpt}</ExcerptWrapper>
	</StyledLink>
);

export const StyledBriefPostLink = styled(BriefPostLink)`
	max-width: 40rem;
	padding-bottom: 2rem;
`;

const PostLine = styled.div`
	height: 0;
	width: 5rem;
	border: 0;
	flex-shrink: 0;
	margin-left: -3rem;
	margin-top: 2.3rem;
	margin-right: 2rem;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
`;

const StyledLink = styled(Link)`
  :hover {
    text-decoration: none;
    box-shadow: inset 0 0 3px white;
  }
`;

const DateWrapper = styled(DescriptionFont)`
  padding-bottom: 1rem;
  font-size: 1.25rem;
`;

const StyledPostLink = styled(PostLink)`
  padding-bottom: 2rem;
  display: flex;
`;

const PostTitleWrapper = styled(TitleFont)`
  padding-bottom: 1rem;
`;

const ExcerptWrapper = styled(DescriptionFont)`
  padding-bottom: 2rem;
  margin: 0;
`;

export default StyledPostLink;
