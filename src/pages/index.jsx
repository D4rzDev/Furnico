import Layout from "@/app/layout";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import Product from "@/components/Product";
import Reviews from "@/components/Reviews";
import { CartProvider } from "@/context/CartContext";
import { Main } from "next/document";

const Home = ({children}) => {
  return (
    <CartProvider>
      <Layout>
        <Hero/>
        <Product/>
        <Cta/>
        <Reviews/>
        {children}
      </Layout>
    </CartProvider>
  );
};

export default Home;
