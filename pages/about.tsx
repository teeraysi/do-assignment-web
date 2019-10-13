import React from 'react';
import Layout from 'src/components/layout';
import AboutComp from 'src/modules/about';

export class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <AboutComp></AboutComp>
      </Layout>
    )
  }
}

export default AboutPage;
