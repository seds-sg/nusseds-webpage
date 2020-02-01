import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import { ImageWrapper, StyledImageWithTitle } from "../components/leadership"

const ProjectsPage = () => {
  const data = useStaticQuery(
    graphql`
      query {
        new_oppy: file(relativePath: { eq: "URC_img.jpg" }) {
          ...thumbnail
        }
        darpa_subt: file(
          relativePath: { eq: "SubTChallengeInfographica.png" }
        ) {
          ...thumbnail
        }
      }
    `
  )

  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title="Projects" />
        <ProjectsPageHeaderWrapper>Our Projects.</ProjectsPageHeaderWrapper>
        <ProjectsPageDescription>
          What we are working on right now.
        </ProjectsPageDescription>
        {/* <SectionHeaderWrapper headerText="ACTIVE PROJECTS" /> */}
        <ImageWrapper>
          <StyledImageWithTitle
            description="New Opportunity"
            data={data}
            imageName="new_oppy"
            onClick={() => (window.location = "/new-oppy")}
          />
          <StyledImageWithTitle
            description="DARPA SubT Challenge"
            minHeight="283px"
            data={data}
            imageName="darpa_subt"
            onClick={() => (window.location = "/darpa-subt")}
          />
        </ImageWrapper>
        {/* <SectionHeaderWrapper headerText="PAST PROJECTS" /> */}
      </NavbarPaddingContainer>
    </Layout>
  )
}

const ProjectsPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const ProjectsPageDescription = styled(DescriptionFont)`
  padding-bottom: 4.5rem;
`

export default ProjectsPage
