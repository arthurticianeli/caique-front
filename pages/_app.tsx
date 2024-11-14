import Layout from "@/components/layout/layout";
import { AppProps } from "next/app";
import Head from "next/head";
import "../components/loading/loading-component.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Caique Marquez Blog</title>
      </Head>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default MyApp;
