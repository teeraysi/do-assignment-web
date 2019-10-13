import React from 'react';
import Link from 'next/link'
import { Button, Tooltip, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, NavItem, 
  Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.less';


interface IState {
  isNavbarOpen: boolean;
}

export class IndexPage extends React.Component<{}, IState>{

  constructor(props) {
    super(props);

    this.state = {
      isNavbarOpen: false
    }
  }

  toggle() {
    const { isNavbarOpen } = this.state;
    this.setState({ isNavbarOpen: !isNavbarOpen });
  }

  render() {



    return (
      <React.Fragment>
        <Navbar color='light' light expand="md">
          <NavbarBrand href="#">SCG Assignment</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                <NavLink href="/">Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/about">
                  <NavLink href="/about">About</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        {this.props.children}

        <footer id="footer">
          <Container>
            <Row>
              <Col sm={4}>Pages</Col>
              <Col sm={4}></Col>
              <Col sm={4}>About</Col>
              
              
            </Row>
            <Row>
              <Col size={12}>Copyright (c) 2019</Col>
            </Row>
            </Container>
            
        </footer>
        </React.Fragment>      
    );
  }
}

export default IndexPage;
