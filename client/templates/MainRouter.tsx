import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ScrollMemory from 'react-router-scroll-memory';
import Routes from './Routes';
import { HelmetProvider } from 'react-helmet-async';

export default class MainRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <ScrollMemory />
          <HelmetProvider>
            {/*
             * Default to the regular title; this can be overridden
             * by further calls to <Head>
             */}
            <Routes />
          </HelmetProvider>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
