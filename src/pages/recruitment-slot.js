import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ImageWrapper, StyledImageWithTitle } from "../components/leadership"

class RecruitmentSlotComponent extends React.PureComponent {

	componentDidMount () {
		window.location.replace("https://doodle.com/poll/g9y6cu42bghmzk7e?utm_source=poll&utm_medium=link")
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
