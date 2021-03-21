import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Footer from "./shared/Footer";
import Navbar from "./shared/Navbar";
import ProductsMen from "./ProductsMen";
import CareersListing from './CareersListing'

const mapStateToProps = (state) => {
  return {
    products: state.products,
    careers:state.careers
  };
};

class Routing extends Component {
  render() {
    const ProductsMenPage = () => {
      return <ProductsMen products={this.props.products} />;
    };

    const CareersPage=()=>{
      return <CareersListing careers={this.props.careers}/>
    }
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/collections/mens" component={ProductsMenPage} />
          <Route exact path="/careers" component={CareersPage}/>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Routing));
