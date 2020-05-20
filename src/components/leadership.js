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
			fluid(maxWidth: 400, quality: 100) {
				...GatsbyImageSharpFluid
			}
		}
		extension
		publicURL
	}
`

export const StyledThumbnailImage = styled(Img)`
  width: 400px;
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

const ImageContainer = styled.div`
	min-height: ${(props) => props.minHeight}; /* THIS IS A HACK */
	display: flex;
	flex-direction: column;
	justify-content: center;
`

const ImageWithTitle = ({ className, description, data, imageName, onClick, minHeight }) => (
	<div className={className} onClick={onClick} onKeyPress={onClick} role="button" tabIndex={0}>
		<ImageContainer minHeight={minHeight ? minHeight : "120px"}>
			{data[imageName].childImageSharp === null && data[imageName].extension === "svg" ? (
				<img src={data[imageName].publicURL} alt={imageName} />
			) : (
				<Img fluid={data[imageName].childImageSharp.fluid} />
			)}
		</ImageContainer>
		{(description) ? <AvatarDescription>{description}</AvatarDescription> : null}
	</div>
)

export const StyledImageWithTitle = styled(ImageWithTitle)`
  width: ${(props) => (props.width) ? `${props.width}px` : '400px'};
  height: auto;
  max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
  margin: 1rem;
  :hover {
    cursor: pointer;
  }
`

const AvatarWithTitle = ({ className, name, description, data, imageName, contactLink }) => (
	<div className={className}>
		<Avatar fixed={data[imageName].childImageSharp.fixed} />
		<AvatarName>{name.toUpperCase()}</AvatarName>
		{description && <AvatarDescription>{description}</AvatarDescription>}
		{contactLink && <AvatarDescription><a href={contactLink}>LinkedIn</a></AvatarDescription>}
	</div>
)

export const StyledAvatar = styled(AvatarWithTitle)`
  padding: 1rem 2rem;
`
