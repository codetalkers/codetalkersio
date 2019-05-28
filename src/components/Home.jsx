import React, { Component } from "react";
import { Jumbotron, Container, Col, Row, Image } from "react-bootstrap";
import "./Home.css";

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={{ span: 10, offset: 1 }}>
            <Row>
              <Col>
                <Jumbotron>
                  <Image
                    src="assets/CodeTalker_Horz_4c.png"
                    width="500"
                    className="pl-3 pr-3"
                  />
                  <h3 className="pl-3 pr-3 pt-4">
                    A non-profit with a start-up approach to empower Natives
                    digitally create and share ideas to transform communities.
                  </h3>
                </Jumbotron>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col xs={12} md={4} className="">
                <h2>Coding</h2>
                <p>
                  As Natives who love to code, we want to create and share our
                  courses to give students and professionals an opportunity to
                  participate in the ever-growing, high-demand IT industry.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h2>Native</h2>
                <p>
                  Knowing every Native American community is unique, we listen,
                  learn and experiment to create custom coding programs and
                  courses specific to the needs of the people.
                </p>
              </Col>
              <Col xs={12} md={4}>
                <h2>Recipricate</h2>
                <p>
                  Whether its learning a new programming language or discovering
                  cloud computing, reciprication is an essential piece of
                  community empowerment and self-determination.{" "}
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
