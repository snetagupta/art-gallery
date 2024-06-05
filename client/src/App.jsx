
import Login from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Trending from "./Pages/Trending";
import Sale from "./Pages/Sale";
import NewArrival from "./Pages/NewArrival";


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
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
