import "bootswatch/dist/lux/bootstrap.min.css";
import "../global.css";
import Head from "next/head";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Gabriel Villarroel</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};
export default MyApp;
