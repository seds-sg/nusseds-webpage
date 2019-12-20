import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { DescriptionFont } from '../components/textStyles';

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

export const squareImage = graphql`
	fragment squareImage on File {
		childImageSharp {
			fixed(width: 200, height: 200) {
				...GatsbyImageSharpFixed_withWebp
			}
		}
	}
`;

const StyledImage = styled(Img)`
	width: 200px;
	height: 200px;
	border-radius: 100px;
`;

const StyledImageName = styled(DescriptionFont)`
	font-size: 1.125rem;
	font-weight: 900;
	padding-top: 1rem;
	max-width: 200px;
	text-align: center;
`;

const StyledImageDescription = styled(StyledImageName)`
	font-weight: 500;
`;

const PersonImageWithTitle = ({ className, name, description, data, imageName }) => (
	<div className={className}>
		<StyledImage fixed={data[imageName].childImageSharp.fixed} />
		<StyledImageName>{name}</StyledImageName>
		<StyledImageDescription>{description}</StyledImageDescription>
	</div>
);

const StyledPersonImage = styled(PersonImageWithTitle)`
	padding: 1rem;
`;

export default StyledLeaderShipContent;
