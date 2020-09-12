import React from "react"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { PageHeaderFont, DescriptionFont, TitleFont } from "../components/textStyles"
import SEO from "../components/seo"
import { ImageWrapper, StyledAvatar, StyledImageWithTitle } from "../components/leadership"
import styled from "styled-components"
import StyledButton, { IconButton } from "../components/button"
import SectionHeaderWrapper from "../components/sectionHeader"
import { graphql } from "gatsby"
import { FaTelegramPlane, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

const AboutPage = ({ data }) => (
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
			<SectionHeaderWrapper headerText="OUR SPONSORS" />
			<SponsorContainer>
				<StyledImageWithTitle
					data={data}
					imageName="nus_engineering"
					onClick={() => window.open("https://www.eng.nus.edu.sg/")}
				/>
				<StyledImageWithTitle
					data={data}
					imageName="nus_computing"
					onClick={() => window.open("https://www.comp.nus.edu.sg/")}
				/>
			</SponsorContainer>
			<SectionHeaderWrapper headerText="OUR PARTNERS" />
			<SponsorContainer>
				<StyledImageWithTitle
					data={data}
					imageName="nus_enterprise"
					onClick={() => window.open("https://enterprise.nus.edu.sg/")}
				/>
				<StyledImageWithTitle
					data={data}
					imageName="nus_hackers"
					onClick={() => window.open("https://www.nushackers.org/")}
				/>
				<StyledImageWithTitle
					data={data}
					imageName="engineers_sg"
					onClick={() => window.open("https://engineers.sg/")}
				/>
				<StyledImageWithTitle
					data={data}
					imageName="open_cosmos"
					onClick={() => window.open("https://open-cosmos.com/")}
				/>
			</SponsorContainer>
			<SectionHeaderWrapper headerText="OUR ADVISORS" />
			<ImageWrapper>
				<StyledAvatar name="Prof. Low Kay-Soon" description="Advisor" data={data} imageName="male_kerbal" />
				<StyledAvatar name="Mr. Eugene Ee" description="Mentor" data={data} imageName="male_kerbal" />
			</ImageWrapper>
			<SectionHeaderWrapper headerText="OUR CORE TEAM" />
			<ImageWrapper>
				<StyledAvatar name="Ian Wu Ling En" description="President" data={data} imageName="ian" />
				<StyledAvatar name="Yeoh Jun Kai" description="Project Director (Propulsion Lab)" data={data} imageName="jun_kai" />
				<StyledAvatar name="Anisha Nicole Joseph" description="Finance Lead" data={data} imageName="anisha" />
				<StyledAvatar
					name="Dean Su Di Yang"
					description="Outreach Lead (External)"
					data={data}
					imageName="dean"
				/>
				<StyledAvatar name="Yeoh Jun Jie" description="Events Manager" data={data} imageName="jun_jie" />
				<StyledAvatar name="Benedict Goh" description="Secretary" data={data} imageName="benedict" />
				<StyledAvatar
					name="Pranati Rajagopal"
					description="Project Director (Rover Team)"
					data={data}
					imageName="pranati"
				/>
				<StyledAvatar name="Arka Ray" description="Space Policy Unit Lead" data={data} imageName="arka_ray" />
			</ImageWrapper>
			<SectionHeaderWrapper headerText="FOLLOW US ON" />
			<StyledFollowUsContent />
			<SectionHeaderWrapper headerText="CONTACT US" />
			<StyledJoinUsContent />
		</NavbarPaddingContainer>
	</Layout>
)

const AboutPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const AboutPageDescription = styled(DescriptionFont)`
  padding-bottom: 3rem;
`

const SponsorContainer = styled(ImageWrapper)`
	background-color: white;
	div {
		color: black;
	}
`

/** VISION MISSION */

const VisionMissionWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	padding-top: 2rem;
`

const VisionMission = ({ className, title, description }) => (
	<div className={className}>
		<VisionMissionTitle>{title}</VisionMissionTitle>
		<VisionMissionDescription>{description}</VisionMissionDescription>
	</div>
)

const StyledVisionMission = styled(VisionMission)`
  padding: 1rem 0;
  max-width: 45rem;
`

const VisionMissionTitle = styled(TitleFont)`
  padding-bottom: 1rem;
`

const VisionMissionDescription = styled(DescriptionFont)``

const FollowUsContent = ({ className }) => (
	<div className={className}>
		<IconButton onClick={() => window.open("https://t.me/nusseds")}><FaTelegramPlane /></IconButton>
		<IconButton onClick={() => window.open("https://www.youtube.com/channel/UCUbobZWvBIYmCOsc_33vwGQ")}><FaYoutube /></IconButton>
		<IconButton onClick={() => window.open("https://instagram.com/nus_seds?igshid=krgjw95pdxlm")}><FaInstagram /></IconButton>
		<IconButton onClick={() => window.open("https://www.facebook.com/nusseds/")}><FaFacebookF /></IconButton></div>
)

const StyledFollowUsContent = styled(FollowUsContent)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const JoinUsContent = ({ className }) => (
	<div className={className}>
		<JoinUsTitle>Let's Work Together.</JoinUsTitle>
		<JoinUsText>
			If you are inspired to believe in our mission and vision - please do reach out to us. Currently, we are located at Faculty of Engineering (EW1A), National University of Singapore (NUS).
			<br/><br/>
			Alternatively, contact us via email through the button below.
		</JoinUsText>
		<StyledButton buttonText="JOIN OUR MISSION" onClick={() => window.open("mailto:seds@u.nus.edu")} />
		<JoinUsText><br/><br/>NUS SEDS is also constituent club of <a href="https://seds-sg.space">SEDS SG</a> and <a href="https://http://www.sedsearth.org/">SEDS Earth</a>.</JoinUsText>
	</div>
)

const JoinUsTitle = styled(TitleFont)`
  padding-top: 3rem;
  padding-bottom: 3rem;
`
const JoinUsText = styled(DescriptionFont)`
  padding-bottom: 3rem;
`

const StyledJoinUsContent = styled(JoinUsContent)`
  padding-bottom: 3rem;
`

export default AboutPage

export const pageQuery = graphql`
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
		male_kerbal: file(relativePath: { eq: "male_kerbal.jpeg" }) {
			...squareImage
		}
		arka_ray: file(relativePath: { eq: "arka_ray.jpeg" }) {
			...squareImage
		}
		pranati: file(relativePath: { eq: "pranati.jpg" }) {
			...squareImage
		}
		female_kerbal: file(relativePath: { eq: "female_kerbal.jpeg" }) {
			...squareImage
		}
		open_cosmos: file(relativePath: { eq: "Open_Cosmos_Logo.png" }) {
			...thumbnail
		}
		nus_enterprise: file(relativePath: { eq: "NUS_Enterprise_Logo.jpg" }) {
			...thumbnail
		}
		nus_engineering: file(relativePath: { eq: "NUS_Engineering_Logo.png" }) {
			...thumbnail
		}
		nus_computing: file(relativePath: { eq: "NUS_Computing_Logo.png" }) {
			...thumbnail
		}
		engineers_sg: file(relativePath: { eq: "engineers-sg.svg" }) {
			...thumbnail
		}
		nus_hackers: file(relativePath: { eq: "nus-hackers.svg" }) {
			...thumbnail
		}
	}
`
