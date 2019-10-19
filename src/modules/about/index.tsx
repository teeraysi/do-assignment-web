import React from 'react';
import { Container, Row, Col, 
  Nav, NavItem, NavLink, 
  TabContent, TabPane,
  Card, CardTitle, CardText
} from 'reactstrap';

import BasicTab from './components/basic';
import GraduateTab from './components/graduate';
import ExperienceTab from './components/experience';

interface IState {
  activeTab: string;
}

export class About extends React.Component<{}, IState> {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'basic'
    }
  }

  setActiveTab(tabId) {
    this.setState({activeTab: tabId});
  }

  toggle(tab) {
    const { activeTab } = this.state;

    if (activeTab !== tab) {
      this.setActiveTab(tab);
    }
  }

  render() {

    const { activeTab } = this.state;

    const classActive = activeTab 
    return (
      <Container >        
        <Row style={{paddingTop: '20px'}}>
          <Col>
            
            <Card body>    
            <h5>About Me</h5>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={activeTab === 'basic' ? 'active' : null}
                  onClick={() => { this.toggle('basic')} } 
                >
                  Basic
                </NavLink>
              </NavItem>  
              <NavItem>
              <NavLink
                  className={activeTab === 'graduate' ? 'active' : null}
                  onClick={() => { this.toggle('graduate')} } 
                >
                  Graduate
                </NavLink>
              </NavItem>              
              <NavItem>
              <NavLink
                  className={activeTab === 'experience' ? 'active' : null}
                  onClick={() => { this.toggle('experience')} } 
                >
                  Position &amp; Experience
                </NavLink>
              </NavItem> 
            </Nav>
            <TabContent activeTab={this.state.activeTab}>              
              <TabPane tabId="basic">
                <BasicTab></BasicTab>
              </TabPane>
              <TabPane tabId="graduate">
                <GraduateTab></GraduateTab>
              </TabPane>              
              <TabPane tabId="experience">
                <ExperienceTab></ExperienceTab>
              </TabPane>
            </TabContent>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default About;
