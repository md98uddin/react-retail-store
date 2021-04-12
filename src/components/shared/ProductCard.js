import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardSubtitle,
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Col,
  CardTitle,
  Container,
} from "reactstrap";

const ProductCard = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [currentSize, setSize] = useState(null);

  const changeSize = (event) => {
    setSize(event.target.innerText);
  };

  const addProduct = (product) => {
    product["size"] = currentSize;
    props.addProductToCart(product);
    console.log("product", product);
  };

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  return (
    props.product && (
      <Col xs="12" sm="6" lg="4">
        <Card className="m-2" style={{ textAlign: "center" }}>
          <CardImg
            top
            width="100%"
            src={props.product.image}
            alt={props.product.name}
          />
          <CardBody>
            <CardTitle>{props.product.name}</CardTitle>
            <CardSubtitle>${props.product.price}</CardSubtitle>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle>
                {props.product.sizingType.split(",")[0]}
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Size</DropdownItem>
                {props.product.sizingType.split(",").map((size, index) => (
                  <DropdownItem
                    disabled={props.product.stock.split(",")[index] == 0}
                    key={size}
                    onClick={changeSize}
                  >
                    {size}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Container className="mt-2">
              <Button onClick={() => addProduct(props.product)}>
                Add To Cart
              </Button>
              <Button className="mx-2">
                <i className="fa fa-heart" />
              </Button>
            </Container>
          </CardBody>
        </Card>
      </Col>
    )
  );
};

export default ProductCard;
