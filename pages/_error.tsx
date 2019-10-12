import React from 'react';
import Head from 'next/head';
import NextLink from 'next/link'


export interface IProps {
  statusCode: number;
}

interface IState { }

interface IErrorParam {
  res: { statusCode: number };
  jsonPageRes: {
    status: number;
  };
}

class Error extends React.PureComponent<IProps, IState> {
  static getInitialProps({ res, jsonPageRes }: IErrorParam) {
    let { statusCode } = res;
    if (!statusCode && jsonPageRes) {
      statusCode = jsonPageRes.status;
    }

    return { statusCode };
  }

  render() {
    let { statusCode } = this.props;
    let title = 'Something went wrong';
    let msg = 'There was an error processing your request. Try reloading!';
    if (statusCode === 404) {
      title = 'Not Found';
      msg =
        'The page you are looking for might have been removed had its name changed or is temporarily unavailable.';
    } else if (statusCode === 403) {
      title = 'Forbidden';
      msg = "You don't have permission to access on this page!";
    }
    if (!statusCode) {
      statusCode = 500;
    }
    const statusString = statusCode.toString();

    return (
      <React.Fragment>
        <Head>
          <title>
            {statusCode} {title}
          </title>
        </Head>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>
                {statusString.charAt(0)}
                <span>{statusString.charAt(1)}</span>
                {statusString.charAt(2)}
              </h1>
            </div>
            <p>{msg}</p>
            <NextLink href="/">
              <a>Home Page</a>
            </NextLink>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Error;
