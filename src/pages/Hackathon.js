import React, {useState} from "react"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import { LandingTitleFont, DescriptionFont } from "../components/textStyles"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import StyledButton, {IconButton} from "../components/button"
import SectionHeaderWrapper from "../components/sectionHeader"
import { ImageWrapper, StyledAvatar, StyledAvatarSubmit1, StyledAvatarSubmit2, AvatarName, AvatarDescription } from "../components/leadership"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaTelegramPlane, FaYoutube, FaInstagram} from 'react-icons/fa';
import Faq from "react-faq-component";
import ReadMoreReact from 'read-more-react';
import "./Hackathon.css"
import colips from "../images/spaceouthack/Colips.jpg"
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../images/spaceouthack/logo.jpg"
import img2 from "../images/spaceouthack/astar1.png"
import img3 from "../images/spaceouthack/games1.jpg"
import img4 from "../images/spaceouthack/games2.png"
import img5 from "../images/spaceouthack/games3.png"
import img6 from "../images/spaceouthack/cad1.png"
import img7 from "../images/spaceouthack/cad2.jpg"
import img8 from "../images/spaceouthack/cad3.jpg"
import img9 from "../images/spaceouthack/cadi1.png"
import img10 from "../images/spaceouthack/cadi2.png"
import img11 from "../images/spaceouthack/pcb1.jpg"
import img12 from "../images/spaceouthack/talk1.png"
import img13 from "../images/spaceouthack/talk2.jpg"
import img14 from "../images/spaceouthack/talk3.png"
import img15 from "../images/spaceouthack/talk4.png"
import img16 from "../images/spaceouthack/rover1.png"
import img17 from "../images/spaceouthack/rover2.png"
import img18 from "../images/spaceouthack/rover3.png"
import img19 from "../images/spaceouthack/close1.png"
import img20 from "../images/spaceouthack/close2.png"
import img21 from "../images/spaceouthack/close3.png"
import img22 from "../images/spaceouthack/close4.png"
import img23 from "../images/spaceouthack/close5.jpg"

