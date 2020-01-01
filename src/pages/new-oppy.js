import React from 'react';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import SectionHeaderWrapper from '../components/sectionHeader';

const RoverPage = () => (
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
				management, disaster search and rescue and explosive ordnance disposal.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="TEAM LEADS" />
			<SectionHeaderWrapper headerText="CONTACT" />
			<SectionHeaderWrapper headerText="MEDIA" />
		</NavbarPaddingContainer>
	</Layout>
);

const RoverPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`;

const RoverPageDescription = styled(DescriptionFont)`
	padding-bottom: 2rem;
`;

export default RoverPage;
