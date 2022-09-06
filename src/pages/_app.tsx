import { AppProps } from 'next/app';
import React from 'react';
import '../styles/global.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
