import { Header } from "../components/Header"
import '../styles/global.scss';

function MyApp({ Component, pageProps }) {
  
  return (
    <><Header />
    <Component {...pageProps} />
    </>
  );
}

export default MyApp
