import React from "react"
import {
  PageHeaderFont,
  DescriptionFont,
  TinyFont,
} from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import StyledButton from "../components/button"

const JoinUs = () => {
  const { structure } = useStaticQuery(
    graphql`
      query {
        structure: file(relativePath: { eq: "seds-structure.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )
  const formUrl = "https://forms.gle/ruuPW6EzDRWJMRPE9"
  return (
    <Layout>
      <NavbarPaddingContainer>
        <SEO title="Join Us" />
        <JoinUsHeaderWrapper>We are recruiting.</JoinUsHeaderWrapper>
        <JoinUsDescription>
          <ButtonWrapper
            buttonText="Join Now."
            onClick={() => window.open(formUrl)}
          />
        </JoinUsDescription>
        <SectionHeaderWrapper headerText="STRUCTURE" />
        <DescriptionFont>
          All current NUS students (undergraduate and postgraduate) are eligible
          for membership, regardless of their faculty and year of study.
          <br />
          <br />
          In SEDS, we have the following Directorates:
          <br />
          <br />
          <ul>
            <li>Science and Engineering</li>
            <ul>
              <li>
                Rover Team{" "}
                <TinyFont>
                  (see more <Link to={"/new-oppy"}>here</Link>)
                </TinyFont>
              </li>
              <li>
                Autonomous Vehicles Team{" "}
                <TinyFont>
                  (see more <Link to={"/darpa-subt"}>here</Link>)
                </TinyFont>
              </li>
              <li>
                GeoSpatial Team <TinyFont>(New)</TinyFont>
              </li>
              <li>
                Nanosatellite Team <TinyFont>(New)</TinyFont>
              </li>
              <li>
                High Altitude Baloon Team <TinyFont>(New)</TinyFont>
              </li>
              <li>
                Spaceplane Team <TinyFont>(New)</TinyFont>
              </li>
            </ul>
            <li>Policy</li>
            <ul>
              <li>
                Research{" "}
                <TinyFont>(for conducting space-related studies)</TinyFont>
              </li>
              <li>
                Competitions{" "}
                <TinyFont>
                  (for participating in space case/policy competitions)
                </TinyFont>
              </li>
            </ul>
          </ul>
          <br />
          <StrucureImg fluid={structure.childImageSharp.fluid} />
          <br />
          <br />
          NUS SEDS also hosts talks and workshops. Our weekly talks are called
          New Frontiers. As part of this series, we have guest lectures (e.g.
          talks by space scientists, entrepreneurs, former astronauts). Our
          workshops, New Horizons, teaches students technical skills required
          for employment in the space industry. These include but are not
          limited to space robotics, space mission design, spacecraft technology
          and space entrepreneurship. Our other chapter activities include
          Yuri's Night, movie nights and lightning talks by SEDS members. <br />
          <br />
          To facilitate the aforementioned activities, NUS SEDS has the
          following Departments: <br />
          <br />
          <ul>
            <li>Finance Department</li>
            <ul>
              <li>Internal Finance Team</li>
              <li>Sponsorship Team</li>
            </ul>
            <li>Outreach Department</li>
            <ul>
              <li>Creative Team</li>
              <li>Web Development Team</li>
              <li>Audio Visual Team</li>
              <li>Social Media Team</li>
              <li>Events Team</li>
              <li>Recruitment Team</li>
              <li>Partnerships Team</li>
            </ul>
          </ul>
        </DescriptionFont>
        <SectionHeaderWrapper headerText="Membership" />
        <DescriptionFont>
          Members are required to participate in at least one project team and
          at least one management team. Membership lasts for the entire academic
          year. <br />
          <br />
          As a member you will be able to: <br />
          <br />
          <ul>
            <li>participate in projects and develop technical skills</li>
            <li>
              garner support for your own initiatives/projects and develop
              leadership skills
            </li>
            <li>
              attend overseas space-related competitions/conferences/research
              attachments
            </li>
            <li>
              attend on campus recruitment/ access to our job portal for
              internships and employment in the space industry (both local and
              overseas)
            </li>
            <li>
              access software and hardware resources exclusive to NUS SEDS
            </li>
            <li>access chapter-exclusive events and activities</li>
          </ul>
          <br />
          <br />
          We also strongly encourage our members to suggest and pioneer new
          initiatives that can help our club or community in any way.
          <br />
          <br />
          <br />
        </DescriptionFont>
        <ButtonWrapper
          buttonText="Join Now."
          onClick={() => window.open(formUrl)}
        />
      </NavbarPaddingContainer>
    </Layout>
  )
}

const JoinUsHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const JoinUsDescription = styled(DescriptionFont)``

const StrucureImg = styled(Img)`
  @media only screen and (max-width: 600px) {
    width: 130%;
    margin-left: -15%;
  }
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
`

const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 5rem;
  padding: 0.75rem 2rem;
`

export default JoinUs
