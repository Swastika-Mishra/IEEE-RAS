import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import BoardCard from "./BoardCards";
import Particle from "../Particle";
import faculty from "../../assets/Home/faculty.png";
import yug from "../../assets/Home/yug.png";
import gauri from "../../assets/Home/gauri.png";
import aditya from "../../assets/Home/aditya.png";
import ani from "../../assets/Home/ani.png";
import akshar from "../../assets/Home/akshar.png";
import induja from "../../assets/Home/induja.png";
import stuti from "../../assets/Home/stuti.png";
import parth from "../../assets/Home/parth.png";
import vaibhav from "../../assets/Home/vaibhav.png";
import keshav from "../../assets/Home/keshav.png";

function Board() {
  return (
    <Container fluid className="home-board-section">
      <Particle />
      <Container>
        <h1 className="purple text-center mb-4">FACULTY</h1>
        <Row className="justify-content-center mb-4">
          <Col md={3} className="board-card faculty-box">
            <BoardCard imgPath={faculty} title="Sumit Kumar Jindal" description="" />
          </Col>
        </Row>
        <h1 className="purple text-center mb-4">BOARD</h1>
        <Row className="justify-content-center mb-4">
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={yug} title="Yugmita Katyayan" description="Chairperson"/>
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={gauri} title="Gaurpriya Singh Roy" description="Vice-Chairperson" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={aditya} title="Adtiya Purwar" description="Secretary" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={ani} title="Anirudh Singareddy" description="Co-Secretary" />
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={akshar} title="Akshar Patel" description="Technical Head" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={induja} title="Induja S" description="Design Head" />
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={stuti} title="Stuti Kothari" description="Finance Head" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={parth} title="Parth Agarwal" description="Events Head" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={vaibhav} title="Vaibhav Kapoor" description="Management Head" />
          </Col>
          <Col sm={6} md={4} lg={3} className="board-card">
            <BoardCard imgPath={keshav} title="Keshav Gupta" description="R&D Head" />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Board;
