import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ButtonFont } from "../components/textStyles"

export const ImageWrapper = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 180, height: 180, quality: 100) {
        ...GatsbyImageSharpFixed_withWebp
      }
    }
  }
`

export const thumbnail = graphql`
  fragment thumbnail on File {
    childImageSharp {
      fluid(maxWidth: 300, quality: 100) {
        ...GatsbyImageSharpFluid
      }
    }
    extension
    publicURL
  }
`

export const StyledThumbnailImage = styled(Img)`
  width: 300px;
  height: auto;
  max-width: 100%;
  margin: 1rem;
`

const Avatar = styled(Img)`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`

const AvatarName = styled(ButtonFont)`
  font-size: 1rem;
  font-weight: 900;
  padding-top: 1rem;
  margin: auto;
  max-width: 200px;
  text-align: center;
  
`

const AvatarDescription = styled(AvatarName)`
  font-weight: 400;
  margin: auto;
  font-size: 0.85rem;
`

const PartnerLogoContainer = styled.div`
  min-height: 120px; /* THIS IS A HACK */
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PartnerWithTitle = ({ className, description, data, imageName, onClick }) => (
  <div className={className} onClick={onClick}>
    <PartnerLogoContainer>
      {(data[imageName].childImageSharp === null && data[imageName].extension === 'svg')
        ? <img src={data[imageName].publicURL} alt={imageName} />
        : <Img fluid={data[imageName].childImageSharp.fluid} />}
    </PartnerLogoContainer>
    <AvatarDescription>{description}</AvatarDescription>
  </div>
)

export const StyledPartnerWithTitle = styled(PartnerWithTitle)`
  width: 300px;
  height: auto;
  max-width: 100%;
  margin: 1rem;
  :hover {
    cursor: pointer;
  }
`;

const AvatarWithTitle = ({ className, name, description, data, imageName }) => (
  <div className={className}>
    <Avatar fixed={data[imageName].childImageSharp.fixed} />
    <AvatarName>{name.toUpperCase()}</AvatarName>
    <AvatarDescription>{description}</AvatarDescription>
  </div>
)

export const StyledAvatar = styled(AvatarWithTitle)`
  padding: 1rem;
`