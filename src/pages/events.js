import React from 'react';
import { StyledBriefPostLink } from '../components/post-link';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import StyledButton from '../components/button';
import SectionHeaderWrapper from '../components/sectionHeader';
import { useState } from 'react';

const EventsPage = ({ data: { pastEvents, newEvents } }) => {
	const [showGetUpdateBtn, setGetUpdateBtn] = useState(true);
	const OldPosts = pastEvents.edges
		.filter((edge) => !!edge.node.frontmatter.date)
		.map((edge) => <StyledBriefPostLink key={edge.node.id} post={edge.node} />);
	const NewPosts = newEvents.edges
		.filter((edge) => !!edge.node.frontmatter.date)
		.map((edge) => <StyledBriefPostLink key={edge.node.id} post={edge.node} />);
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title="Events" />
				<EventPageHeaderWrapper>Our Events.</EventPageHeaderWrapper>
				<EventPageDescription>
					Get event updates and post-event summaries every week! Just leave your email with us and we will
					take care of it for you!
				</EventPageDescription>
				{(showGetUpdateBtn) ? <ButtonWrapper buttonText="Get Updates 🚀" onClick={() => setGetUpdateBtn(false)} /> : (
					<>
					<input type="text" autoFocus	placeholder="Enter your email address!"/>
					<ButtonWrapper buttonText="Submit!" onClick={() => {
						var xhr = new XMLHttpRequest()

						// get a callback when the server responds
						xhr.addEventListener('load', () => {
							// update the state of the component with the result here
							console.log(xhr.responseText)
						})
						// open the request with the verb and the url
						xhr.open('POST', 'https://maker.ifttt.com/trigger/email_sent/with/key/dHuqFr9kznrIlXrL5b35Vg')
						// send the request
						xhr.send(JSON.stringify({ value1: 'test5@gmail.com' }))
						setGetUpdateBtn(true);
					}} />
					</>
				)}
				<SectionHeaderWrapper headerText="UPCOMING EVENTS" />
				<EventsWrapper>{NewPosts}</EventsWrapper>
				<SectionHeaderWrapper headerText="PAST EVENTS" />
				<EventsWrapper>{OldPosts}</EventsWrapper>
				{/* <SectionHeaderWrapper headerText="OUR PAST SPEAKERS" /> */}
			</NavbarPaddingContainer>
		</Layout>
	);
};

const EventsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const EventPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`;

const EventPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`;
const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 5rem;
  padding: 0.75rem 2rem;
`;

export default EventsPage;

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
`;
