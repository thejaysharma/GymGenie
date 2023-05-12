import React from "react";
import Nav from "../Nav/Nav";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Footer from "../Pages/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Footer />
    </div>
  );
}
