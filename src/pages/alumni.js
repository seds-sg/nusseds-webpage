import React from "react"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import SEO from "../components/seo"
import { ImageWrapper, StyledAvatar } from "../components/leadership"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { graphql } from "gatsby"

const AlumniPage = ({ data }) => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Alumni" />
			<AlumniPageHeaderWrapper>Alumni.</AlumniPageHeaderWrapper>
      <AlumniPageDescription>
				Our past members.
			</AlumniPageDescription>
			<SectionHeaderWrapper headerText="2019/20 Core Team" />
			<ImageWrapper>
				<StyledAvatar name="Ramu Vairavan" description="President" data={data} imageName="ramu" />
				<StyledAvatar name="Ashwin Kumaar" description="Creative Lead" data={data} imageName="male_kerbal" />
				<StyledAvatar
        name="Anushka Gaikwad"
					description="Project Manager (SubT DARPA)"
					data={data}
					imageName="female_kerbal"
				/>
				<StyledAvatar
					name="Rachiket Arya"
					description="Project Manager (New Opportunity)"
					data={data}
					imageName="rachiket"
				/>
				<StyledAvatar name="K Muruges" description="Webmaster" data={data} imageName="muruges" />
			</ImageWrapper>
		</NavbarPaddingContainer>
	</Layout>
)

const AlumniPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const AlumniPageDescription = styled(DescriptionFont)`
  padding-bottom: 3rem;
`

export default AlumniPage

export const pageQuery = graphql`
	query {
		rachiket: file(relativePath: { eq: "Rachiket_Arya.jpeg" }) {
			...squareImage
		}
		male_kerbal: file(relativePath: { eq: "male_kerbal.jpeg" }) {
			...squareImage
		}
		ramu: file(relativePath: { eq: "Ramu_Vairavan.jpg" }) {
			...squareImage
		}
		female_kerbal: file(relativePath: { eq: "female_kerbal.jpeg" }) {
			...squareImage
		}
		muruges: file(relativePath: { eq: "Muruges.jpg" }) {
			...squareImage
		}
	}
`