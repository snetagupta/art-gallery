import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/home/Hero"
import Testimonial from "../components/home/Testimonial";
import Companies from "../components/home/Companies";
import Overview from "../components/overview/Overview";
import Benefits from "../components/home/Benefits";
import Article from "../components/home/Article";
import Footer from "../components/common/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial
        message="We had our Dropbox of thousands of files decluttered almost
        immediately."
        messageBy={"Jennie Moeller, Art Director, Literati"}
      />
      <Companies />
      <Overview />
      <Benefits />
      <Article />
      <Footer />
    </div>
  );
};

export default Home;
