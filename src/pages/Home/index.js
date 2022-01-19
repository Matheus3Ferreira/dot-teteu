import {  Container, Stack, Row, Col } from "react-bootstrap";
import BtnWhite from "../../components/BtnWhite";
import "../../global/style.css";
import "./style.css";

export default function Home() {
  return (
    <Container>

        <Row>
            <Col>
                <Stack gap={3}> 
                    <span className="title-home title">
                        Hello, I'm Matheus Ferreira,
                    <br />
                        Student and web developer.
                    </span>
                    
                    <span className="text">
                        Click here and meet more about me, my objectives and who I am. 👇
                    </span>
                    <BtnWhite url="about-me"/>
                </Stack>
            </Col>
            <Col className="d-flex justify-content-center">
                <img className="picture" src="https://www.comprerural.com/wp-content/uploads/2019/11/DSC_0390-2-640x486.jpg"></img>
            </Col>
        </Row>
     
    </Container>
  );
}
