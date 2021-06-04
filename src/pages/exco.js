import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ImageWrapper, StyledImageWithTitle } from "../components/leadership"

class RecruitmentSlotComponent extends React.PureComponent {

	componentDidMount () {
		window.location.replace("https://docs.google.com/forms/d/e/1FAIpQLSfKq2FlHr_pwHyH1P7dmxIorFmS4dII2qSC0RMy4kcXlSUbww/viewform?usp=sf_link")
	}
	render () {
		return (
			<Layout></Layout>
		)
	}
}

const ProjectsPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const ProjectsPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`

export default RecruitmentSlotComponent
