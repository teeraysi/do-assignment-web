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
    console.log(result);
    this.setState({ answerList: result.data });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h5>X, 5, 9, 15, 23, Y, Z - Please finding X, Y, Z value</h5>                  
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
