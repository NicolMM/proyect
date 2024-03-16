import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import "./Text.css"
import "./settings.css"

import Product from "@/components/Product/Product";
import Footer from "@/components/Footer/Footer";
import ImageProduct from "@/components/ImageProduct/ImageProduct";
import SwipeProduct from "@/components/SwipeProduct/SwipeProduct";
import GoogleMap from "@/components/Maps/Maps";


export default function Home() {
  return (
    <>
    
        <NavBar/>
        <Product/>
        <Footer/>
        <ImageProduct/>
<SwipeProduct/>
<GoogleMap/>

    </>
  );
}
