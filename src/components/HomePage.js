import React from "react";
import { Button, Card, CardImg, CardBody, CardHeader } from "reactstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Card style={{ textAlign: "center" }}>
      <CardImg
        top
        width="100%"
        height="90%"
        src="/assets/images/chatsrat-1.webp"
      />
      <CardHeader
        style={{
          color: "black",
          fontFamily: "cursive",
        }}
      >
        <h3>Our Summer Collections</h3>
      </CardHeader>
      <CardBody>
        <Link to="/collections/mens">
          <Button
            className="m-2 btn-hover-style"
            style={{ color: "black", backgroundColor: "#e5e5f0" }}
          >
            Shop Him
          </Button>
        </Link>
        <Link to="/collections/womens">
          <Button
            style={{ color: "black", backgroundColor: "#e5e5f0" }}
            className="btn-hover-style"
          >
            Shop Her
          </Button>
        </Link>
      </CardBody>
    </Card>
  );
};

export default HomePage;
