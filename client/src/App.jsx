import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";
import Benefits from "./components/Benefits";
import Article from "./components/Article";
import Footer from "./components/Footer";

function App() {
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
      <Article/>
      <Footer/>
    </div>
  );
}

export default App;
