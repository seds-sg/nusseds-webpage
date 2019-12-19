import React from 'react';
// import { Link } from 'gatsby';

import Layout, { NavbarPaddingContainer } from '../components/layout';
import { PageHeaderFont, DescriptionFont, TitleFont } from '../components/textStyles';
import SEO from '../components/seo';
import styled from 'styled-components';

const AboutPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="About Us" />
			<AboutPageWrapper>Who we are.</AboutPageWrapper>
			<VisionMissionWrapper>
				<VisionMission>
					<VisionMissionTitle>Our Vision.</VisionMissionTitle>
					<VisionMissionDescription>
						To be the rallying youth force that ushers in a space age in the region.
					</VisionMissionDescription>
				</VisionMission>
				<VisionMission>
					<VisionMissionTitle>Our Mission.</VisionMissionTitle>
					<VisionMissionDescription>
						To empower youth in Singapore & beyond to make an impace in space exploration.
					</VisionMissionDescription>
				</VisionMission>
			</VisionMissionWrapper>
		</NavbarPaddingContainer>
	</Layout>
);

const AboutPageWrapper = styled(PageHeaderFont)`
  margin-bottom: 5rem;
`;

const VisionMissionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const VisionMission = styled.div`padding: 1rem;`;

const VisionMissionTitle = styled(TitleFont)`
  padding-bottom: 1rem;
`;

const VisionMissionDescription = styled(DescriptionFont)``;

// const AboutSectionHeader = styled.

export default AboutPage;
