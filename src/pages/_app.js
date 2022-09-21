import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";

import Page from "../components/Page";
import { WalletProvider, CHAIN_TYPES } from "blocks/Web3Auth/config";

import "react-lazy-load-image-component/src/effects/blur.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-image-lightbox/style.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Virtualground</title>
      </Head>
      <WalletProvider chainType={CHAIN_TYPES.mumbai}>
        <Page>
          <Component {...pageProps} />
        </Page>
      </WalletProvider>
    </React.Fragment>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
