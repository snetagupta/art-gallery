import Companies from "./components/Companies";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";
import Benefits from "./components/Benefits";
import Article from "./components/Article";
import Footer from "./components/Footer";
import Login from "./Pages/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
