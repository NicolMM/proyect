import NavBar from "@/components/Navbar/NavBar";
import "./globals.css";
import "./Text.css"
import "./settings.css"

import Product from "@/components/Product/Product";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <>
    
        <NavBar/>
        <Product/>
        <Footer/>

    </>
  );
}
