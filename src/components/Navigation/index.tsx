import React, { useState } from "react";
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = () => {
  const [isOpen, isOpenSet] = useState(false);

  const toggle = () => isOpenSet(!isOpen);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarBrand href="/">Colônia Z-33</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="#">Components</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
