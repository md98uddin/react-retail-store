import React from "react";
import {
  Container,
  Button,
  Row,
  Col,
  Label,
  ModalBody,
  Modal,
  ModalHeader,
} from "reactstrap";

import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const RenderApplyModal = ({
  career,
  isModalOpen,
  toggleModal,
  submitApplication,
}) => {
  if (career) {
    return (
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader
          toggle={toggleModal}
          style={{ backgroundColor: "#e5e5f0" }}
        >
          {career.role} - <i>{career.location}</i>
        </ModalHeader>
        <ModalBody>
          <LocalForm onSubmit={(values) => submitApplication(values)}>
            <Container>
              <Row>
                <Col xs="12" className="form-group">
                  <Label htmlFor="name" className="col-form-label">
                    Full Name
                  </Label>
                  <Control.text
                    className="form-control"
                    model=".name"
                    name="name"
                    id="name"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(50),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".name"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Field cannot be empty",
                      minLength: "Min length must be 2 characters",
                      maxLength: "Limit length to 50 characters",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="form-group">
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
                      minLength: minLength(2),
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Field cannot be empty",
                      minLength: "Min length must be 2 characters",
                      validEmail: "Email is not valid",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="form-group">
                  <Label htmlFor="address" className="col-form-label">
                    Address
                  </Label>
                  <Control.text
                    className="form-control"
                    model=".address"
                    name="address"
                    id="address"
                    validators={{
                      required,
                      minLength: minLength(10),
                      maxLength: maxLength(64),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".address"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Field cannot be empty",
                      minLength: "Not a valid address",
                      maxLength: "Limit length to 64 characters",
                    }}
                  />
                </Col>
              </Row>
              <Row>
                <Col xs="12" className="form-group">
                  <Label htmlFor="resume" className="col-form-label">
                    Resume/CV
                  </Label>
                  <Control.file
                    className="form-control"
                    model=".resume"
                    name="resume"
                    id="resume"
                    frameBorder
                    validators={{
                      required,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".resume"
                    show="touched"
                    component="div"
                    messages={{
                      required: "Please provide a resume",
                    }}
                  />
                </Col>
              </Row>
              <Container className="mt-2" style={{ textAlign: "center" }}>
                <Button
                  style={{ backgroundColor: "#e5e5f0", color: "black" }}
                  type="submit"
                  className="btn-hover-style"
                >
                  Submit Application
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

export default RenderApplyModal;
