import React, { useState, useEffect } from "react"

// sections
import Hero from "./sections/Hero"
import Wallet from "./sections/Wallet"
import Marketplace from "./sections/Marketplace"
import OwnNFT from "./sections/OwnNFT"
import Discover from "./sections/Discover"
import Creators from "./sections/Creators"
import FooterBanner from "./sections/FooterBanner"

// components
import Nav from "./components/Nav"
import NavResponsive from "./components/NavResponsive"
import Footer from "./components/Footer"

// styles
import './assets/styles/main.css'

function App() {

    const size = useWindowSize()

    const [navbar, setNavbar] = useState(<Nav/>)

    // screen size capture hook
    function useWindowSize() {
        const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
        });
        useEffect(() => {
        function handleResize() {
            setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
        }, []);
        return windowSize;
    }

    // navbar breakpoint
    useEffect(() => {
        window.innerWidth <= 1000 ? setNavbar(<NavResponsive/>) : setNavbar(<Nav/>)
    }, [size])

    return (
      <div className="App">
        <header>
          {navbar}
        </header>
        <Hero/>
        <Wallet/>
        <Marketplace/>
        <OwnNFT/>
        <Discover/>
        <Creators/>
        <FooterBanner/>
        <Footer/>
      </div>
    )
}

export default App
