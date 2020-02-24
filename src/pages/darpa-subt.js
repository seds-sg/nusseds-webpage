import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { StyledAvatar, ImageWrapper } from "../components/leadership"
import { graphql } from "gatsby"

const DarpaPage = ({ data }) => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="New Opportunity" />
			<DarpaPageHeaderWrapper>DARPA SubT Challenge</DarpaPageHeaderWrapper>
			<DarpaPageDescription>Aiming to understand the underground world.</DarpaPageDescription>
			<SectionHeaderWrapper headerText="DESCRIPTION" />
			<DescriptionFont>
				Our understanding of the underground world remains incomplete. Beneath our feet there are thousands of
				kilometers worth of caves and tunnels. Much of this area is inaccessible to humans and many people have
				perished trying to explore the caves beneath our feet.
				<br />
				<br />
				The DARPA SubT challenge hopes to solve the problem of mapping and navigating the underground world. At
				NUS SEDS we are trying to develop the next generation of robotic swarms that will allow us to do so. We
				are leveraging state of the art indoor location beacons combined with a high degree of autonomy and
				cooperation between both ground and aerial robots to help produce a full 3D map of the underground
				world.
				<br />
				<br />
				Our vision is to transfer this technology in exploration of other planets in our universe. Our work
				involves a lot of mechanical, electrical and software engineering. We welcome all students who are
				interested in joining the DARPA SubT Challenge team in its endeavour to create solutions that enable
				warfighters and first responders to rapidly map, navigate, and search dynamic underground environments.
				Two rounds of competitions will be held. One in March 2020 and another in Fall 2021. In total there are
				$5 million worth of prizes.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="ADVISORS" />
			<ImageWrapper>
				<StyledAvatar name="Dr. Colin Tan" description="Advisor" data={data} imageName="male_kerbal" />
			</ImageWrapper>
			<SectionHeaderWrapper headerText="CONTACT" />
			<DescriptionFont>
				For any enquiries, please contact:
				<ul>
					<li>
						{" "}
						Anushka Gaikwad @ +65 8139 3083 or <a href="mailto:anushka@u.nus.edu">anushka@u.nus.edu</a>
					</li>
					<li>
						Arjo Chakravarty @ +65 8722 6736 or <a href="mailto:arjo@u.nus.edu">arjo@u.nus.edu</a>
					</li>
				</ul>
				<br />
			</DescriptionFont>
			{/* <SectionHeaderWrapper headerText="MEDIA" /> */}
		</NavbarPaddingContainer>
	</Layout>
)

const DarpaPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const DarpaPageDescription = styled(DescriptionFont)`
  padding-bottom: 2rem;
`

export default DarpaPage

export const pageQuery = graphql`
	query {
		male_kerbal: file(relativePath: { eq: "male_kerbal.jpeg" }) {
			...squareImage
		}
	}
`