import React from 'react';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import SectionHeaderWrapper from '../components/sectionHeader';
import { Link } from 'gatsby';

const ProjectsPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Projects" />
			<ProjectsPageHeaderWrapper>Our Projects.</ProjectsPageHeaderWrapper>
			<ProjectsPageDescription>
				Showcase of all past and currently active projects being worked on by NUS SEDS members.
			</ProjectsPageDescription>
			<SectionHeaderWrapper headerText="ACTIVE PROJECTS" />
			<Link to="/new-oppy">New Opportunity</Link>
			<Link to="/darpa-subt">DARPA SubT Challenge</Link>
			<SectionHeaderWrapper headerText="PAST PROJECTS" />
		</NavbarPaddingContainer>
	</Layout>
);

const ProjectsPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`;

const ProjectsPageDescription = styled(DescriptionFont)`
	padding-bottom: 4.5rem;
`;

export default ProjectsPage;
