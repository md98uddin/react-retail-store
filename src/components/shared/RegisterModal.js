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
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length < len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const RenderRegisterModal = ({
  user,
  isModalOpen,
  toggleRegister,
  toggleLogin,
  submitRegister,
}) => {
  if (!user) {
    return (
      <Modal isOpen={isModalOpen} toggle={toggleRegister}>
        <ModalHeader
          toggle={toggleRegister}
          style={{ backgroundColor: "#e5e5f0" }}
        >
          Become a Rockstar
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => submitRegister(values)}>
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
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Email cannot be empty",
                      validEmail: "Not a valid email",
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
                      minLength: minLength(6),
                      maxLength: maxLength(64),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".password"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Password cannot be empty",
                      minLength: "Password must be at least 2 characters long",
                      maxLength: "Password length cannot exceed 64 characters",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col className="form-group">
                  <Control.checkbox
                    model=".tos"
                    name="tos"
                    id="tos"
                    validators={{ required }}
                  />{" "}
                  I agree to the Rockstar's Terms of Service and Policies
                  <Errors
                    className="text-danger"
                    show="touched"
                    model=".tos"
                    component="div"
                    messages={{
                      required:
                        "You must agree to our Terms of Services and Policies",
                    }}
                  />
                </Col>
              </Row>
              <Container style={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  style={{ backgroundColor: "#e5e5f0", color: "black" }}
                >
                  REGISTER
                </Button>
                <br />
                <a className="mt-2" role="button" onClick={toggleLogin}>
                  or, login here
                </a>
              </Container>
            </Container>
          </LocalForm>
        </ModalBody>
      </Modal>
    );
  }

  return <div />;
};

export default RenderRegisterModal;
