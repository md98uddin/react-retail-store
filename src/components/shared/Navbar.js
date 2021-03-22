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
import LoginModal from "../LoginModal";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, toggleModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleLogin = () => toggleModal(!isModalOpen);

  const submitLogin = (values) => {
    props.loginUser(values);
    console.log(values);
  };

  const logoutUser = () => {
    props.logoutUser();
    toggleLogin();
  };

  const pathname = useLocation().pathname;

  return (
    <>
      <PromoBanner />
      <Navbar className="navbar-main" light expand="lg" sticky="top">
        <NavbarBrand className="brand-name mr-auto" href="/">
          <img
            width="35"
            height="35"
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
            <NavItem className="mb-2 my-lg-auto ml-lg-3" role="button">
              <i className="fa fa-shopping-cart" /> Cart
            </NavItem>
            <NavItem className="mb-2 my-lg-auto ml-lg-2" role="button">
              <i className="fa fa-heart" /> Wishlist
            </NavItem>
            {!props.user ? (
              <NavItem
                className="my-auto ml-lg-3"
                role="button"
                onClick={toggleLogin}
              >
                <i className="fa fa-user" /> Login
              </NavItem>
            ) : (
              <NavItem
                className="my-auto ml-lg-2"
                role="button"
                onClick={logoutUser}
              >
                <i class="fa fa-paper-plane" /> Log Out
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      <LoginModal
        user={props.user}
        toggle={toggleLogin}
        isModalOpen={isModalOpen}
        submitLogin={submitLogin}
      />
    </>
  );
};

export default NavbarComponent;
