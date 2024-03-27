// pages/_app.js
import Navbar from "../components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ProductCard from "@/components/ProductCard/ProductCard";
import ProductListing from "@/components/ProductListing/ProductListing";
import ProductSort from "@/components/ProductSort/ProductSort";
import TopHeader from "@/components/TopHeader/TopHeader";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <TopHeader />
      <Component {...pageProps} />

      <Footer />
    </>
  );
}

export default MyApp;
