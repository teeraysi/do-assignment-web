import React from 'react';
import {
  Container, Row, Col, Button
} from 'reactstrap'

import scgApi from '../../api/scgApi';

import AnswerList from './components/answerList';

interface IState {
  answerList: any[];
  showResult: boolean;
}

export class FindXYZComponent extends React.Component<{}, IState> {
  
  constructor(props) {
    super(props);

    this.state = {
      answerList: [],
      showResult: false
    }
  }

  async answerOnClick(e) {
    e.preventDefault();

    const result = await scgApi.findXYZ();
    console.log(result);
    this.setState({ 
      answerList: result.data ,
      showResult: true
    });
  }

  async clear(e) {
    e.preventDefault();

    this.setState({showResult: false});
  }

  render() {
    return (
      <Container>
        <Row style={{paddingTop: '20px'}}>
          <Col>
            <h5>X, 5, 9, 15, 23, Y, Z - Please finding X, Y, Z value</h5>                  
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='primary' onClick={this.answerOnClick.bind(this)}>Get Answer</Button>
            &nbsp;&nbsp;
            <Button color='danger' onClick={this.clear.bind(this)}>Clear</Button>
            <br />
            <br />
            {this.state.showResult && <AnswerList dataList={this.state.answerList} />}
          </Col>
        </Row>
      </Container>
      
    )
  }
}

export default FindXYZComponent;
