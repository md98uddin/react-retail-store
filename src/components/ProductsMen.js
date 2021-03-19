import React, { Component } from "react";
import { Container, Row } from "reactstrap";
import ProductCard from "./shared/ProductCard";

const renderProducts = (products) => {
  if (products) {
    return products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ));
  }

  return <div />;
};

class ProductsMen extends Component {
  render() {
    return (
      <Container className="mb-5 mt-4">
        <Row>{renderProducts(this.props.products)}</Row>
      </Container>
    );
  }
}

export default ProductsMen;
