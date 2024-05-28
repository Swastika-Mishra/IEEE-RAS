import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Container>
        <Row className="footer-section">  
        <Col md={2} className="footer-col">
        </Col>
          <Col md={3} className="footer-col">
            <h3 style={{color:"white"}}><strong>ABOUT</strong></h3>
            <a href="#" >HOME</a><br></br>
            <a href="#" >BOARD</a><br></br>
            <a href="#" >ABOUT US</a>
          </Col>
          <Col md={3} className="footer-col">
            <h3 style={{color:"white"}}><strong>LINKS</strong></h3>
            <a href="#" >IEEE RAS VIT</a><br></br>
            <a href="#" >IEEE RAS MEDIUM</a><br></br>
            <a href="#" >VIT VELLORE</a>
          </Col>
          <Col md={3} className="footer-col">
            <h3 style={{color:"white"}}><strong>OUR TEAMS</strong></h3>
            <a href="#" >TECHNICAL</a><br></br>
            <a href="#" >MANAGEMENT</a><br></br>
            <a href="#" >DESIGN</a>
          </Col>
        <Col md={1} className="footer-col">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href=""
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/company/ieee-ras-vit/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/ieeerasvit?igsh=MWplNGRpOHhpNjQwZg=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
        </Col>
        </Row>
      </Container>
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by IEEE-RAS</h3>
        </Col>
        <Col md="4" className="footer-copywright">
        </Col>

        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href=""
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"

              >
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/company/ieee-ras-vit/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ieeerasvit?igsh=MWplNGRpOHhpNjQwZg=="
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
