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
import LoginModal from "../Auth";
import CartModal from "../CartModal";
import WishListModal from "../WishlistModal";

const NavbarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, toggleLoginModal] = useState(false);
  const [isRegisterOpen, toggleRegisterModal] = useState(false);
  const [isCartOpen, toggleCartModal] = useState(false);
  const [isWishListOpen, toggleWishListModal] = useState(false);
  const [isProductOpen, setProduct] = useState(false);
  const [popOverProduct, setPopover] = useState(props.cart[0]);

  const toggle = () => setIsOpen(!isOpen);

  const toggleLogin = () => {
    toggleLoginModal(!isLoginOpen);
    if (isRegisterOpen) {
      toggleRegister(false);
    }
  };

  const toggleRegister = () => {
    toggleRegisterModal(!isRegisterOpen);
    if (isLoginOpen) {
      toggleLogin(false);
    }
  };

  const toggleCart = () => {
    toggleCartModal(!isCartOpen);
  };

  const toggleWishList = () => {
    toggleWishListModal(!isWishListOpen);
  };

  const toggleProduct = (product) => {
    setProduct(!isProductOpen);
    setPopover(product);

    setTimeout(() => {
      setProduct(false);
    }, 1750);
  };

  const submitLogin = (values) => {
    props.loginUser(values);
  };

  const submitRegister = (values) => {
    props.loginUser(values);
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
            <NavItem
              className="mb-2 my-lg-auto ml-lg-3"
              role="button"
              onClick={toggleCart}
            >
              <i className="fa fa-shopping-cart" /> Cart
            </NavItem>
            <NavItem
              className="mb-2 my-lg-auto ml-lg-2"
              role="button"
              onClick={toggleWishList}
            >
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
        toggleLogin={toggleLogin}
        toggleRegister={toggleRegister}
        isLoginOpen={isLoginOpen}
        isRegisterOpen={isRegisterOpen}
        submitLogin={submitLogin}
        submitRegister={submitRegister}
      />
      <CartModal
        cart={props.cart}
        cartTotal={props.cartTotal}
        isModalOpen={isCartOpen}
        toggleCart={toggleCart}
        isProductOpen={isProductOpen}
        togglePopover={toggleProduct}
        product={popOverProduct}
        removeFromCart={props.removeFromCart}
      />
      <WishListModal
        wishlist={props.wishlist}
        isModalOpen={isWishListOpen}
        toggleWishList={toggleWishList}
        removeFromWishList={props.removeFromWishList}
        addToCartFromWishList={props.addToCartFromWishList}
      />
    </>
  );
};

export default NavbarComponent;
