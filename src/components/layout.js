/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import styled from "styled-components"
import "./layout.css"
import logo from "../images/NUS_SEDS_Logo.png"
import { NavBarFont } from "../components/textStyles"

const NavbarLink = styled(NavBarFont)`
  color: #fef8e9;
`

const Layout = ({ children, className }) => (
  <div className={className}>
    <StyledNavbar
      collapseOnSelect={true}
      expand="lg"
      fixed={"top"}
      variant="dark"
    >
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
          <Nav.Link href="/join-us">
            <NavbarLink>Join Us</NavbarLink>
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
)
const StyledBrand = styled(Navbar.Brand)`
  padding: 0 !important;
  img {
    height: 50px;
  }
`

const StyledLayout = styled(Layout)`
  background-color: #141e22;
  min-height: 100vh;
`

const StyledNavbar = styled(Navbar)`
  background-color: #141e22;
  .navbar-nav a.nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

// For padding from the navbar
export const NavbarPaddingContainer = styled.div`
  padding-top: 12rem;
  padding-left: 5rem;
  padding-right: 5rem;
`

export default StyledLayout
