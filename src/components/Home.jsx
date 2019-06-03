import React, { Component } from "react";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Row>
              <Col>
                <Jumbotron>
                  <Image
                    src="assets/CodeTalker_Horz_4c.png"
                    width="500"
                    className="pl-3 pr-3 img-fluid"
                  />
                  <h4 className="pl-3 pr-3 pt-4">
                    Natives empowering Natives to digitally create and share
                    ideas to transform communities.
                  </h4>
                </Jumbotron>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} md={4} className="">
                <h2>Coding</h2>
                <p>
                  As Natives who love to code, we want to create and share our
                  programs to give students and professionals an opportunity to
                  participate in the ever-growing IT industry.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h2>Native</h2>
                <p>
                  Knowing every Native American community is unique, we listen,
                  learn and experiment to create custom programs and courses
                  specific to the needs of all stakeholders.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h2>Reciprocate</h2>
                <p>
                  Whether its learning a new programming language or discovering
                  robotics, reciprication is an essential piece of community
                  empowerment and self-determination.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
