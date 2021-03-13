import React from "react";
import { Container, Row, Col } from "reactstrap";

const PromoBanner = () => {
  return (
    <Container className="container-fluid" fluid={true} style={bannerStyle}>
      <Row>
        <Col>
          <p className="my-auto">Save extra 15% with code SHOP2021</p>
        </Col>
      </Row>
    </Container>
  );
};

const bannerStyle = {
  backgroundColor: "#9f9ad8",
  textAlign: "center",
  color:"white"
};

export default PromoBanner;
