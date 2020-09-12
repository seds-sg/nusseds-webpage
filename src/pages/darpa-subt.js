import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { StyledAvatar, ImageWrapper, StyledThumbnailImage } from "../components/leadership"
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
				<StyledAvatar name="Dr. Soo Yuen Jien" description="Advisor" data={data} imageName="male_kerbal" />
				<StyledAvatar name="Prof. Hugh Anderson" description="Advisor" data={data} imageName="male_kerbal" />
			</ImageWrapper>
			<SectionHeaderWrapper headerText="CONTACT" />
			<DescriptionFont>
				For any enquiries, please contact:
				<ul>
				<li>
						{" "}
						Arjo Chakravarty at +65 8722 6736 or <a href="mailto:arjo@u.nus.edu">arjo@u.nus.edu</a>
					</li>
					<li>
						Xavier Lee Kok Teng at <a href="mailto:lee.kokteng@u.nus.edu">lee.kokteng@u.nus.edu</a>
					</li>
					<li>
						Nyang Shaw Bin at <a href="mailto:shawbin.nyang@u.nus.edu">shawbin.nyang@u.nus.edu</a>
					</li>
				</ul>
				<br />
			</DescriptionFont>
			<SectionHeaderWrapper headerText="MEDIA" />
			<ImageWrapper>
				<StyledThumbnailImage fluid={data.image1.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image2.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image3.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image4.childImageSharp.fluid} />
			</ImageWrapper>
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
		image1: file(relativePath: { eq: "darpa-subt/image1.jpg" }) {
			...thumbnail
		}
		image2: file(relativePath: { eq: "darpa-subt/image2.jpg" }) {
			...thumbnail
		}
		image3: file(relativePath: { eq: "darpa-subt/image3.jpg" }) {
			...thumbnail
		}
		image4: file(relativePath: { eq: "darpa-subt/image4.jpeg" }) {
			...thumbnail
		}
	}
`