import React from 'react';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import SectionHeaderWrapper from '../components/sectionHeader';
import Img from "gatsby-image"
import { graphql } from "gatsby"

const RoverPage = ({ data }) => {
	const { image1, image2, image3 } = data;
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title="New Opportunity" />
				<RoverPageHeaderWrapper>New Opportunity</RoverPageHeaderWrapper>
				<RoverPageDescription>Our flagship engineering project.</RoverPageDescription>
				<SectionHeaderWrapper headerText="DESCRIPTION" />
				<DescriptionFont>
					New Opportunity is the flagship engineering project of NUS SEDS. The aim is to design and build a
					Remotely Operated Vehicle (ROV) that can accomplish a variety of tasks with some autonomous
					capabilities. Other than for space exploration rover technology also has a use case in warehouse
					management, disaster search and rescue and explosive ordnance disposal.<br /><br />

					The Rover Team plans to participate in the University Rover Challenge (URC) from
					November 2019 (registration) to May 2020 (competition). This is an annual competition
					held by The Mars Society at the Mars Desert Research Station in Utah, USA, where teams
					and their rovers are tasked with the completion of 4 mission requirements:<br /><br />
					<ul>
						<li>A Science Mission to investigate a site for the presence of current or past life.</li>
						<li>A Delivery Mission to deliver a variety of objects to mock astronauts in the field across rugged terrain.</li>
						<li>An Equipment Servicing Mission to perform dextrous operations on a mock lander using a robotic arm.</li>
						<li>An Autonomous Traversal Mission to autonomously travel to a site and locate a marker.</li>
					</ul>
				</DescriptionFont>
				<SectionHeaderWrapper headerText="ACCOMPLISHMENTS" />
				<DescriptionFont>
					To date, the team has built a fully functioning prototype, New Spirit, to gain experience
					in rover construction. It took a small, dedicated workforce just 2 months and S$500 to
					complete, and incorporates many industry-standard features for planetary exploration
					vehicles. The rover features a rocker-bogie suspension akin to that on the Curiosity
					rover, as well as independently powered wheels employing Ackermann-steering. It also
					incorporates many exciting independently-designed features such as a mast camera, Bluetooth-controlled
					robot arm, and Wi-Fi-enabled remote-control through a custom-made app.
				</DescriptionFont>
				<SectionHeaderWrapper headerText="FUTURE PLANS" />
				<DescriptionFont>
					The team has shortlisted over 30 highly talented individuals to work on the challenge rover
					for URC, called New Opportunity. Development of the vehicle is in full swing with strong
					collaboration between the subsystem teams. At this point, most subsystems have passed
					the evaluation stage, and designs are being finalized. The actual construction, testing, and
					implementation of the rover is contingent on further funding.<br /><br />

					Team members come from a diverse set of majors and years of study with a common
					passion for space exploration. The team promotes a culture of collaborative learning
					through various sessions and workshops. For instance, the team conducted a boot camp
					covering Robot Operating System, CAD modelling, fabricating techniques and the use
					of micro-controllers in electrical systems, all key elements in designing and building New
					Spirit and future rovers. This was done to bring new team members up to speed with
					regard to their technical skills, as well as to ensure project continuity.
				</DescriptionFont>
				<SectionHeaderWrapper headerText="TEAM LEADS" />
				<SectionHeaderWrapper headerText="CONTACT" />
				<DescriptionFont>
					For any enquiries, please contact Rachiket Arya @ +65 9611 9842 or <a href="mailto:rachiket@nusseds.space">rachiket@nusseds.space</a>
				</DescriptionFont>
				<SectionHeaderWrapper headerText="MEDIA" />
				<StyledMedia>
					<StyledImage fluid={image1.childImageSharp.fluid} />
					<StyledImage fluid={image2.childImageSharp.fluid} />
					<StyledImage fluid={image3.childImageSharp.fluid} />
				</StyledMedia>
			</NavbarPaddingContainer>
		</Layout>
	);
}

const RoverPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`;

const RoverPageDescription = styled(DescriptionFont)`
	padding-bottom: 2rem;
`;

const StyledImage = styled(Img)`
	width: 300px;
	height: auto;
	max-width: 100%;
	margin: 1rem;
`;

const StyledMedia = styled.div`
	padding: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

export default RoverPage;

export const pageQuery = graphql`
	query {
		image1: file(relativePath: { eq: "new-oppy/image1.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image2: file(relativePath: { eq: "new-oppy/image2.png" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
		image3: file(relativePath: { eq: "new-oppy/image3.png" }) {
			childImageSharp {
				fluid(maxWidth: 300) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;