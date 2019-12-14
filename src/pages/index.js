import React, { useState, useEffect } from "react"

import Layout, { NavbarPaddingContainer } from "../components/layout"
import { LandingTitleFont, DescriptionFont } from "../components/textStyles"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const IndexPage = ({ className }) => {
  const [projectIndex, setProjectIndex] = useState(0)

  useEffect(() => {
    const intervalHandle = setInterval(
      () => setProjectIndex(prevIndex => (prevIndex + 1) % 2),
      5000
    )
    return () => {
      clearInterval(intervalHandle)
    }
  }, [])

  const { darpa, newOppy } = useStaticQuery(
    graphql`
      query {
        darpa: file(relativePath: { eq: "darpa.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        newOppy: file(relativePath: { eq: "new_oppy.png" }) {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <BackgroundImage
        Tag="Section"
        fluid={
          projectIndex === 0
            ? newOppy.childImageSharp.fluid
            : darpa.childImageSharp.fluid
        }
        className={className}
      >
        <NavbarPaddingContainer>
          <SEO title="Home" />
          <ProjectWrapper>
            <ProjectTitleWrapper>
              {projectIndex === 0
                ? "New Opportunity"
                : "DARPA Subterranean Challenge"}
            </ProjectTitleWrapper>
            <ProjectDecriptionWrapper>
              {projectIndex === 0
                ? "We are building an autonomous exploration rover from scratch."
                : "We are helping to revolutionize how we operate in the underground domain."}
            </ProjectDecriptionWrapper>
          </ProjectWrapper>
        </NavbarPaddingContainer>
      </BackgroundImage>
    </Layout>
  )
}

const ProjectWrapper = styled.div`
  margin-top: 18rem;
`

const ProjectTitleWrapper = styled(LandingTitleFont)`
  margin-bottom: 0.75rem;
`

const ProjectDecriptionWrapper = styled(DescriptionFont)``

const StyledIndexPage = styled(IndexPage)`
  width: 100%;
  height: 100vh;
`

export default StyledIndexPage
