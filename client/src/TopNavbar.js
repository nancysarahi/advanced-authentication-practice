import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
      <div>
        <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
        <Link to="/dogs"><Navbar.Text>Dogs</Navbar.Text></Link>
        <Link to="/cats"><Navbar.Text>Cats</Navbar.Text></Link>
        <Link to="/bunnies"><Navbar.Text>Bunnies</Navbar.Text></Link>
      </div>
    );

  }
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem onClick={props.onSignOut}>Sign Out</NavItem>
        </Nav>
        {navItems}
      </Navbar.Collapse>
    </Navbar>
  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
