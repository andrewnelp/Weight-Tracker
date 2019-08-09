import React, { Component } from "react";
import app from "../../base.js";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
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
            <Link to="/" className="navbar-brand text-info navbar-brand">
              <strong>Weight Tracker</strong>
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem className="mx-3">
                  <Link to="/" className="nav-link text-info">
                    Home
                  </Link>
                </NavItem>
                <NavItem className="mx-3">
                  <Link to="/create" className="nav-link text-info">
                    Enter Day Data
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink className="text-info" href="#">
                    <Button
                      outline
                      color="info"
                      size="sm"
                      onClick={() => app.auth().signOut()}
                    >
                      Sign Out
                    </Button>
                  </NavLink>
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
