import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial message="We had our Dropbox of thousands of files decluttered almost
        immediately." messageBy={"Jennie Moeller, Art Director, Literati"}/>
     <Companies />
        <Overview/>

    
     

    </div>
  );
}

export default App;
