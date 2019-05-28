import React, { Component } from "react";
import { Navbar, Container } from "react-bootstrap";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="/" />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <i class="far fa-envelope" />{" "}
              <a href="mailto:info@codetalkers.io">info@codetalkers.io</a>
            </Navbar.Text>
            <Navbar.Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Navbar.Text>
            <Navbar.Text>
              <i class="fab fa-twitter" />{" "}
              <a href="https://twitter.com/codetalkers_io" target="_blank">
                @codetalkers_io
              </a>
            </Navbar.Text>
            <Navbar.Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Navbar.Text>
            <Navbar.Text>
              <i class="fab fa-instagram" />{" "}
              <a href="https://instagram.com/codetalkers.io">@codetalkers.io</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  }
}
