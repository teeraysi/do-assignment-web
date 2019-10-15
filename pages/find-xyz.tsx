import React from 'react';
import Layout from '../src/components/layout';

import FindXYZComponent from '../src/modules/find-xyz';

export class FindXYZPage extends React.Component {
  render() {
    return (
      <Layout>
        <FindXYZComponent></FindXYZComponent>
      </Layout>
    );
  }
}

export default FindXYZPage;
