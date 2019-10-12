import React from 'react';
import { Button, Tooltip } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export class IndexPage extends React.Component{
  render() {
    return (
      <div>
        <p>
        This is a <a href="#" id="TooltipExample">tooltip</a> example.
        <Tooltip target="TooltipExample">
          <div>Content</div>>
        </Tooltip>
      </p>
      <Button color="primary">Test</Button>
      </div>
      
    );
  }
}

export default IndexPage;
