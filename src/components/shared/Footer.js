import React from "react";
import { Container, Row, Col, Button, ButtonGroup } from "reactstrap";
import "../../css/Theme.css";

const FooterComponent = () => {
  return (
    <Container fluid={true} className="footer">
      <Row>
        <Col xs="12" md="3" style={{ textAlign: "center" }}>
          <h6 className="mt-3">Social</h6>
          <ButtonGroup>
            <Button className="btn-facebook m-1">
              <i className="fa fa-facebook" />
            </Button>
            <Button className="btn-instagram m-1">
              <i className="fa fa-instagram" />
            </Button>
            <Button className="btn-twitter m-1">
              <i className="fa fa-twitter" />
            </Button>
            <Button className="btn-linkedin m-1">
              <i className="fa fa-linkedin" />
            </Button>
          </ButtonGroup>
        </Col>
        <Col xs="12" md="3" style={{ textAlign: "center" }}>
          <h6 className="mt-3">Location</h6>
          <p className="mb-0">Rockstars Outfitters, DE</p>
          <p>United States, 98605</p>
        </Col>
        <Col xs="12" md="3" style={{ textAlign: "center" }}>
          <h6 className="mt-3">Customer Service</h6>
          <a href="tel:18002541894">
            <i className="fa fa-phone" /> 1-800-254-1894
          </a>
          <br/>
          <a href="mailto:routfitters@ac1.com">
            <i className="fa fa-envelope" /> routfitters@ac1.com
          </a>
        </Col>
        <Col xs="12" md="3" style={{ textAlign: "center" }}>
          <h6 className="mt-3">About Us</h6>
          <p className="mb-0">Terms and Policies</p>
          <p className="mb-0">Our History and Motto</p>
          <p>Legal Services</p>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterComponent;
