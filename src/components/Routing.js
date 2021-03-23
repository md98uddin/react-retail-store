import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser, logoutUser, registerUser } from "../redux/actions";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ProductsMen from "./ProductsMen";
import CareersListing from "./CareersListing";

const mapStateToProps = (state) => {
  return {
    products: state.products,
    careers: state.careers,
    cart: state.cart,
    user: state.user,
  };
};

class Routing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: this.props.cart,
    };
  }

  removeProduct = (id) => {
    const updateCart = this.state.cart.filter((item) => item.id !== id);

    this.setState({
      cart: updateCart,
    });
  };

  render() {
    const ProductsMenPage = () => {
      return <ProductsMen products={this.props.products} />;
    };

    const CareersPage = () => {
      return <CareersListing careers={this.props.careers} />;
    };
    return (
      <React.Fragment>
        <Navbar
          user={this.props.user}
          loginUser={this.props.loginUser}
          registerUser={this.props.registerUser}
          logoutUser={this.props.logoutUser}
          cart={this.state.cart}
          removeProduct={this.removeProduct}
        />
        <Switch>
          <Route exact path="/collections/mens" component={ProductsMenPage} />
          <Route exact path="/careers" component={CareersPage} />
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
