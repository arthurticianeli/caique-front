import { AppProps } from "next/app";
import "../components/loading/loading-component.css";
import "../components/posts/styles.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
