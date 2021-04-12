import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ProductCard from "./shared/ProductCard";
import Loader from "./shared/Loading";

const RenderProducts = ({ products, addProductToCart }) => {
  if (products) {
    return products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        addProductToCart={addProductToCart}
      />
    ));
  }

  return <div />;
};

class ProductsMen extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <Container className="mb-5 mt-4">
        {this.props.products ? (
          <Row>
            <RenderProducts
              products={this.props.products}
              addProductToCart={this.props.addProductToCart}
            />
          </Row>
        ) : (
          <Loader />
        )}
      </Container>
    );
  }
}

export default ProductsMen;
