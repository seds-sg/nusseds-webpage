import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { graphql } from "gatsby"
import { StyledAvatar, ImageWrapper, StyledThumbnailImage } from "../components/leadership"

const RoverPage = ({ data }) => (
	<Layout>
		<NavbarPaddingContainer>
			<SEO title="New Opportunity" />
			<RoverPageHeaderWrapper>New Opportunity</RoverPageHeaderWrapper>
			<RoverPageDescription>
				Our flagship engineering project.
			</RoverPageDescription>
			<SectionHeaderWrapper headerText="DESCRIPTION" />
			<DescriptionFont>
				New Opportunity is the flagship engineering project of NUS SEDS. The
				aim is to design and build a Remotely Operated Vehicle (ROV) that can
				accomplish a variety of tasks with some autonomous capabilities. Other
				than for space exploration rover technology also has a use case in
				warehouse management, disaster search and rescue and explosive
				ordnance disposal.
				<br />
				<br />
				The Rover Team plans to participate in the University Rover Challenge
				(URC) from November 2019 (registration) to May 2020 (competition).
				This is an annual competition held by The Mars Society at the Mars
				Desert Research Station in Utah, USA, where teams and their rovers are
				tasked with the completion of 4 mission requirements:
				<br />
				<br />
				<ul>
					<li>
						A Science Mission to investigate a site for the presence of
						current or past life.
					</li>
					<li>
						A Delivery Mission to deliver a variety of objects to mock
						astronauts in the field across rugged terrain.
					</li>
					<li>
						An Equipment Servicing Mission to perform dextrous operations on a
						mock lander using a robotic arm.
					</li>
					<li>
						An Autonomous Traversal Mission to autonomously travel to a site
						and locate a marker.
					</li>
				</ul>
				For more details, click{" "}
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="http://urc.marssociety.org/"
				>
					here
				</a>
				.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="ACCOMPLISHMENTS" />
			<DescriptionFont>
				To date, the team has built a fully functioning prototype, New Spirit,
				to gain experience in rover construction. It took a small, dedicated
				workforce just 2 months and S$500 to complete, and incorporates many
				industry-standard features for planetary exploration vehicles. The
				rover features a rocker-bogie suspension akin to that on the Curiosity
				rover, as well as independently powered wheels employing
				Ackermann-steering. It also incorporates many exciting
				independently-designed features such as a mast camera,
				Bluetooth-controlled robot arm, and Wi-Fi-enabled remote-control
				through a custom-made app.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="FUTURE PLANS" />
			<DescriptionFont>
				The team has shortlisted over 30 highly talented individuals to work
				on the challenge rover for URC, called New Opportunity. Development of
				the vehicle is in full swing with strong collaboration between the
				subsystem teams. At this point, most subsystems have passed the
				evaluation stage, and designs are being finalized. The actual
				construction, testing, and implementation of the rover is contingent
				on further funding.
				<br />
				<br />
				Team members come from a diverse set of majors and years of study with
				a common passion for space exploration. The team promotes a culture of
				collaborative learning through various sessions and workshops. For
				instance, the team conducted a boot camp covering Robot Operating
				System, CAD modelling, fabricating techniques and the use of
				micro-controllers in electrical systems, all key elements in designing
				and building New Spirit and future rovers. This was done to bring new
				team members up to speed with regard to their technical skills, as
				well as to ensure project continuity.
			</DescriptionFont>
			<SectionHeaderWrapper headerText="TEAM LEADS" />
			<ImageWrapper>
				<StyledAvatar
					name="Rachiket Arya"
					description="Project Manager"
					data={data}
					imageName="rachiket_arya"
				/>
				<StyledAvatar
					name="Harsh Goel"
					description="Project Team Lead"
					data={data}
					imageName="harsh_goel"
				/>
				<StyledAvatar
					name="Asyraf Abbas"
					description="Mechanical Team Lead"
					data={data}
					imageName="asyraf_abbas"
				/>
				<StyledAvatar
					name="Jethro Kuan"
					description="Software Team Lead"
					data={data}
					imageName="jethro_kuan"
				/>
				<StyledAvatar
					name="Samuel Chua"
					description="Science Team Lead"
					data={data}
					imageName="samuel_chua"
				/>
				<StyledAvatar
					name="Gollapudi Venkata Sambhavi Deepthi"
					description="Electrical Team Lead"
					data={data}
					imageName="sambhavi_deepthi"
				/>
			</ImageWrapper>
			<SectionHeaderWrapper headerText="ADVISORS" />
			<ImageWrapper>
				<StyledAvatar
					name="Prof. Loh Ai Poh"
					description="Advisor"
					data={data}
					imageName="female_kerbal"
				/>
				<StyledAvatar
					name="Prof. Marcelo Ang"
					description="Advisor"
					data={data}
					imageName="male_kerbal"
				/>
				<StyledAvatar
					name="Mr. Lim Hong Wee"
					description="Technical Advisor"
					data={data}
					imageName="male_kerbal"
				/>
				<StyledAvatar
					name="Dr. Rajesh Panicker"
					description="Technical Advisor"
					data={data}
					imageName="male_kerbal"
				/>
			</ImageWrapper>
			<SectionHeaderWrapper headerText="CONTACT" />
			<DescriptionFont>
				For any enquiries, please contact Rachiket Arya @ +65 9611 9842 or{" "}
				<a href="mailto:rachiket@nusseds.space">rachiket@nusseds.space</a>
			</DescriptionFont>
			<SectionHeaderWrapper headerText="MEDIA" />
			<ImageWrapper>
				<StyledThumbnailImage fluid={data.image1.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image2.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image3.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image4.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image5.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image6.childImageSharp.fluid} />
				<StyledThumbnailImage fluid={data.image7.childImageSharp.fluid} />
			</ImageWrapper>
		</NavbarPaddingContainer>
	</Layout>
)

const RoverPageHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const RoverPageDescription = styled(DescriptionFont)`
  padding-bottom: 2rem;
`

export default RoverPage

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "new-oppy/image1.jpg" }) {
      ...thumbnail
    }
    image2: file(relativePath: { eq: "new-oppy/image2.png" }) {
      ...thumbnail
    }
    image3: file(relativePath: { eq: "new-oppy/image3.png" }) {
      ...thumbnail
    }
    image4: file(relativePath: { eq: "new-oppy/image4.png" }) {
      ...thumbnail
    }
    image5: file(relativePath: { eq: "new-oppy/image5.jpg" }) {
      ...thumbnail
    }
    image6: file(relativePath: { eq: "new-oppy/image6.png" }) {
      ...thumbnail
    }
    image7: file(relativePath: { eq: "new-oppy/image7.png" }) {
      ...thumbnail
    }
    jethro_kuan: file(relativePath: { eq: "new-oppy/jethro-kuan.png" }) {
      ...squareImage
    }
    asyraf_abbas: file(relativePath: { eq: "new-oppy/asyraf-abbas.jpg" }) {
      ...squareImage
    }
    harsh_goel: file(relativePath: { eq: "new-oppy/harsh-goel.jpg" }) {
      ...squareImage
    }
    rachiket_arya: file(relativePath: { eq: "new-oppy/rachiket-arya.png" }) {
      ...squareImage
    }
    sambhavi_deepthi: file(
      relativePath: { eq: "new-oppy/sambhavi-deepthi.jpg" }
    ) {
      ...squareImage
    }
    samuel_chua: file(relativePath: { eq: "new-oppy/samuel-chua.jpg" }) {
      ...squareImage
		}
		male_kerbal: file(relativePath: { eq: "male_kerbal.jpeg" }) {
			...squareImage
		}
		female_kerbal: file(relativePath: { eq: "female_kerbal.jpeg" }) {
			...squareImage
		}
  }
`
