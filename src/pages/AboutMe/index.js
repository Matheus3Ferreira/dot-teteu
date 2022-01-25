import "./style.css";
import { Container, Col, Row } from "react-bootstrap";

export default function AboutMe() {
  return (
    <Container className="page-container">
      <Row className="row-spacing title-row">
        <Col>
          <h1 className="title">This is me, Matheus</h1>
        </Col>
        <Col>
          <h1 className="title">These are my objectives</h1>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <span className="text">
            Development of systems Student 
            at Universidade Paulista (UNIP)
          </span>
        </Col>
        <Col>
          <span className="text">Make my first personal site</span>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <span className="text">
            I live in Santos, São Paulo, Brazil. (UNIP)
          </span>
        </Col>
        <Col>
          <span className="text">Give a travel to my grandmother</span>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <span className="text">
            I like write code, and think about a
            logic solutions for problems.
          </span>
        </Col>
        <Col>
          <span className="text">Learn more than yesterday</span>
        </Col>
      </Row>
      <Row className="row-spacing">
        <Col>
          <span className="text">
            Now I want to learn how to make
            
            great things with Javascript, and
            
            feel gratified with my creations.
          </span>
        </Col>
        <Col>
          <span className="text">Get my first job with development of systems</span>
        </Col>
      </Row>
    </Container>
  );
}
