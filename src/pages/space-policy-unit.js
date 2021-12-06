import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { StyledAvatar, ImageWrapper, StyledThumbnailImage } from "../components/leadership"
import { graphql } from "gatsby"

const SPUPage = ({ data }) => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="Space Policy Unit" />
			<SPUPageHeaderWrapper>Space Policy Unit</SPUPageHeaderWrapper>
			<SPUPageDescription>Understanding the challenges & opportunities in Singapore's space ecosystem</SPUPageDescription>
			<SectionHeaderWrapper headerText="ABOUT" />
			<DescriptionFont>
        Space is still heavily reliant on government actors and large companies, who chart a country's course in space 
        by setting effective policy and implementing supportive measures. In order to do so, a holistic approach needs 
        to be taken - one which includes diverse viewpoints and detailed analysis.
				<br />
				<br />
				At the Space Policy Unit, our diverse range of members discuss space-related topics which affect Singapore 
        and the region around us. We also publish our work so that they can be used by interested parties to push humanity 
        forward the ongoing space revolution.
				<br />
				<br />
				Reach out if you're interested in working with us on space policy papers about pertinent issues.
        <br />
        Ad Astra!
			</DescriptionFont>
      <SectionHeaderWrapper headerText="IADC’s Space Debris Mitigation Guidelines Implementations In ASEAN’s Space Sector" />
			<DescriptionFont>
        By Chen Wei and Yeo Shen Kai 
				<br />
				<br />
        Read our <a href="/SPU/ASEANs Space Industry and Debris Mitigation Guidelines.pdf">policy brief</a> on IADC's Space Debris Mitigation Guidelines 
        and how they may adapt to the needs of emerging spacefaring nations.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="SINGAPORE SPACE INSIGHTS REPORT 2020" />
      <DescriptionFont>
      Download the entire report <a href="/SPU/SEDS SG Insights Report.pdf">here</a>.
      <br />
      <br />
      Over the summer of 2020, we carried out a project wherein we consolidated the views of the various 
      stakeholders in Singapore's Space Ecosystem. In this report, we raise the diverse opinions of companies and 
      experts from all levels of Singapore's space ecosystem. Use this report to understand what Singapore's space players 
      feel about the opportunities and challenges she has ahead of her.
      </DescriptionFont>
			<SectionHeaderWrapper headerText="CONTACT" />
      <DescriptionFont>
      For any enquiries, please contact Arka Ray at <a href="mailto:arka@u.nus.edu">arka@u.nus.edu</a>
      </DescriptionFont>
		</NavbarPaddingContainer>
	</Layout>
)

const SPUPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const SPUPageDescription = styled(DescriptionFont)`
  padding-bottom: 2rem;
`

export default SPUPage

// export const pageQuery = graphql`
// 	query {
// 		male_kerbal: file(relativePath: { eq: "male_kerbal.jpeg" }) {
// 			...squareImage
// 		}
// 		image1: file(relativePath: { eq: "darpa-subt/image1.jpg" }) {
// 			...thumbnail
// 		}
// 		image2: file(relativePath: { eq: "darpa-subt/image2.jpg" }) {
// 			...thumbnail
// 		}
// 		image3: file(relativePath: { eq: "darpa-subt/image3.jpg" }) {
// 			...thumbnail
// 		}
// 		image4: file(relativePath: { eq: "darpa-subt/image4.jpeg" }) {
// 			...thumbnail
// 		}
// 	}
// `