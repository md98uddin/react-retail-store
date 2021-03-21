import React, { useState } from "react";
import {
  Container,
  Card,
  CardBody,
  CardSubtitle,
  CardHeader,
  CardText,
  Button,
  Row,
  Col,
  Label,
  ModalBody,
  Modal,
  ModalHeader,
  Alert,
} from "reactstrap";

import { LocalForm, Control, Errors } from "react-redux-form";

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && val.length >= len;
const maxLength = (len) => (val) => !val || val.length <= len;
const validEmail = (val) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

const RenderCareers = ({ careers, toggleCareer, toggleModal }) => {
  if (careers) {
    return careers.map((career) => (
      <Col xs="12" lg="6" key={career.id}>
        <Card className="m-3 mx-5">
          <CardHeader style={{ backgroundColor: "#9f9ad8", color: "white" }}>
            {career.role} - <i>{career.location}</i>
          </CardHeader>
          <CardBody>
            <CardText>Posted on {career.datePosted}</CardText>
            <CardSubtitle>{career.description}</CardSubtitle>
            <Button
              className="mt-2"
              style={{ backgroundColor: "#e5e5f0", color: "black" }}
              onClick={() => toggleModal(career)}
            >
              Apply
            </Button>
          </CardBody>
        </Card>
      </Col>
    ));
  }

  return <Col />;
};

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

const RenderAlert = ({ role, alert }) => {
  if (alert) {
    return (
      <Container className="mt-1">
        <Alert style={{ textAlign: "center" }}>
          We have received your application for {role}. If there is a match, we
          will contact you. Thank you.
        </Alert>
      </Container>
    );
  }

  return <div />;
};

function CareersListing(props) {
  const [isModalOpen, setModal] = useState(false);
  const [career, setCareer] = useState(props.careers[0]);
  const [alert, setAlert] = useState(false);

  const toggleModal = (career) => {
    setModal(!isModalOpen);
    toggleCareer(career);
  };
  const toggleCareer = (career) => setCareer(career);

  const submitApplication = (values) => {
    console.log(JSON.stringify(values));
    setModal(!isModalOpen);
    setAlert(true);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 500);

    setTimeout(() => {
      setAlert(false);
    }, 7500);
  };

  console.log("modal", isModalOpen);
  console.log("career", career);

  return (
    props.careers && (
      <React.Fragment>
        <RenderAlert alert={alert} role={career.role} />
        <Container className="mt-5 mb-5">
          <Row>
            <RenderCareers careers={props.careers} toggleModal={toggleModal} />
          </Row>
        </Container>
        <RenderApplyModal
          isModalOpen={isModalOpen}
          toggleModal={toggleModal}
          career={career}
          submitApplication={submitApplication}
        />
      </React.Fragment>
    )
  );
}

export default CareersListing;
