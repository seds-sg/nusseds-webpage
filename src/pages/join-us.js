import React from "react"
import { PageHeaderFont, DescriptionFont } from "../components/textStyles"
import Layout, { NavbarPaddingContainer } from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import SectionHeaderWrapper from "../components/sectionHeader"
import { Link } from "gatsby"
import StyledButton from "../components/button"

const JoinUs = () => {
	const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdyZTTvTO5qOWs4F4jOMilX3jI8n-WfEQZc3L6j2wYnrZF9pQ/viewform?usp=sf_link"
	return (
		<Layout>
			<NavbarPaddingContainer>
				<SEO title="Join Us" />
				<JoinUsHeaderWrapper>Join us.</JoinUsHeaderWrapper>
				<JoinUsDescription>
					<ButtonWrapper buttonText="Join Now." onClick={() => window.open(formUrl)} />
				</JoinUsDescription>
				<SectionHeaderWrapper headerText="PROJECT TEAMS" />
				<DescriptionFont>
					All current NUS students (undergraduate and postgraduate) are eligible for membership, regardless of
					their faculty and year of study.
					<br />
					<br />
					In SEDS, the following project teams are currently recruiting:
					<br />
					<br />
					<NoBullet>
						<li><Underlined>Rover Team</Underlined> <Emoji emoji='⚙️' label='wheel-emoji'/></li>
						<ul>
							<li><b>The Rover team</b> handles our flagship engineering project, whose aim is to design and build a semi-autonomous 'Remotely Operated Vehicle' which can accomplish a variety of tasks.</li>
							<li><b>Competitions: </b> Indian Rover Design Challenge over this summer. Other Rover Challenges, such as the University Rover Challenge, European Rover Challenge, Indian Rover Challenge and Canadian Rover Challenge over the following semester(s).</li>
							<li><b>Applicable Majors: </b> Engineering and science majors preferred, due to the highly technical nature of the project.</li>
							<li>See more <Link to={"/new-oppy"}>here</Link></li>
						</ul>
						<li><Underlined>Autonomous Vehicle team</Underlined> <Emoji emoji='🤖' label='vehicle-emoji' /></li>
						<ul>
							<li><b>The Autonomous Vehicle Team</b> builds autonomous vehicles for the <a href='https://www.darpa.mil/news-events/2020-01-10' target='_blank' rel="noopener noreferrer">DARPA SubT Challenge</a> in order to explore inaccessible spaces more easily.</li>
							<li><b>Competitions: </b> DARPA SubT Challenge (Semester 1, AY20/21)</li>
							<li><b>Applicable Majors: </b> Engineering and science majors preferred, due to the highly technical nature of the project.</li>
							<li>See more <Link to={"/darpa-subt"}>here</Link></li>
						</ul>
						<li><Underlined>Space Policy Team</Underlined> <Emoji emoji='👽' label='alien-emoji' /></li>
						<ul>
							<li><b>The Space Policy Unit</b> focuses on aspects of space-related policy and development, over multiple areas like space law, space entrepreneurship, space finance etc.</li>
							<li><b>Competitions: </b> Compernicus Masters 2020 over this summer, Mars City-State Contest over this summer. Other case competition and research competitions over the following semester(s).</li>
							<li><b>Applicable Majors: </b>All majors welcome as the nature of policy and business in space is highly diverse.</li>
						</ul>
					</NoBullet>
					<SectionHeaderWrapper headerText="MANAGEMENT TEAMS" />
					NUS SEDS also hosts talks and workshops. Our weekly talks are called New Frontiers. As part of this
					series, we have guest lectures (e.g. talks by space scientists, entrepreneurs, former astronauts).
					Our workshops, New Horizons, teaches students technical skills required for employment in the space
					industry. These include but are not limited to space robotics, space mission design, spacecraft
					technology and space entrepreneurship. Our other chapter activities include Yuri's Night, movie
					nights and lightning talks by SEDS members. <br />
					<br />
					To facilitate the aforementioned activities, NUS SEDS has the following Departments: <br />
					<br />
					<ul>
						<li>Finance</li>
						<ul>
							<li>Internal Finance</li>
						</ul>
						<li>Marketing</li>
						<ul>
							<li>Social Media</li>
							<li>Recruitment</li>
							<li>Design</li>
						</ul>
						<li>External Relations</li>
						<ul>
							<li>Sponsorships</li>
							<li>Partnerships</li>
						</ul>
						<li>Operations</li>
						<ul>
							<li>Web Development</li>
							<li>A/V</li>
							<li>Events</li>
						</ul>
					</ul>
				</DescriptionFont>
				<SectionHeaderWrapper headerText="MEMBERSHIP" />
				<DescriptionFont>
				Given NUS SEDS intake size, members are required to be involved in an 'Ongoing Project' as well as in a 'Management Team' role. As such, we hope to enable our members to improve both their technical and soft skills, while also building a portfolio of work.  <br />
					<br />
					As NUS SEDS is focused on projects, we hope to keep the management workload to a minimum so members can devote more time to projects. Standard membership lasts for the entire academic year.
					<br /><br />
					As a member you can: <br />
					<br />
					<RocketList>
						<li>Work on projects to build up a concrete portfolio of work in this rapidly growing industry</li>
						<li>Develop highly sought-after technical skills</li>
						<li>Gain credible experience managing talented teams</li>
						<li>
						Participate and compete in overseas space-related competitions/conferences/research attachments
						</li>
						<li>Gain access to exclusive industry and government entities (such as Boeing, DSTA, Equatorial Space Industries...)</li>
						<li>Hear first about internship opportunities in the the local and overseas Space sector</li>
						<li>Find support for your own initiatives and projects</li>
						<li>Use software and hardware resources exclusive to NUS SEDS</li>
						<li>Attend chapter-exclusive events and activities</li>
					</RocketList>
					<br />
					<br />
					We also strongly encourage our members to suggest and pioneer new initiatives that can help our club or community grow.
					<br />
					<br />
					<br />
				</DescriptionFont>
				<ButtonWrapper buttonText="Join Now." onClick={() => window.open(formUrl)} />
			</NavbarPaddingContainer>
		</Layout>
	)
}

const RocketList = styled.ul`
	list-style-type: '🚀 ';
`

const JoinUsHeaderWrapper = styled(PageHeaderFont)`
  margin-bottom: 3rem;
`

const JoinUsDescription = styled(DescriptionFont)``

const ButtonWrapper = styled(StyledButton)`
  margin-bottom: 5rem;
  padding: 0.75rem 2rem;
`

const Underlined = styled.span`
	text-decoration: underline;
`

const NoBullet = styled.ul`
	list-style-type: none;
`

const Emoji = ({ emoji, label }) => <span role="img" aria-label={label}>{emoji}</span>

export default JoinUs
