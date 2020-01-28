import React, { useState, useEffect } from "react"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { LandingTitleFont, DescriptionFont } from "../components/textStyles"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledButton from "../components/button"

const IndexPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const intervalHandle = setInterval(
      () => setCurrentIndex(prevIndex => (prevIndex + 1) % 2),
      10000
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
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        newOppy: file(relativePath: { eq: "new_oppy.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      {[0, 1].map(projectIndex => (
        <BgImgContainer
          key={projectIndex}
          selected={projectIndex === currentIndex}
        >
          <StyledBackgroundImage
            Tag="section"
            fluid={
              projectIndex === 0
                ? newOppy.childImageSharp.fluid
                : darpa.childImageSharp.fluid
            }
            preserveStackingContext={true}
            style={{
              position: "fixed",
            }}
          >
            <StyledNavBarPadding>
              <SEO title="Home" />
              <div>
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
                <ProjectDetailsButton
                  onClick={() =>
                    (window.location =
                      projectIndex === 0 ? "/new-oppy" : "darpa-subt")
                  }
                  buttonText="Learn More"
                />
              </div>
            </StyledNavBarPadding>
          </StyledBackgroundImage>
        </BgImgContainer>
      ))}
    </Layout>
  )
}

const StyledNavBarPadding = styled(NavbarPaddingContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`

const ProjectDetailsButton = styled(StyledButton)`
  background-color: #5557f6;
  border: 0;
  margin-top: 3rem;
  padding: 0.75rem 2.5rem;
`

const ProjectTitleWrapper = styled(LandingTitleFont)`
  margin-bottom: 0.75rem;
`

const ProjectDecriptionWrapper = styled(DescriptionFont)`
  font-size: 1.875rem;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh - 66px;
  margin-top: 66px;
`

const BgImgContainer = styled.div`
  opacity: ${props => (props.selected ? 1 : 0)};
  z-index: ${props => (props.selected ? 2 : 1)};
  transition: opacity 2s ease-in;
  position: fixed;
`

export default IndexPage
