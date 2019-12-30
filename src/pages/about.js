import React from 'react';
import Layout, { NavbarPaddingContainer } from '../components/layout';
import { PageHeaderFont, DescriptionFont, TitleFont } from '../components/textStyles';
import SEO from '../components/seo';
import StyledLeaderShipContent from '../components/leadership';
import styled from 'styled-components';
import StyledButton from '../components/button';
import SectionHeaderWrapper from '../components/sectionHeader';

const AboutPage = () => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="About Us" />
			<AboutPageHeaderWrapper>Who we are.</AboutPageHeaderWrapper>
			<AboutPageDescription>
				We are NUS SEDS - Students for the Exploration and Development of Space. We are a group of highly
				passionate & ambitious students. We strongly believe in the limitless future of space; and Singapore’s
				potential role in it.
			</AboutPageDescription>
			<VisionMissionWrapper>
				<StyledVisionMission
					title="Our Vision."
					description="To be the rallying youth force that ushers in a space age in the region."
				/>
				<StyledVisionMission
					title="Our Mission."
					description="To empower youth in Singapore & beyond to make an impact in space exploration."
				/>
			</VisionMissionWrapper>
			{/* <SectionHeaderWrapper headerText="SOME FRIENDS WE HAVE WORKED WITH" /> */}
			<SectionHeaderWrapper headerText="FOLLOW US ON" />
			<StyledFollowUsContent />
			<SectionHeaderWrapper headerText="OUR CORE TEAM" />
			<StyledLeaderShipContent />
			{/* <SectionHeaderWrapper headerText="OUR ADVISORS" /> */}
			<SectionHeaderWrapper headerText="JOIN OUR MISSION" />
			<StyledJoinUsContent />
		</NavbarPaddingContainer>
	</Layout>
);

const AboutPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`;

const AboutPageDescription = styled(DescriptionFont)`
	padding-bottom: 3rem;
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

const StyledVisionMission = styled(VisionMission)`
	padding: 1rem 0;
	max-width: 40rem;	
`;

const VisionMissionTitle = styled(TitleFont)`
  padding-bottom: 1rem;
`;

const VisionMissionDescription = styled(DescriptionFont)``;

const FollowUsContent = ({ className }) => (
	<div className={className}>
		<StyledButton buttonText="TELEGRAM" onClick={() => window.open('https://t.me/nusseds')} />
		<StyledButton
			buttonText="INSTAGRAM"
			onClick={() => window.open('https://instagram.com/nus_seds?igshid=krgjw95pdxlm')}
		/>
		<StyledButton buttonText="FACEBOOK" onClick={() => window.open('https://www.facebook.com/nusseds/')} />
		<StyledButton
			buttonText="YOUTUBE"
			onClick={() => window.open('https://www.youtube.com/channel/UCUbobZWvBIYmCOsc_33vwGQ')}
		/>
	</div>
);

const StyledFollowUsContent = styled(FollowUsContent)`
	display: flex;
	justify-content: space-evenly;
	padding-bottom: 2rem;
`;

const JoinUsContent = ({ className }) => (
	<div className={className}>
		<JoinUsTitle>Let's Work Together.</JoinUsTitle>
		<JoinUsText>
			If you are inspired to believe in our mission and vision - please do reach out to us. Together, we can
			inspire others to believe and help to create opportunities for fellow Singaporeans in the Space Industry.
		</JoinUsText>
		<StyledButton buttonText="REACH OUT TO US" onClick={() => window.open('mailto:missioncontrol@nusseds.space')} />
	</div>
);

const JoinUsTitle = styled(TitleFont)`
	padding-top: 3rem;
	padding-bottom: 3rem;
`;
const JoinUsText = styled(DescriptionFont)`
	padding-bottom: 3rem;
`;

const StyledJoinUsContent = styled(JoinUsContent)`
	padding-bottom: 3rem;
`;

export default AboutPage;
