
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Trending from "./Pages/Trending";
import Sale from "./Pages/Sale";
import NewArrival from "./Pages/NewArrival";
import Products from "./Pages/Products";
import Profile from "./Pages/Profile";


function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         <Route path="/trending" element={<Trending/>}/>
         <Route path="/sale" element={<Sale/>}/>
         <Route path="/new-arrival" element={<NewArrival/>}/>
         <Route path="/products" element={<Products/>}/>
         <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
