import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ProductsMen from "./ProductsMen";

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

class Routing extends Component {
  render() {
    const ProductsMenPage = () => {
      return <ProductsMen products={this.props.products} />;
    };
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/collections/mens" component={ProductsMenPage} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Routing));
