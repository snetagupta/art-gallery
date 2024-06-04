import React from "react";
import Hero from "../components/Hero";
import Testimonial from "../components/Testimonial";
import Companies from "../components/Companies";
import Overview from "../components/Overview";
import Benefits from "../components/Benefits";
import Article from "../components/Article";

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
