import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';


export default class extends Document {
  
  render() {

    const globalStyles = `
      * {
        font-family: 'Prompt', sans-serif;
      }

      body {
        margin: 0;
        padding: 0;
      } 
      `;

    return (
      <html lang="th">
        <Head>
          <base href="/" />
          <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
          <meta httpEquiv="content-language" content="th, en" />
          <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
          <link href="https://fonts.googleapis.com/css?family=Kanit|Prompt|Roboto&display=swap" rel="stylesheet"></link>
          <style type='text/css' dangerouslySetInnerHTML={{__html: globalStyles}} />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
