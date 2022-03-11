import React from "react";
import { AppProps } from "next/app";
import GlobalStyles from "../styles/global";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const MyApp: React.FC<AppProps> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyles />
      <ToastContainer theme="dark" />
    </>
  );
};

export default MyApp;
