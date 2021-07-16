import React from "react"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { LandingTitleFont, DescriptionFont } from "../components/textStyles"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledButton, {IconButton} from "../components/button"
import SectionHeaderWrapper from "../components/sectionHeader"
import { ImageWrapper, StyledAvatar, StyledImageWithTitle, StyledThumbnailImage } from "../components/leadership"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaTelegramPlane, FaYoutube, FaInstagram} from 'react-icons/fa';
import Faq from "react-faq-component";

const HackathonPage = () => {

	const data = useStaticQuery(
		graphql`
			query {
				hack: file(relativePath: { eq: "spaceouthack/banner.PNG" }) {
					childImageSharp {
						fluid(quality: 100, maxWidth: 1440) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
				google_home: file(relativePath: { eq: "spaceouthack/googleHome.jpg" }) {
					...squareImage
				}
				gaming_mouse: file(relativePath: { eq: "spaceouthack/gamingMouse.jpg" }) {
					...squareImage
				}
				vouchers: file(relativePath: { eq: "spaceouthack/vouchers.jpg" }) {
					...squareImage
				}
			}
		`
	)

	return (
		<Layout>
				<StyledBackgroundImage
					Tag="section"
					fluid={data.hack.childImageSharp.fluid}
					style={{
						position: "relative"
					}}
				>
					<StyledNavBarPadding>
						<SEO title="Space Out Hackathon" />
						<div>
							<ProjectTitleWrapper>
								{"Space Out Hackathon"}
							</ProjectTitleWrapper>
							<ProjectDecriptionWrapper>
								{"Are you creative enough to stand out? Then this space-themed hackathon is for you! Click on the button below to register."}
								</ProjectDecriptionWrapper>
								<ProjectDateWrapper>
								{"Event Date: July 28, 2021 to Aug 1, 2021"}
							</ProjectDateWrapper>
							<ProjectDetailsButton
								onClick={() => window.open("https://nus.campuslabs.com/engage/submitter/form/start/491498")}
								buttonText="Register Now"
							/>
						</div>
					</StyledNavBarPadding>
				</StyledBackgroundImage>
				<StyledNavBarPaddingContent>
					<div>
						<SectionHeaderWrapper headerText="ABOUT" />
						<DescriptionFont>For the first time NUS Rover Team is organising Space Out, a space-themed hackathon filled with workshops, challenges, fun, and learning!! Join us from 28th July to 1st August!</DescriptionFont>
					</div>
					<div>
						<SectionHeaderWrapper headerText="PRIZES" />
						<DescriptionFont>Amazing prizes to be won!</DescriptionFont>
						<DescriptionFont>Details Coming Soon!</DescriptionFont>
						{/* <ImageWrapper>
							<StyledAvatar name="Google Home" description="Top 3 For Main Hack" data={data} imageName="google_home"/>
							<StyledAvatar name="Gaming Mouse" description="Weirdest interpretation for Broad Hack" data={data} imageName="gaming_mouse"/>
							<StyledAvatar name="Vouchers" description="Various categories" data={data} imageName="vouchers"/>
						</ImageWrapper> */}
					</div>
					<div>
						<SectionHeaderWrapper headerText="EVENT FLOW" />
						<VerticalTimeline>

  						<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
								contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
								date="28th Jul, 12pm - 12.45pm"
								iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							>
						<h3 className="vertical-timeline-element-title">Opening ceremony</h3>
						<h4 className="vertical-timeline-element-subtitle">By the Rover team</h4>
						<p>
							This marks the beginning of our event.
						</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
							date="28th Jul, 2pm - 4pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
						<h3 className="vertical-timeline-element-title">Workshop 1</h3>
						<h4 className="vertical-timeline-element-subtitle">Introduction to ROS</h4>
						<p>
							
						</p>
  					</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
							date="28th Jul, 6pm - 8pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 2</h3>
							<h4 className="vertical-timeline-element-subtitle">CAD (Beginners) Assembly and Simulation</h4>
							<p>

							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
							date="28th Jul, 9pm - 10pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Games Night</h3>
							<h4 className="vertical-timeline-element-subtitle">Yaay!</h4>
							<p>
								Don't miss this opportunity to meet like minded people from other teams, interact and have fun!
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(170, 171, 174)' }}
							date="29th Jul, 10am - 12.30pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 3</h3>
							<h4 className="vertical-timeline-element-subtitle">CAD (Intermediate) Modelling and Simulation</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(170, 171, 174)' }}
							date="29th Jul, 2pm - 3pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Talk</h3>
							<h4 className="vertical-timeline-element-subtitle">Speakers: Mr. Torsten Kriening</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid rgb(170, 171, 174)' }}
							date="29th Jul, 4pm - 6pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 4</h3>
							<h4 className="vertical-timeline-element-subtitle">Energy Systems and Electronic Skills</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(170, 171, 174)' }}
							date="29th Jul, 7pm - 11pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Mini Hackathon</h3>
							<h4 className="vertical-timeline-element-subtitle">Judges: </h4>
							<p>
								A broad themed hackathon.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 10am - 12pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 5</h3>
							<h4 className="vertical-timeline-element-subtitle">PCB Design EE CAD</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 4pm - 6pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 6</h3>
							<h4 className="vertical-timeline-element-subtitle">Introduction to OpenCV/CV Seminar</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 9pm - 10pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 7</h3>
							<h4 className="vertical-timeline-element-subtitle">Introduction to Rover Systems</h4>
							<p>
							
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(45, 44, 80)' }}
							date="31st Jul"
							iconStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon</h3>
							<h4 className="vertical-timeline-element-subtitle">Day 1</h4>
							<p>
								Rover based challenges.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(65, 64, 100)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(65, 64, 100)' }}
							date="1st Aug"
							iconStyle={{ background: 'rgb(65, 64, 100)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon</h3>
							<h4 className="vertical-timeline-element-subtitle">Day 2</h4>
							<p>
								Rover based challenges.
							</p>
						</VerticalTimelineElement>

					</VerticalTimeline>
					</div>
					<div>
						<SectionHeaderWrapper headerText="FAQ" />
						<DescriptionFontFaq><Faq
							data={faqData}
							styles={faqStyles}
							config={faqConfig}
            /></DescriptionFontFaq>
					</div>
					<div>
						<SectionHeaderWrapper headerText="SPONSORS" />
						<DescriptionFont>Coming Soon!</DescriptionFont>
					</div>
					<div>
						<SectionHeaderWrapper headerText="CONTACT US" />
						<DescriptionFont> Contact us via <a href="mailto:rovertam.nus@gmail.com">email</a> or follow us on:</DescriptionFont>
						<div style={{paddingTop: 35}}>
						<StyledFollowUsContent/>
						</div>
					</div>
				</StyledNavBarPaddingContent>
		</Layout>
	)
}

const StyledNavBarPadding = styled(NavbarPaddingContainer)`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const StyledNavBarPaddingContent = styled(NavbarPaddingContainer)`
  display: flex;
  flex-direction: column;
  height: 900vh;
	padding-top : 3rem;
`

const ProjectDetailsButton = styled(StyledButton)`
  background-color: black;
  border: 0;
  margin-top: 3rem;
  padding: 0.75rem 2.5rem;
	border-radius: 12px;
`

const ProjectTitleWrapper = styled(LandingTitleFont)`
  padding: 0.75rem 2.5rem;
	background-color: #000000;
`

const ProjectDecriptionWrapper = styled(DescriptionFont)`
  padding: 0.75rem 2.5rem;  
  font-size: 1.5rem;
	background-color: #000000;
`

const ProjectDateWrapper = styled(DescriptionFont)`
  padding: 0.75rem 2.5rem;  
  font-size: 1.125rem;
	background-color: #000000;
`

const StyledBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  height: 100vh - 66px;
  margin-top: 66px;
`

const faqData = {
	rows: [
		{
			title: "Do I need any prior knowledge/experience?",
			content: `No! We will provide participants with the relevant resources and workshops. All are welcome :)`,
		},
		{
			title: "Do I need to sign up with a team?",
			content:
				`You may sign up with a team or individually. Each team must consist of 2 to 4 people. However, if you sign up 
				individually, we will match you with 1-3 other participants.`,
		},
		{
			title: "What resources will I need for the workshop?",
			content: `Just your laptop (and a mouse)! We’ll send you links to any software installations needed for specific 
			workshops closer to the date. `,
		},
		{
			title: "Do all team-members have to be from the same faculty/year?",
			content: `No. In fact, we encourage teams with members from different disciplines, years and levels of study to 
			collaborate and sign up together!`,
		},
		{
			title: "What is the difference between the two hackathons? ",
			content: `The first hackathon is a ‘broad-theme’ hack that gives everyone the opportunity to innovate, without the need for much technical expertise.
			The second hackathon is centered around Rover Team’s work: you will be designing specific components of subsystems 
			(eg: mobility system, science payload, etc) which will help the rover overcome various challenges it is likely to face on Mars.`,
		},
		{
			title: "Will both CAD workshops cover the same materials?",
			content: `No, the 1st workshop is an introduction with basic modelling/design. The 2nd one is about simulations in CAD using concepts from the 1st workshop.`,
		},
		{
			title: "Do I have to attend both the hackathons?",
			content: `Yes, you are highly encouraged to do so!`,
		},
		{
			title: "Do I need to attend all the workshops?",
			content: `You can choose which workshops you would like to attend. However, we do encourage all participants to attend as many workshops as possible to 
			gain a holistic understanding of how multidisciplinary teams work. It is also a great opportunity to pick up some new skills while being guided by experienced instructors!`,
		},
		{
			title: "Would a Y3 going on sem long internship + SEP be eligible to join the team?",
			content: `Yes, you would be able to join! Sem 1 workload is anywhere from 5-7hrs a week. During the manufacturing stage (nearing sem 2) the workload may increase 
			to 8-10hrs depending on your sub-team.For team members on SEP, our sub-team leads will assign tasks that can be done remotely.`,
		},
	],
};

const DescriptionFontFaq = styled(DescriptionFont)`
paddingLeft: 15;
`

const faqStyles = {
	bgColor: '#141e22',
	titleTextColor: "white",
	rowTitleColor: "white",
	rowContentColor: 'orange',
	arrowColor: "white",
};

const faqConfig = {
	animate: true,
	arrowIcon: "v",
	tabFocus: true
};

const FollowUsContent = ({ className }) => (
	<div className={className}>
		<IconButton onClick={() => window.open("https://t.me/joinchat/Ht1uPdAmWkthNTc9")}><FaTelegramPlane /></IconButton>
		<IconButton onClick={() => window.open("https://www.youtube.com/channel/UCV7Pb1ejIwEaOgtlwWnOvZA")}><FaYoutube /></IconButton>
		<IconButton onClick={() => window.open("https://www.instagram.com/nusroverteam/")}><FaInstagram /></IconButton>
		</div>
)

const StyledFollowUsContent = styled(FollowUsContent)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`



const BgImgContainer = styled.div`
	opacity: ${(props) => (props.selected ? 1 : 0)};
	z-index: ${(props) => (props.selected ? 2 : 1)};
	transition: opacity 2s ease-in;
	position: fixed;
`

export default HackathonPage
