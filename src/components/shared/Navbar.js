import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import PromoBanner from "./PromoBanner";
import "../../css/Theme.css";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const pathname = useLocation().pathname;

  return (
    <div>
      <PromoBanner />
      <Navbar className="navbar-main" light expand="md" sticky="top">
        <NavbarBrand className="brand-name" href="/">
          <img
            width="50"
            height="45"
            src="\assets\images\brand-logo.png"
            alt="brand-logo"
          />{" "}
          <span className="brand-text">Rockstar Outfitters</span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <NavItem>
              <NavLink
                className={
                  pathname.includes("men") && !pathname.includes("women")
                    ? "active"
                    : ""
                }
                href="/collections/mens"
              >
                MEN'S
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("women") ? "active" : ""}
                href="/collections/womens"
              >
                WOMEN'S
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("accessories") ? "active" : ""}
                href="/collections/accessories"
              >
                ACCESSORIES
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("clearences") ? "active" : ""}
                href="/collections/clearences"
              >
                CLEARENCE
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={pathname.includes("careers") ? "active" : ""}
                href="/careers"
              >
                CAREERS
              </NavLink>
            </NavItem>
            <NavItem className="my-2 my-md-auto ml-md-3" role="button">
              <i className="fa fa-shopping-cart" /> Cart
            </NavItem>
            <NavItem className="my-2 my-md-auto ml-md-3" role="button">
              <i className="fa fa-heart" /> Wishlist
            </NavItem>
            <NavItem className="my-auto ml-md-3" role="button">
              <i className="fa fa-shopping-cart" /> Login
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
