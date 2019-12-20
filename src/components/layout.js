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

const NavbarLink = styled.span`color: #fef8e9;`;

const Layout = ({ children, className }) => (
	<div className={className}>
		<StyledNavbar collapseOnSelect={true} expand="lg" fixed={'top'} variant="dark">
			<Navbar.Brand href="/">NUS SEDS</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link href="/about">
						<NavbarLink>ABOUT</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/events">
						<NavbarLink>EVENTS</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/posts">
						<NavbarLink>BLOG</NavbarLink>
					</Nav.Link>
					<Nav.Link href="/contact">
						<NavbarLink>CONTACT</NavbarLink>
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

const StyledLayout = styled(Layout)`
  background-color: #141e22;
  min-height: 100vh;
`;

const StyledNavbar = styled(Navbar)`
  background-color: rgba(255, 255, 255, 0.05)
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