const HackathonPage = () => {


	const ReadMore = ({ children }) => {
		const text = children;
		const [isReadMore, setIsReadMore] = useState(true);
		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};
		return (
			<p>
				{isReadMore ? text.slice(0, 150) : text}
				<span onClick={toggleReadMore} className="read-or-hide">
				{isReadMore ? "...read more" : " show less"}
				</span>
			</p>
		);
	};
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
				grabvouchers: file(relativePath: { eq: "spaceouthack/grabVoucher.png" }) {
					...squareImage
				}
				capitavouchers: file(relativePath: { eq: "spaceouthack/capitaVouchers.jpg" }) {
					...squareImage
				}
				Justyna: file(relativePath: { eq: "spaceouthack/Justyna.jpg" }) {
					...squareImage
				}
				Cindy: file(relativePath: { eq: "spaceouthack/Cindy.jpg" }) {
					...squareImage
				}
				Gokul: file(relativePath: { eq: "spaceouthack/Gokul.jpg" }) {
					...squareImage
				}
				Eugene: file(relativePath: { eq: "spaceouthack/Eugene.PNG" }) {
					...squareImage
				}
				Hong: file(relativePath: { eq: "spaceouthack/Hong.PNG" }) {
					...squareImage
				}
				Xinyuan: file(relativePath: { eq: "spaceouthack/Xinyuan.jpg" }) {
					...squareImage
				}
				Uma: file(relativePath: { eq: "spaceouthack/Uma.png" }) {
					...squareImage
				}
				Lingfei: file(relativePath: { eq: "spaceouthack/Lingfei.jpg" }) {
					...squareImage
				}
				eventhorizon: file(relativePath: { eq: "spaceouthack/winners/eventHorizon.png" }) {
					...squareImage
				}
				nova: file(relativePath: { eq: "spaceouthack/winners/nova.png" }) {
					...squareImage
				}
				kerbals: file(relativePath: { eq: "spaceouthack/winners/kerbals.png" }) {
					...squareImage
				}
				bumsi: file(relativePath: { eq: "spaceouthack/winners/bumsi.PNG" }) {
					...squareImage
				}
				musk: file(relativePath: { eq: "spaceouthack/winners/musk.jpeg" }) {
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
								onClick={()=>{}}
								buttonText="Register Now (For NUS Students)"
							/>
							<ProjectDetailsButton
								onClick={()=>{}}
								buttonText="Register Now (For NON-NUS Students)"
							/>
							<DescriptionFontClosed>Registrations have closed!</DescriptionFontClosed>
						</div>
					</StyledNavBarPadding>
				</StyledBackgroundImage>
				<StyledNavBarPaddingContent>
					<div>
						<SectionHeaderWrapper headerText="ABOUT" />
						<DescriptionFont>For the first time NUS Rover Team is organising Space Out, a space-themed hackathon filled with workshops, challenges, fun, and learning!! Join us from 28th July to 1st August!</DescriptionFont>
					</div>
					<div>
						<SectionHeaderWrapper headerText="PHOTO GALLERY" />
							<AliceCarousel autoPlay autoPlayInterval="3000" fadeOutAnimation={true} mouseTrackingEnabled={true}>
								<img src={img1} className="sliderimg" /><img src={img2} className="sliderimg" /><img src={img3} className="sliderimg" /><img src={img4} className="sliderimg" />
								<img src={img5} className="sliderimg" /><img src={img6} className="sliderimg" /><img src={img7} className="sliderimg" /><img src={img8} className="sliderimg" />
								<img src={img9} className="sliderimg" /><img src={img10} className="sliderimg" /><img src={img11} className="sliderimg" /><img src={img12} className="sliderimg" />
								<img src={img13} className="sliderimg" /><img src={img14} className="sliderimg" /><img src={img15} className="sliderimg" /><img src={img16} className="sliderimg" />
								<img src={img17} className="sliderimg" /><img src={img18} className="sliderimg" /><img src={img19} className="sliderimg" /><img src={img20} className="sliderimg" />
								<img src={img21} className="sliderimg" /><img src={img22} className="sliderimg" /><img src={img23} className="sliderimg" />

							</AliceCarousel>
					</div>
					<div>
						<SectionHeaderWrapper headerText="PRIZES" />
						{/* <DescriptionFont>Amazing prizes to be won!</DescriptionFont> */}
						<ImageWrapper>
							<StyledAvatar name="Grab Vouchers" description="Prizes for Mini Hackathon Winners (1st, 2nd and 3rd positions)" data={data} imageName="grabvouchers"/>
							<StyledAvatar name="CapitaMall Vouchers" description="Prizes for Rover Hackathon Winners (1st, 2nd and 3rd positions)" data={data} imageName="capitavouchers"/>
						</ImageWrapper>
					</div>
					<div>
						<SectionHeaderWrapper headerText="Space Out Hackathon 2021 Winners" />
						<DescriptionFont>Mini Hackathon</DescriptionFont>
						<ImageWrapper>
							<StyledAvatarSubmit1 name="Kerbals" description="1st Position" contactLink="/spaceouthack/minihack/Kerbals.pdf" data={data} imageName="kerbals"/>
							<StyledAvatarSubmit1 name="Nova" description="2nd Position" data={data} contactLink="/spaceouthack/minihack/Nova.pdf" imageName="nova"/>
							<StyledAvatarSubmit1 name="Event Horizon" description="3rd Position" data={data} contactLink="/spaceouthack/minihack/Event Horizon.pdf" imageName="eventhorizon"/>
						</ImageWrapper>
						<DescriptionFont>Rover Hackathon</DescriptionFont>
						<ImageWrapper>
							<StyledAvatarSubmit2 name="Kerbals" description="1st Position" contactLink="/spaceouthack/mainhack/Kerbals Autonomous Navigation.pdf" contactLink2="/spaceouthack/mainhack/Kerbals End Effector Design.pdf" data={data} imageName="kerbals"/>
							<StyledAvatarSubmit1 name="BumsiRovers" description="2nd Position" data={data} contactLink="/spaceouthack/mainhack/BumsiRovers.pdf" imageName="bumsi"/>
							<StyledAvatarSubmit1 name="Musk's Children" description="3rd Position" data={data} contactLink="/spaceouthack/mainhack/Musk's Children.pdf" imageName="musk"/>
						</ImageWrapper>
					</div>
					<div>
						<SectionHeaderWrapper headerText="SPEAKERS" />
						<DescriptionFont></DescriptionFont>
						<ImageWrapper>
							<StyledAvatar name="Gokul M. C." description="Ex Rocket Scientist, Cloud engineer, Software developer" data={data} imageName="Gokul"/>
							<StyledAvatar name="Ramu Uma" description="Engineer at A*STAR" data={data} imageName="Uma"/>
							<StyledAvatar name="Ren Lingfei" description="Engineer at A*STAR" data={data} imageName="Lingfei"/>
						</ImageWrapper>
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
							contentArrowStyle={{ borderRight: '7px solid rgb(26, 23, 68)' }}
							date="28th Jul, 1pm - 2.30pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 1</h3>
							<h4 className="vertical-timeline-element-subtitle">Energy Systems and Electronic Skills</h4>
							<p>
								<b>Conducted by: Gollapudi Venkata Sambahvi Deepthi, Research Engineer at School of Design and Environment</b>
								<br></br><br></br>
								What do microcontrollers, sensors, wheels and cameras have in common? They are all powered by a central battery system!
								With this workshop you can learn the fundamentals of setting up robust electrical systems and making judicious decisions 
								that (literally) power systems like Mars Rovers.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
							date="28th Jul, 3pm - 4pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
						<h3 className="vertical-timeline-element-title">Workshop 2/Talk</h3>
						<h4 className="vertical-timeline-element-subtitle">Introduction to ROS</h4>
						<p>
							<b>Conducted by: A*STAR</b>
							<br></br><br></br>
							It is an introductory session to ROS and ROS-Industrial with coverage on navigation-related content.
							Do not miss this opportunity to learn about some of the packages developed by the ARTC team at A*STAR!
						</p>
  					</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(26, 23, 68)' }}
							date="28th Jul, 6pm - 8pm"
							iconStyle={{ background: 'rgb(26, 23, 68)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 3</h3>
							<h4 className="vertical-timeline-element-subtitle">CAD (Beginners)</h4>
							<p>
								<b>Conducted by: Brian Teo, Instructor at NUS EDIC</b>
								<br></br><br></br>
								Some exciting things you can expect to learn include an introduction to Fusion 360 Interface, 
								extruding 3D objects from sketches, turning a sketch into a surface and using sketching, modelling, 
								and sculpting features.

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
							date="29th Jul, 10am - 12.00pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 4</h3>
							<h4 className="vertical-timeline-element-subtitle">CAD (Intermediate) Simulation and Manufacturing Design</h4>
							<p>
								<b>Conducted by: Brian Teo, Instructor at NUS EDIC</b>
								<br></br><br></br>
								Subject to number of sign-ups.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid rgb(170, 171, 174)' }}
							date="29th Jul, 2pm - 5pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 5</h3>
							<h4 className="vertical-timeline-element-subtitle">ARC MATLAB Deep Learning (Computer Vision)</h4>
							<p>
								<b>Conducted by: NUS Advanced Robotics Centre</b>
								<br></br><br></br>
								Artificial Intelligence techniques like deep learning are introducing automation to the products we build and the way we do business. These techniques can be used to solve complex problems related to images, signals, text, and controls. In this hands-on workshop, you will write code and use MATLAB Online to:
								•	Create deep learning models from scratch for image data.
								•	Explore pretrained models such as Alexnet, GoogleNet etc.
								•	Perform transfer learning for a classification problem.
								•	Automatically generate code for embedded targets (NVIDIA Jetson Nano 2GB or desktop PC with GPU)
								•	Integrating with other tools like Keras and Tensorflow

							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(170, 171, 174)' }}
							date="29th Jul, 6.30pm - 7pm"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Mini Hackathon Opening Ceremony</h3>
							<p>
								Remember to join in by 6.15pm. Details about the hackathon will be provided during this opening ceremony.
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
							<p>
								A broad themed hackathon.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(170, 171, 174)' }}
							date="29th Jul, 8.30pm - 9.30pm (TBC)"
							iconStyle={{ background: 'rgb(170, 171, 174)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Mini Hackathon Mentoring Session</h3>
							<p>
							Mentors will be present in a zoom call for teams to pop in and ask any questions that they may have.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 10am - 12pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 6</h3>
							<h4 className="vertical-timeline-element-subtitle">PCB Design (CAD)</h4>
							<p>
								<b>Conducted by: Eugene Ee (Advisor, NUS iDP)</b>
								<br></br><br></br>
								Learn the basics of using EAGLE CAD to design professional-grade Printed Circuit Boards and Schematics.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 6pm - 7pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Talk by</h3>
							<h4 className="vertical-timeline-element-subtitle">Gokul M. C.</h4>
							<p>
								View <a href="http://gokulmc.com">Gokul's Profile</a> to find out more about his works.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(225,123,16)' }}
							date="30th Jul, 8pm - 9pm"
							iconStyle={{ background: 'rgb(225,123,16)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Workshop 7</h3>
							<h4 className="vertical-timeline-element-subtitle">Introduction to Rover Systems</h4>
							<p>
								<b>Conducted by: The NUS Rover Team Representatives (Anoushka and Pranati)</b>
								<br></br><br></br>
								Fascinated by NASA’s Curiosity Mars Rover or want to join our team but don’t know how to put your technical skills to use? 
								Or want a head-start on what to expect in our rover-themed hackathon? This workshop will break-down a rover into more 
								manageable subsystems and introduce you to the exciting world of robotics and autonomous space exploratory vehicles.

							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(45, 44, 80)' }}
							date="31st Jul, 12am"
							iconStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon</h3>
							<h4 className="vertical-timeline-element-subtitle">Challlenge statements released</h4>
							<p>
								Let the hacks begin!
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(45, 44, 80)' }}
							date="31st Jul, Timing TBC"
							iconStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon Day 1</h3>
							<h4 className="vertical-timeline-element-subtitle">Mentoring Session 1</h4>
							<p>
								Teams can choose a slot to ask questions to the mentors.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(45, 44, 80)' }}
							date="1st Aug, Timing TBC"
							iconStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon Day 2</h3>
							<h4 className="vertical-timeline-element-subtitle">Mentoring Session 2</h4>
							<p>
								Teams can choose a slot to ask questions to the mentors.
							</p>
						</VerticalTimelineElement>

						<VerticalTimelineElement
							className="vertical-timeline-element--work"
							contentStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
							contentArrowStyle={{ borderRight: '7px solid  rgb(45, 44, 80)' }}
							date="1st Aug, 6pm"
							iconStyle={{ background: 'rgb(45, 44, 80)', color: '#fff' }}
						>
							<h3 className="vertical-timeline-element-title">Hackathon Submission and Closing Ceremony</h3>
							<h4 className="vertical-timeline-element-subtitle">Submission deadline: 6pm</h4>
							<p>
								Closing comments and debrief session.
							</p>
						</VerticalTimelineElement>

					</VerticalTimeline>
					</div>
					<div>
						<SectionHeaderWrapper headerText="FAQ" />
						<DescriptionFontFaq><Faq
							data={teamData}
							styles={faqStyles}
							config={faqConfig}
            /></DescriptionFontFaq>
						<br></br><br></br>
						<DescriptionFontFaq><Faq
							data={workshopData}
							styles={faqStyles}
							config={faqConfig}
            /></DescriptionFontFaq>
						<br></br><br></br>
						<DescriptionFontFaq><Faq
							data={hackData}
							styles={faqStyles}
							config={faqConfig}
            /></DescriptionFontFaq>
						<br></br><br></br>
						<DescriptionFontFaq><Faq
							data={othersData}
							styles={faqStyles}
							config={faqConfig}
            /></DescriptionFontFaq>
	       		<DescriptionFontAsterix>*only applicable to NUS students</DescriptionFontAsterix>
					</div>
					<div>
						<SectionHeaderWrapper headerText="SPONSORS" />
						<AvatarName>
							<img src={colips} width={200}/><br></br><br></br>Colips</AvatarName>
							<AvatarDescription>Chinese and Oriental Languages Information Processing Society</AvatarDescription>
							<br></br><br></br>
							<DescriptionFont>Find out about them<a href="http://www.colips.org/wp/about/"> here.</a><br></br></DescriptionFont>
							<DescriptionFontCenter>
								<ReadMore>The Chinese and Oriental Languages Information Processing Society (COLIPS) is a non-profit professional organisation that was established 
								in 1988 to advance the research of computer processing of Chinese and other Asian languages. It promotes the free exchange of information about information processing of 
								these languages in the best scientific and professional tradition. COLIPS organizes international conferences, short courses and seminars for members and the public.  
								Having its members from all over the world, COLIPS is based in Singapore.</ReadMore></DescriptionFontCenter>
					</div>
					<div>
						<SectionHeaderWrapper headerText="JUDGES" />
						<ImageWrapper>
							<StyledAvatar name="Justyna Pelc" description="Broad-themed and Rover-themed Hackathon" data={data} imageName="Justyna"/>
							<DescriptionFont>
							<ReadMore>Justyna is an engineer and leader of Innspace group. Innspace is an interdisciplinary team, realizing space-related projects such as space bases and vehicles. 
								They won the Student Aerospace Challenge, had 5th place at Mars Colony Prize, gained Gold Winner and Winner title for two of their projects at Future Mars Life Competition, 
								and more. Justyna is involved in the Polish space sector as a member of the Student Council at the Polish Space Agency and a member of the board of the Polish Astrobiology 
								Society. She is cooperating with other space associations as well. Justyna is a member of the Advisory Board of Mars Society South Asia and a judge during space and robotics 
								competitions organized by this organization and she is a National Contact Point for Poland in Space Generation Advisory Council. She was awarded the title of "Rising Star of 
								the Polish Space Industry" in the Constellations 2020, intended to honour companies and people for the development of the Polish space sector.
								</ReadMore>
							</DescriptionFont>
							<StyledAvatarWithSpace name="Ng Shao Chin, Cindy" description="Broad-themed Hackathon" data={data} imageName="Cindy"/>
							<DescriptionFont><ReadMore>Dr. Cindy Ng is a Senior Lecturer at the Department of Physics, National University of Singapore. She is the coordinator for the Primary Major in Physics with 
								Specialization in Astrophysics Programme and co-coordinator for the Minor in Astronomy Programme.</ReadMore></DescriptionFont>
								<StyledAvatarWithSpace name="Gokul M.C." description="Broad-themed and Rover-themed Hackathon" data={data} imageName="Gokul"/>
							<DescriptionFont><ReadMore>Gokul is an ex-ISRO scientist, he has designed and developed space-qualified electronics packages for electric propulsion in satellites.  He was involved in the 
								design, realisation and qualification of Power Processing and Control Unit (PPCU) for 300 and 75mn SPT thrusters which are used for orbit raising and NSSK respectively. He implemented 
								high power ZVS topology (6.5KW) based power module with an overall efficiency of 90%; for the first time across ISRO.  During his time at Indian Space Research Organisation (ISRO), he 
								has held various positions such as Secretary of Test Results Review Commitee for the PSLV launch vehicle, he was also the project manager for three Technology Development Projects amounting 
								to a total budget of USD 1.4M. Gokul has B. Tech and M.Tech degrees in Electrical Engineering from IIT Bombay, and is currently pursuing his PhD from the National University of Singapore in 
								Dept of Electrical and Computing Engineering. He is working on Cloud computing methodologies for Radar application, a project funded by DSO, Singapore. He is also the president of the 
								Graduate Students’ Society of NUS. </ReadMore></DescriptionFont>
							<StyledAvatarWithSpace name="Eugene EE" description="Rover-themed Hackathon" data={data} imageName="Eugene"/>
							<DescriptionFont><ReadMore>Eugene obtained his Masters of Science and Bachelor of Engineering Degrees from the NUS department of Electrical and Computer Engineering in 2018 and 2014 respectively. 
								He has also attained certification as an IPC Certified Interconnect Designer (IPC-CID) in the course of his career. As an instructor at the Engineering Design and Innovation Centre, he is teaching, 
								supervising and providing guidance to students working on the various multi-disciplinary projects involving electrical and electronics design.
								Prior to his current appointment, Eugene was a research engineer at the department of ECE and was the systems engineer in the team responsible for the successful assembly, integration, testing 
								and launch of “Galassia”, NUS First Nano-Satellite, which went on to win the IES Prestigious Engineering Achievement Awards 2016 (Engineering Project Category) and ASEAN Outstanding Engineering Achievement 
								Awards 2016.</ReadMore></DescriptionFont>
							<StyledAvatarWithSpace name="Lim Hong Wee" description="Rover-themed Hackathon" data={data} imageName="Hong"/>
							<DescriptionFont><ReadMore>Lim Hong Wee obtained his Master’s of Engineering in Mechanical Engineering from NUS in 2013. He also has a Graduate Certificate in the Management of Technology. He is currently 
								holding concurrent appointment in both Engineering Design Incubation Center (EDIC) and Institute of Engineering Leadership (IEL) as an instructor for engineering design and prototyping. His expertise is 
								in engineering design, including CAD design, simulation, analysis, design optimization and manufacturing. He has design and managed numerous race vehicles and teams for the Formula SAE competition and 
								a full electric roadster. His experience allows him to guide his students to think innovatively for a unique solution.</ReadMore></DescriptionFont>
								<StyledAvatarWithSpace name="Xinyuan Qian" description="Rover-themed Hackathon" data={data} imageName="Xinyuan"/>
							<DescriptionFont><ReadMore>Dr. Xinyuan Qian received the B.Eng. degree (with First Class Hons.) in Electronics and Electrical Engineering, the M.Sc. degree (with Distinction.) in Signal Processing and 
								Communications in 2014 and 2015 respectively, both from the University of Edinburgh, U.K., and the Ph.D. degree in Computer Science from Queen Mary University of London, U.K. in  2020. From 2017 to 2018, 
								she was a visiting student at Fondazione Bruno Kessler (FBK), Trento, Italy. Since February 2020,  she has been a Research Fellow of the HLT lab in the Department of Electrical and Computer Engineering, 
								National University of Singapore. Her research interests mainly include sound source localization, multimodal fusion and target tracking.</ReadMore></DescriptionFont>
						</ImageWrapper>
					</div>
					<div>
						<SectionHeaderWrapper headerText="CONTACT US" />
						<DescriptionFont> Contact us via <a href="mailto:roverteam.nus@gmail.com">email</a> or follow us on:</DescriptionFont>
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
  height: 100%;
`

const StyledNavBarPaddingContent = styled(NavbarPaddingContainer)`
  display: flex;
  flex-direction: column;
  height: 100%;
	padding-top : 3rem;
`

const ProjectDetailsButton = styled(StyledButton)`
  background-color: grey;
  border: 0;
  margin: 3.5rem;
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

const StyledAvatarWithSpace = styled(StyledAvatar)`
 margin-top: 20px;
`

const teamData = {
	title: "Teams", 
	rows: [
		{
			title: "Do I need to sign up with a team?",
			content:
				`NUS students may sign up with a team or individually. Each team must consist of 2 to 4 people. However, if you sign up 
				individually, we will match you with 1-3 other participants. Unfortunately, we currently do not have an idividual 
				sign-up option for non-NUS students.`,
		},
		{
			title: "Do all team-members have to be from the same faculty/year?",
			content: `No. In fact, we encourage teams with members from different disciplines, years and levels of study to 
			collaborate and sign up together!`,
		},
		{
			title: "When will individual participants be put in teams?*",
			content: "Teams will be assigned after registrations close.",
		},
		{
			title: "How will individual sign-ups be sorted?*",
			content: "The organisers will assign 3-4 people in a team with a certain randomising algorithm.",
		},
		{
			title: "Can there be cross-Uni teams? (NUS/non-NUS)",
			content: "No, all members of your team must be from the same institution/university.",
		},

	]
	}
	
const workshopData = {
	title: "Workshops and Talks", 	
	rows: [
		{
			title: "Do I need any prior knowledge/experience?",
			content: `No! We will provide participants with the relevant resources and workshops. All are welcome :)`,
		},
		{
			title: "What resources will I need for the workshop?",
			content: `Just your laptop (and a mouse)! We’ll send you links to any software installations needed for specific 
			workshops closer to the date. `,
		},
		{
			title: "Will both CAD workshops cover the same materials?",
			content: `No, the 1st workshop is an introduction with basic modelling/design. The 2nd one is about simulations in CAD using concepts from the 1st workshop.
			It will also cover design-for-manufacture techniques.`,
		},
		{
			title: "Do I need to attend all the workshops?",
			content: `You can choose which workshops you would like to attend. However, we do encourage all participants to attend as many workshops as possible to 
			gain a holistic understanding of how multidisciplinary teams work. It is also a great opportunity to pick up some new skills while being guided by experienced instructors!`,
		}]
	}
	
const hackData = {
	title: "Hackathons",	
	rows:[
		{
			title: "What is the difference between the two hackathons? ",
			content: `The first hackathon is a ‘broad-theme’ hack that gives everyone the opportunity to innovate, without the need for much technical expertise.
			The second hackathon is centered around Rover Team’s work: you will be designing specific components of subsystems 
			(eg: mobility system, science payload, etc) which will help the rover overcome various challenges it is likely to face on Mars.`,
		},
		{
			title: "Do I have to attend both the hackathons?",
			content: `Yes, you are highly encouraged to do so!`,
		}]
	}
const othersData = {
	title: "Others", 
	rows:[
		{
			title: "Where can I sign up for the NUS rover team?*",
			content: 
			<p>
				If you are interested in joining the rover team, you can fill in the registration form <a href="https://nus.campuslabs.com/engage/submitter/form/start/488630">here.</a> 
				You can also join our interest group <a href="https://t.me/joinchat/Ht1uPdAmWkthNTc9">here.</a>
			</p>,
		}]
};

const DescriptionFontFaq = styled(DescriptionFont)`
padding-left: 0.5rem;
`

const DescriptionFontAsterix = styled(DescriptionFont)`
margin-top: 3rem;
font-size: 0.95rem;
`

const DescriptionFontSoon = styled(DescriptionFont)`
	display: flex;
  align-items: center;

	justify-content: center;
	font-size: 1.5rem;
`

const DescriptionFontCenter = styled(DescriptionFont)`
	display: flex;
  align-items: center;

	justify-content: center;
`

const DescriptionFontClosed = styled(LandingTitleFont)`
	display: flex;
  align-items: center;

	justify-content: center;
	font-size: 1.5rem;
	color: red;
	background-color: white;
`

const faqStyles = {
	bgColor: '#141e22',
	titleTextColor: "#e17b10",
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
