import React, { useState } from "react";
import RenderApplyModal from './shared/CareerForm'
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
  Alert,
} from "reactstrap";


const RenderCareers = ({ careers, toggleModal }) => {
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
