import React from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Col,
  Container,
  Label,
} from "reactstrap";

const required = (val) => val;

const RenderLoginModal = ({ user, isModalOpen, toggleModal, submitLogin }) => {
  if (!user) {
    return (
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader
          toggle={toggleModal}
          style={{ backgroundColor: "#e5e5f0" }}
        >
          Login to Rockstar
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => submitLogin(values)}>
            <Container>
              <Row>
                <Col className="form-group">
                  <Label htmlFor="email" className="col-form-label">
                    Email
                  </Label>
                  <Control.text
                    className="form-control"
                    model=".email"
                    name="email"
                    id="email"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Email cannot be empty",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="form-group">
                  <Label htmlFor="password" className="col-form-label">
                    Password
                  </Label>
                  <Control.text
                    className="form-control"
                    type="password"
                    model=".password"
                    name="password"
                    id="password"
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Password cannot be empty",
                    }}
                  />
                </Col>
              </Row>
              <Container style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#e5e5f0", color: "black" }}
                >
                  LOGIN
                </Button>
              </Container>
            </Container>
          </LocalForm>
        </ModalBody>
      </Modal>
    );
  }

  return <div />;
};

const LoginModal = (props) => {
  return (
    !props.user && (
      <RenderLoginModal
        user={props.user}
        isModalOpen={props.isModalOpen}
        toggleModal={props.toggle}
        submitLogin={props.submitLogin}
      />
    )
  );
};

export default LoginModal;
