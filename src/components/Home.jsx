import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <Image src="assets/CodeTalker_Horz_4c.png" width="500" />
          <h2>Empowering Natives to digitally create and share ideas to transform communities.</h2>
          <h3>Coming Soon</h3>
        </Jumbotron>
      </Grid>
    )
  }
}
