import React from 'react';
import Link from 'next/link';
import { Button, Tooltip, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, NavItem } from 'reactstrap'

import Layout from '../src/components/layout';
import { Container, Row, Col } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';


interface IState {

}

export class IndexPage extends React.Component<{}, IState>{

  constructor(props) {
    super(props);

  }


  render() {



    return (
      <Layout>
        <Container>
          <Row style={{paddingTop: '20px'}}>
            <Col sm="12">
              <h4>Welcome, This is my assignment.</h4>
              <p><strong>Assignment</strong></p>
              <ul>
                <li>
                  <Link href='/find-xyz'>
                    <a>Find XYZ Value.</a>
                  </Link>
                </li>
                <li>
                  <Link href='/restaurant'>
                    <a>Search restaurant in Bangsue</a>
                  </Link>
                </li>
                <li>
                  <Link href='/line'>
                    <a>Line Messaging API</a>
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Layout>
      
    );
  }
}

export default IndexPage;
