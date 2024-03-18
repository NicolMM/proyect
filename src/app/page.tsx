import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import "./Text.css"
import "./settings.css"

import Product from "@/components/Product/Product";
import Footer from "@/components/Footer/Footer";
import GoogleMap from "@/components/Maps/Maps";
import Banner from "@/components/Banner/Banner";
import SwipeProduct from "@/components/SwipeProduct/SwipeProduct";
import SliderTypes from "@/components/SliderTypes/SliderTypes";


export default function Home() {
  return (
    <>

      <NavBar />
      <Product />
      <Banner />
      <SliderTypes />
      {/* <hr></hr> */}
      <GoogleMap />
      <Footer />

    </>
  );
}
