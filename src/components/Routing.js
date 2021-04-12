import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, logoutUser, registerUser } from "../redux/actions";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import HomePage from "./HomePage";
import ProductsMen from "./ProductsMen";
import CareersListing from "./CareersListing";
import CheckOut from "./shared/Checkout";

const mapStateToProps = (state) => {
  return {
    products: state.products,
    careers: state.careers,
    cart: state.cart,
    wishlist: state.wishlist,
    user: state.user,
  };
};

class Routing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart,
      wishlist: this.props.wishlist,
      cartTotal: 0,
    };
  }

  componentDidMount() {
    this.updateCartTotal(this.state.cart);
  }

  removeFromCart = (id) => {
    const updateCart = this.state.cart.filter((item) => item.id !== id);

    this.setState({
      cart: updateCart,
    });

    this.updateCartTotal(updateCart);
  };

  removeFromWishList = (id) => {
    const updateWishList = this.state.wishlist.filter((item) => item.id !== id);

    this.setState({
      wishlist: updateWishList,
    });
  };

  addToCartFromWishList = (product) => {
    this.removeFromWishList(product.id);

    const itemFound = this.state.cart.filter((item) => {
      return item.id === product.id && item.size === product.size;
    });

    var newCart = null;

    if (itemFound.length === 0) {
      product.qty = 1;
      newCart = [...this.state.cart, product];

      this.setState({
        cart: newCart,
      });
    } else {
      itemFound[0].qty++;

      newCart = this.state.cart.filter((item) => {
        return item.id + item.size !== product.id + product.size;
      });

      this.setState({
        cart: [...newCart, itemFound[0]],
      });
    }
  };

  addProductToCart = (product) => {
    const itemFound = this.state.cart.filter((item) => {
      return item.id === product.id && item.size === product.size;
    });

    var newCart = null;

    if (itemFound.length === 0) {
      newCart = [...this.state.cart, product];

      product.qty = 1;

      this.setState({
        cart: newCart,
      });
    } else {
      itemFound[0].qty++;
      newCart = this.state.cart.filter((item) => {
        return item.id + item.size !== product.id + product.size;
      });

      this.setState({
        cart: [...newCart, itemFound[0]],
      });
    }
  };

  updateCartTotal = (cart) => {
    var total = 0;
    for (let i = 0; i < cart.length; i++) {
      total = total + cart[i].qty * cart[i].price;
    }

    return total;
  };

  render() {
    const Home = () => {
      return <HomePage />;
    };

    const ProductsMenPage = () => {
      return (
        <ProductsMen
          products={this.props.products}
          addProductToCart={this.addProductToCart}
        />
      );
    };

    const CareersPage = () => {
      return <CareersListing careers={this.props.careers} />;
    };

    const CheckOutPage = () => {
      return <CheckOut />;
    };
    return (
      <React.Fragment>
        <Navbar
          user={this.props.user}
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
          logoutUser={this.props.logoutUser}
          cart={this.state.cart}
          updateCartTotal={this.updateCartTotal}
          wishlist={this.state.wishlist}
          addToCartFromWishList={this.addToCartFromWishList}
          removeFromCart={this.removeFromCart}
          removeFromWishList={this.removeFromWishList}
        />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/collections/mens" component={ProductsMenPage} />
          <Route exact path="/careers" component={CareersPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

function mapDispatch(dispatch) {
  return {
    loginUser: (user) => {
      dispatch(loginUser(user));
    },
    registerUser: (user) => {
      dispatch(registerUser(user));
    },
    logoutUser: () => {
      dispatch(logoutUser());
    },
  };
}

export default withRouter(connect(mapStateToProps, mapDispatch)(Routing));
