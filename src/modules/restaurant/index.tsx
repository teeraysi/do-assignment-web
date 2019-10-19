import React from 'react';
import {
  Container, Row, Col, Button,
  Card, CardTitle, CardText
} from 'reactstrap';

import scgApi from '../../api/scgApi';


interface IState {
  answerResult: any;
  loading: boolean;
}

export class RestaurantComponent extends React.Component<{}, IState> {

  constructor(props) {
    super(props);

    this.state = {
      answerResult: {},
      loading: false
    }
  }

  showLoading(show: boolean) {
    this.setState({
      loading: show
    });
  }

  openMap(placeId: string) {
    const url = 'https://www.google.com/maps/place/?q=place_id:' + placeId;

    window.open(url, '_blank');
  }

  async onClick_GetAnswer(e) {
    e.preventDefault();

    this.showLoading(true);
    
    const result = await scgApi.searchRestaurant("Bangsue Bangkok");
    this.setState({
      answerResult: result
    }, () => {this.showLoading(false);});    
  }

  clear() {
    this.setState({
      answerResult: []
    })
  }

  generateCards() {
    const { answerResult } = this.state;
    if (answerResult && answerResult.results && answerResult.results.length > 0) {
      return answerResult.results.map(item => (
        <Col sm="6" key={item.place_id}>
          <Card body>
            <CardTitle><strong>Name:</strong> {item.name}</CardTitle>
            <CardText>
              
                <p><strong>Address:</strong> {item.formatted_address}</p>
                <p><strong>Rating:</strong> {item.rating}</p>
              
            </CardText>
            <Button color='success' onClick={() => { this.openMap(item.place_id)}} >Open Map</Button>
          </Card>
        </Col>
      ))
    }

    return null;
  }

  render() {
    return (
      <Container>
        <Row style={{paddingTop: '20px'}}>
          <h5>Finding all restaurants in Bangsue area</h5>
        </Row>

        <Row>
          <Col>
            <div>
              <Button color='primary' onClick={this.onClick_GetAnswer.bind(this)}>Get Answer</Button>
              &nbsp;&nbsp;
            <Button color='danger' onClick={this.clear.bind(this)}>Clear</Button>
              { this.state.loading && <span style={{paddingLeft: '20px'}}>Please wait for Loading....</span> }
            </div>
          </Col>
        </Row>
        
        <Row style={{paddingTop: '20px'}}>
          {!this.state.loading && this.generateCards()}
        </Row>
      </Container>
      
    )
  }
}

export default RestaurantComponent;
