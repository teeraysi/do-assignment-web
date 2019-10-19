import App, { Container, NextAppContext } from 'next/app';
import NProgress from 'next-nprogress/component';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component />
        <NProgress color='white'
          options={{ trickleSpeed: 50 }}
          showAfterMs={300}
          spinner
         />
      </Container>
    )
    
  }
}

export default MyApp;
