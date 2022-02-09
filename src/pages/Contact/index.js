import {Row, Col} from "react-bootstrap";
import "./style.css"

export default function Contact() {
    return (
        <div className="page-container">
            <Row>
                <Col className="information-container">
                    <Row>
                        <h1 className="title">Contact Information</h1>
                    </Row>


                </Col>
                <Col>
                    <Row>
                        <Col>
                            <h1 className="title">Or send me an email</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Name
                        </Col>
                        <Col>
                            Subject
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            E-mail
                        </Col>
                        <Col>
                            Phone
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Message
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col></Col>
                <Col>
                
                    <button type="button">Send</button>
                </Col>
            </Row>
        </div>
    )
}