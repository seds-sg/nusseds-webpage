import React, { useState, useEffect } from 'react';

import Layout, { NavbarPaddingContainer } from '../components/layout';
import { LandingTitleFont, DescriptionFont } from '../components/textStyles';
import BackgroundImage from 'gatsby-background-image';
import SEO from '../components/seo';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import StyledButton from '../components/button';

const IndexPage = ({ className }) => {
	const [projectIndex, setProjectIndex] = useState(0);

	useEffect(() => {
		const intervalHandle = setInterval(() => setProjectIndex((prevIndex) => (prevIndex + 1) % 2), 5000);
		return () => {
			clearInterval(intervalHandle);
		};
	}, []);

	const { darpa, newOppy } = useStaticQuery(
		graphql`
			query {
				darpa: file(relativePath: { eq: "darpa.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1440) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				newOppy: file(relativePath: { eq: "new_oppy.png" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1440) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`
	);

	return (
		<Layout>
			<BackgroundImage
				Tag="section"
				fluid={projectIndex === 0 ? newOppy.childImageSharp.fluid : darpa.childImageSharp.fluid}
				className={className}
			>
				<StyledNavBarPadding>
					<SEO title="Home" />
					<div>
						<ProjectTitleWrapper>
							{projectIndex === 0 ? 'New Opportunity' : 'DARPA Subterranean Challenge'}
						</ProjectTitleWrapper>
						<ProjectDecriptionWrapper>
							{projectIndex === 0 ? (
								'We are building an autonomous exploration rover from scratch.'
							) : (
									'We are helping to revolutionize how we operate in the underground domain.'
								)}
						</ProjectDecriptionWrapper>
						<ProjectDetailsButton onClick={() => window.location = (projectIndex === 0 ? '/new-oppy' : 'darpa-subt')} buttonText="Learn More" />
					</div>
				</StyledNavBarPadding>
			</BackgroundImage>
		</Layout>
	);
};

const StyledNavBarPadding = styled(NavbarPaddingContainer)`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
`;

const ProjectDetailsButton = styled(StyledButton)`
	background-color: #5557F6;
	border: 0;
	margin-top: 3rem;
	padding: 0.75rem 2.5rem; 
`;

const ProjectTitleWrapper = styled(LandingTitleFont)`
  margin-bottom: 0.75rem;
`;

const ProjectDecriptionWrapper = styled(DescriptionFont)`
  font-size: 1.875rem;
`;

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
  height: 100vh;
  background-position: center;
  background-size: cover;
`;

export default StyledIndexPage;
