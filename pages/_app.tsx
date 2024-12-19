import Layout from "@/components/layout/layout";
import { BannersProvider } from "@/hooks/BannersContext";
import { PostsDestaqueProvider } from "@/hooks/PostsDestaqueContext";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/custom.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Caique Marquez</title>
        <link rel="icon" href="/favicon.ico" />

      </Head>
      <BannersProvider>
        <PostsDestaqueProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PostsDestaqueProvider>
      </BannersProvider>
    </>
  );
}

export default MyApp;
