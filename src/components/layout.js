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

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect={true} expand="lg">
        <Navbar.Brand href="/">NUS SEDS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="navbar-link" href="/about">
              ABOUT
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/events">
              EVENTS
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/posts">
              BLOG
            </Nav.Link>
            <Nav.Link className="navbar-link" href="/contact">
              CONTACT
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
