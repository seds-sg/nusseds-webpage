import React from "react"
import { StyledBriefPostLink } from "../components/post-link"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { graphql } from "gatsby"
import SectionHeaderWrapper from "../components/sectionHeader"
import GetUpdates from "../components/getUpdates"

const EventsPage = ({ data: { pastEvents, newEvents } }) => {
	const OldPosts = pastEvents.edges
		.filter((edge) => !!edge.node.frontmatter.date)
		.map((edge) => <StyledBriefPostLink key={edge.node.id} post={edge.node} />)
	const NewPosts = newEvents.edges
		.filter((edge) => !!edge.node.frontmatter.date)
		.map((edge) => <StyledBriefPostLink isUpcoming={true} key={edge.node.id} post={edge.node} />)
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title="Events" />
				<EventPageHeaderWrapper>Our Events.</EventPageHeaderWrapper>
				<EventPageDescription>
					Get event updates and post-event summaries every week! Just leave your email with us and we will
					take care of it for you!
				</EventPageDescription>
				<GetUpdates />
				<SectionHeaderWrapper headerText="UPCOMING EVENTS" />
				<EventsWrapper>{NewPosts}</EventsWrapper>
				<SectionHeaderWrapper headerText="PAST EVENTS" />
				<EventsWrapper>{OldPosts}</EventsWrapper>
				{/* <SectionHeaderWrapper headerText="OUR PAST SPEAKERS" /> */}
			</NavbarPaddingContainer>
		</Layout>
	)
}

const EventsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`

const EventPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const EventPageDescription = styled(DescriptionFont)`
  padding-bottom: 7rem;
`

export default EventsPage

export const pageQuery = graphql`
	query {
		pastEvents: allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			filter: { frontmatter: { upcoming: { eq: null } } }
			limit: 4
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
		newEvents: allMarkdownRemark(
			sort: { order: ASC, fields: [frontmatter___date] }
			filter: { frontmatter: { upcoming: { ne: null } } }
			limit: 4
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
