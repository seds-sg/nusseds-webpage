import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import { PageHeaderFont, DescriptionFont, TitleFont, SmallFont } from '../components/textStyles';
import SEO from '../components/seo';
import styled from 'styled-components';

const AboutPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="About Us" />
			<AboutPageWrapper>Who we are.</AboutPageWrapper>
			<VisionMissionWrapper>
				<StyledVisionMission
					title="Our Vision."
					description="To be the rallying youth force that ushers in a space age in the region."
				/>
				<StyledVisionMission
					title="Our Mission."
					description="To empower youth in Singapore & beyond to make an impace in space exploration."
				/>
			</VisionMissionWrapper>
			<AboutSectionHeaderWrapper headerText="SOME FRIENDS WE HAVE WORKED WITH" />
			<AboutSectionHeaderWrapper headerText="OUR CORE TEAM" />
			<StyledLeaderShipContent />
			<AboutSectionHeaderWrapper headerText="OUR ADVISORS" />
			<AboutSectionHeaderWrapper headerText="FOLLOW US ON" />
		</NavbarPaddingContainer>
	</Layout>
);

const AboutPageWrapper = styled(PageHeaderFont)`
  margin-bottom: 5rem;
`;

/** VISION MISSION */

const VisionMissionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const VisionMission = ({ className, title, description }) => (
	<div className={className}>
		<VisionMissionTitle>{title}</VisionMissionTitle>
		<VisionMissionDescription>{description}</VisionMissionDescription>
	</div>
);

const StyledVisionMission = styled(VisionMission)`padding: 1rem;`;

const VisionMissionTitle = styled(TitleFont)`
  padding-bottom: 1rem;
`;

const VisionMissionDescription = styled(DescriptionFont)``;

/** ABOUT SECTION DIVIDER */

const AboutSection = ({ className, headerText }) => (
	<div className={className}>
		<AboutSectionHeaderLine />
		<AboutSectionHeaderText>{headerText}</AboutSectionHeaderText>
		<AboutSectionHeaderLine />
	</div>
);

const AboutSectionHeaderWrapper = styled(AboutSection)`
	display: flex;
	align-items: center;
	padding: 2rem 0;
`;
const AboutSectionHeaderLine = styled.div`
	height: 0rem;
	flex: 1 1 auto;
	border: 0;
	border-top: 0.5px solid white;
	border-bottom: 0.5px solid white;
`;
const AboutSectionHeaderText = styled(SmallFont)`
	margin: 0 1rem;
`;

/** LEADERSHIP PHOTOS */

export const squareImage = graphql`
	fragment squareImage on File {
		childImageSharp {
			fluid(maxWidth: 200, maxHeight: 200) {
				...GatsbyImageSharpFluid_withWebp
			}
		}
	}
`;

const LeadershipContent = ({ className }) => {
	const images = useStaticQuery(
		graphql`
			query {
				anisha: file(relativePath: { eq: "Anisha.jpg" }) {
					...squareImage
				}
				benedict: file(relativePath: { eq: "Benedict.jpg" }) {
					...squareImage
				}
				dean: file(relativePath: { eq: "Dean_Su.png" }) {
					...squareImage
				}
				ian: file(relativePath: { eq: "Ian_Wu.jpg" }) {
					...squareImage
				}
				jun_jie: file(relativePath: { eq: "Jun_Jie.png" }) {
					...squareImage
				}
				jun_kai: file(relativePath: { eq: "Jun_Kai.jpg" }) {
					...squareImage
				}
				rachiket: file(relativePath: { eq: "Rachiket_Arya.jpeg" }) {
					...squareImage
				}
				ashwin: file(relativePath: { eq: "male_kerbal.jpeg" }) {
					...squareImage
				}
				ramu: file(relativePath: { eq: "Ramu_Vairavan.jpg" }) {
					...squareImage
				}
				anushka: file(relativePath: { eq: "female_kerbal.jpeg" }) {
					...squareImage
				}
				muruges: file(relativePath: { eq: "Muruges.jpg" }) {
					...squareImage
				}
			}
		`
	);
	return (
		<div className={className}>
			<StyledPersonImage name="Ramu Vairavan" description="President" data={images} imageName="ramu" />
			<StyledPersonImage name="Yeoh Jun Kai" description="Vice President" data={images} imageName="jun_kai" />
			<StyledPersonImage name="Ian Wu Ling En" description="Outreach Team Lead" data={images} imageName="ian" />
			<StyledPersonImage
				name="Anisha Nicole Joseph"
				description="Finance Lead"
				data={images}
				imageName="anisha"
			/>
			<StyledPersonImage name="Ashwin Kumaar" description="Creative Lead" data={images} imageName="ashwin" />
			<StyledPersonImage
				name="Dean Su Di Yang"
				description="Outreach (external) Lead"
				data={images}
				imageName="dean"
			/>
			<StyledPersonImage name="Yeoh Jun Jie" description="Events Manager" data={images} imageName="jun_jie" />
			<StyledPersonImage name="Benedict Goh" description="Secretary" data={images} imageName="benedict" />
			<StyledPersonImage
				name="Anushka Gaikwad"
				description="Project Manager (SubT DARPA)"
				data={images}
				imageName="anushka"
			/>
			<StyledPersonImage
				name="Rachiket Arya"
				description="Project Manager (New Opportunity)"
				data={images}
				imageName="rachiket"
			/>
			<StyledPersonImage name="K Muruges" description="Webmaster" data={images} imageName="muruges" />
		</div>
	);
};

const StyledLeaderShipContent = styled(LeadershipContent)`
	padding: 1rem 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

const StyledImage = styled(Img)`
	width: 200px;
	height: 200px;
`;

const StyledImageName = styled(DescriptionFont)`
	font-size: 1.125rem;
	font-weight: 900;
	padding-top: 1rem;
	max-width: 200px;
`;

const StyledImageDescription = styled(StyledImageName)`
	font-weight: 500;
`;

const PersonImageWithTitle = ({ className, name, description, data, imageName }) => (
	<div className={className}>
		<StyledImage fluid={data[imageName].childImageSharp.fluid} />
		<StyledImageName>{name}</StyledImageName>
		<StyledImageDescription>{description}</StyledImageDescription>
	</div>
);

const StyledPersonImage = styled(PersonImageWithTitle)`
	padding: 1rem;
`;

export default AboutPage;
