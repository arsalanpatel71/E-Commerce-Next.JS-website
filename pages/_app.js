import Footer from "@/components/Footer";
import TopHeader from "@/components/TopHeader";
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
