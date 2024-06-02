import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Testimonial message="We had our Dropbox of thousands of files decluttered almost
        immediately." messageBy={"Jennie Moeller, Art Director, Literati"}/>
    </div>
  );
}

export default App;
