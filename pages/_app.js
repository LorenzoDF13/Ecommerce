import Header from '../components/Header';
import Store from '../Store';
import '../styles/globals.css';
import { Provider } from 'react-redux';
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
