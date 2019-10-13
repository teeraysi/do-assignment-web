import React from 'react';
import { Button, Tooltip, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavLink, NavItem } from 'reactstrap'

import Layout from '../src/components/layout'

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
        <div>
          Home
        </div>
      </Layout>
      
    );
  }
}

export default IndexPage;
