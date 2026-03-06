import React from "react";
import Hero from "../sections/Hero/Hero";
import Services from "../sections/Services";
import Trust from "../sections/Trust";
import Testimonials from "../sections/Testimonials";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
import heroLogoVideo from "../assets/videos/hero-logo.webm";
import "./home-page.css";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Services />
      <Trust />
      <Testimonials />
      <Contact />
      <Footer />

      <video
        className="home-page-floating-video"
        src={heroLogoVideo}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      />
    </>
  );
};

export default HomePage;
