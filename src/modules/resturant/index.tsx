import React from 'react';
import {
  Container, Row, Col, Button,
  Card, CardTitle, CardText
} from 'reactstrap';

import scgApi from '../../api/scgApi';


interface IState {
  answerResult: any;
}

export class ResturantComponent extends React.Component<{}, IState> {

  constructor(props) {
    super(props);

    this.state = {
      answerResult: {}
    }
  }

  async onClick_GetAnswer(e) {
    e.preventDefault();

    const result = await scgApi.searchResturant("Bangsue Bangkok");
    this.setState({
      answerResult: result
    });

    console.log(result);
  }

  generateCards() {
    const { answerResult } = this.state;
    if (answerResult && answerResult.results && answerResult.results.length > 0) {
      return answerResult.results.map(item => (
        <Col sm="6" key={item.place_id}>
          <Card body>
            <CardTitle>{item.name}</CardTitle>
            <CardText>
              
                <p>{item.formatted_address}</p>
                <p>Rating: {item.rating}</p>
              
            </CardText>
            <Button>Open Map</Button>
          </Card>
        </Col>
      ))
    }

    return null;
  }

  render() {
    return (
      <Container>
        <h5>Resturant Component</h5>

        <Row>
          <Col>
            <Button color='primary' onClick={this.onClick_GetAnswer.bind(this)}>Get Answer</Button>
          </Col>
        </Row>
        <Row>
          {this.generateCards()}
        </Row>
      </Container>
      
    )
  }
}

export default ResturantComponent;
