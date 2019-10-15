import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap'

import scgApi from '../../api/scgApi';

import AnswerList from './components/answerList';

interface IState {
  answerList: any[];
}

export class FindXYZComponent extends React.Component<{}, IState> {
  
  constructor(props) {
    super(props);

    this.state = {
      answerList: []
    }
  }

  async answerOnClick(e) {
    e.preventDefault();

    const result = await scgApi.findXYZ();
    this.setState({ answerList: result.data });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h5>Assignment: Find XYZ Component</h5>                  
          </Col>        
        </Row>
        <Row>
          <Col>
            <Button color='primary' onClick={this.answerOnClick.bind(this)}>Answer</Button>
            <br />
            <br />
            <AnswerList dataList={this.state.answerList} />

            {/* <ul>
              <li>X = 3</li>
              <li>X = 3</li>
              <li>X = 3</li>
            </ul> */}
          </Col>
        </Row>
      </Container>
      
    )
  }
}

export default FindXYZComponent;
