import React from "react";
import { Container } from "reactstrap";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <Container style={{ textAlign: "center" }}>
      {" "}
      <Loader
        type="Puff"
        color="#e5e5f0"
        height={100}
        width={100}
        timeout="3000"
      />
    </Container>
  );
};

export default Loading;
