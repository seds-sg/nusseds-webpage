import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { ButtonFont } from "../components/textStyles"

const LeadershipContent = ({ className }) => {
  const images = useStaticQuery(
    graphql`
      query {
        anisha: file(relativePath: { eq: "Anisha.jpg" }) {
          ...squareImage
        }
        benedict: file(relativePath: { eq: "Benedict.jpg" }) {
          ...squareImage
        }
        dean: file(relativePath: { eq: "Dean_Su.png" }) {
          ...squareImage
        }
        ian: file(relativePath: { eq: "Ian_Wu.jpg" }) {
          ...squareImage
        }
        jun_jie: file(relativePath: { eq: "Jun_Jie.png" }) {
          ...squareImage
        }
        jun_kai: file(relativePath: { eq: "Jun_Kai.jpg" }) {
          ...squareImage
        }
        rachiket: file(relativePath: { eq: "Rachiket_Arya.jpeg" }) {
          ...squareImage
        }
        ashwin: file(relativePath: { eq: "male_kerbal.jpeg" }) {
          ...squareImage
        }
        ramu: file(relativePath: { eq: "Ramu_Vairavan.jpg" }) {
          ...squareImage
        }
        anushka: file(relativePath: { eq: "female_kerbal.jpeg" }) {
          ...squareImage
        }
        muruges: file(relativePath: { eq: "Muruges.jpg" }) {
          ...squareImage
        }
      }
    `
  )
  return (
    <div className={className}>
      <StyledAvatar
        name="Ramu Vairavan"
        description="President"
        data={images}
        imageName="ramu"
      />
      <StyledAvatar
        name="Yeoh Jun Kai"
        description="Vice President"
        data={images}
        imageName="jun_kai"
      />
      <StyledAvatar
        name="Ian Wu Ling En"
        description="Outreach Team Lead"
        data={images}
        imageName="ian"
      />
      <StyledAvatar
        name="Anisha Nicole Joseph"
        description="Finance Lead"
        data={images}
        imageName="anisha"
      />
      <StyledAvatar
        name="Ashwin Kumaar"
        description="Creative Lead"
        data={images}
        imageName="ashwin"
      />
      <StyledAvatar
        name="Dean Su Di Yang"
        description="Outreach (external) Lead"
        data={images}
        imageName="dean"
      />
      <StyledAvatar
        name="Yeoh Jun Jie"
        description="Events Manager"
        data={images}
        imageName="jun_jie"
      />
      <StyledAvatar
        name="Benedict Goh"
        description="Secretary"
        data={images}
        imageName="benedict"
      />
      <StyledAvatar
        name="Anushka Gaikwad"
        description="Project Manager (SubT DARPA)"
        data={images}
        imageName="anushka"
      />
      <StyledAvatar
        name="Rachiket Arya"
        description="Project Manager (New Opportunity)"
        data={images}
        imageName="rachiket"
      />
      <StyledAvatar
        name="K Muruges"
        description="Webmaster"
        data={images}
        imageName="muruges"
      />
    </div>
  )
}

const StyledLeaderShipContent = styled(LeadershipContent)`
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

const Avatar = styled(Img)`
  width: 160px;
  height: 160px;
  border-radius: 100px;
`

const AvatarName = styled(ButtonFont)`
  font-size: 1rem;
  font-weight: 900;
  padding-top: 1rem;
  max-width: 200px;
  text-align: center;
`

const AvatarDescription = styled(AvatarName)`
  font-weight: 400;
  font-size: 0.85rem;
`

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

export default StyledLeaderShipContent
