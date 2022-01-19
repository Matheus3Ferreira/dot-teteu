import { Navbar, Nav } from "react-bootstrap";
import "./style.css";
import Ellipse from '../Ellipse';

export const Header = () => (
  <div className="navbar-container">
    <Navbar expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Item>
              <Nav.Link href="/"><span className="header-title title">DotTeteu.com</span></Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="mx-auto">
            <Nav.Item>
              <Nav.Link href="about-me"><span className="text header-text">About Me</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="projects"><span className="text header-text">Projects</span></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="contact"><span className="text header-text">Contact</span></Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item>
              <Nav.Link href="feedback" className=""><span className="text header-text">Give me your feedback</span></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>

    </Navbar>
    <Ellipse />
  </div>
);
