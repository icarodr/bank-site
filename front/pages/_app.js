import '../styles/globals.css'
import Nav from '../components/NavBar/NavBar';

function MyApp({ Component, pageProps }) {
  return (
    <>
     <Component {...pageProps} />
    </>
  );
}

export default MyApp
