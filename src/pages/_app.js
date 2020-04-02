// dependencies
import React from "react";
import NextApp from "next/app";
import Head from "next/head";

// containers
import Navigation from "../containers/Navigation";

// styles
import "./styles.css";

class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>webcompat metrics client</title>
          <meta name="author" content="webcompat.com team" />
          <meta
            name="description"
            content="An application to power metrics for webcompat.com"
          />
        </Head>
        <Navigation>
          <Component {...pageProps} />
        </Navigation>
      </React.Fragment>
    );
  }
}

export default App;
