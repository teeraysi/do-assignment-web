import React from 'react';
import Layout from '../src/components/layout';

import PageComponent from '../src/modules/resturant';

export class FindXYZPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageComponent></PageComponent>
      </Layout>
    );
  }
}

export default FindXYZPage;
