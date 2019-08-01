import React, { Component } from "react";
import app from "../../base.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand className="text-info" href="/">
              Weight Tracker
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mx-3">
                  <NavLink
                    className="text-info"
                    href="https://reactstrap.github.io/"
                  >
                    ReactStrap
                  </NavLink>
                </NavItem>
                <NavItem>
                  <Button
                    outline
                    color="warning"
                    size="sm"
                    onClick={() => app.auth().signOut()}
                  >
                    Sign Out
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
