import { Header } from "../components/Header"
import '../styles/global.scss';
import Head from 'next/head';
function MyApp({ Component, pageProps }) {
  
  return (
    <>
    <Head>
        <title>Betocbl</title>
      </Head>
    <Header />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
