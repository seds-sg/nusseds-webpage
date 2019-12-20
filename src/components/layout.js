/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import './layout.css';
import logo from '../images/NUS_SEDS_Logo.png';

const NavbarLink = styled.span`color: #fef8e9;`;

const Layout = ({ children, className }) => (
	<div className={className}>
		<StyledNavbar collapseOnSelect={true} expand="lg" fixed={'top'} variant="dark">
			<StyledBrand href="/">
				<img src={logo} alt="logo" />
			</StyledBrand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/projects">
						<NavbarLink>Projects</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/about">
						<NavbarLink>About</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/events">
						<NavbarLink>Events</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/posts">
						<NavbarLink>Blog</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/contact">
						<NavbarLink>Contact</NavbarLink>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</StyledNavbar>
		<main>{children}</main>
		{/* <footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer> */}
	</div>
);
const StyledBrand = styled(Navbar.Brand)`
	padding: 0 !important;
	img {
		height: 50px;
	}
`;

const StyledLayout = styled(Layout)`
  background-color: #141e22;
  min-height: 100vh;
`;

const StyledNavbar = styled(Navbar)`
  background-color: rgba(255, 255, 255, 0.05);
`;

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

// For padding from the navbar
export const NavbarPaddingContainer = styled.div`
	padding-top: 5.5rem;
	padding-left: 3rem;
	padding-right: 3rem;
`;

export default StyledLayout;
