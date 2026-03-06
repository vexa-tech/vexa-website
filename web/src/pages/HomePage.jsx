import React from "react";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services";
import Trust from "../sections/Trust";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
