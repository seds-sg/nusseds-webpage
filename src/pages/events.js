import React from 'react';
import { PageHeaderFont, DescriptionFont } from '../components/textStyles';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import SEO from '../components/seo';
import styled from 'styled-components';
import StyledButton from '../components/button';
import SectionHeaderWrapper from '../components/sectionHeader';

const EventsPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Events" />
			<EventPageHeaderWrapper>Our Events.</EventPageHeaderWrapper>
			<EventPageDescription>
				Get event updates and post-event summaries every week! Just leave your email with us and we will take
				care of it for you!
			</EventPageDescription>
			<ButtonWrapper buttonText="Get Updates 🚀" onClick={() => null} />
			<SectionHeaderWrapper headerText="UPCOMING EVENTS" />
			<SectionHeaderWrapper headerText="PAST EVENTS" />
			<SectionHeaderWrapper headerText="OUR PAST SPEAKERS" />
		</NavbarPaddingContainer>
	</Layout>
);

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
