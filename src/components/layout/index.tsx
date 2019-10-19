import React from 'react';
import Link from 'next/link'
import { Button, Tooltip, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, NavItem, 
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
        <Navbar color='secondary' dark expand="md">
          <NavbarBrand href="/">SCG Assignment</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />
          <Collapse isOpen={this.state.isNavbarOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link href="/">
                <NavLink href="/">Home</NavLink>
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar color='secondary'>
                <DropdownToggle nav caret>
                  Assignment
                </DropdownToggle>
                <DropdownMenu right color='dark'>

                  <Link href='/find-xyz'>
                    <DropdownItem>
                      Find XYZ
                    </DropdownItem>
                  </Link>

                  <Link href='/restaurant'>
                    <DropdownItem>
                      Restaurant
                    </DropdownItem>
                  </Link>
                  
                  <DropdownItem divider />

                  <Link href='/line'>
                    <DropdownItem>
                      Line Messaging
                    </DropdownItem>
                    </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
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
              <Col size={12}>
                <div style={{textAlign: 'center'}}>Mr.Teerayut Sinlan  :: Copyright (c) 2019</div>
              </Col>
            </Row>
            </Container>
            
        </footer>
        </React.Fragment>      
    );
  }
}

export default IndexPage;
