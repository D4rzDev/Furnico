// pages/_app.js
import { CartProvider } from '../context/CartContext';
import Product from './ProductDetails';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
