import { useState } from "react";
import {
  BrowserRouter,
  Router,
  Routes,
  Route,
  Outlet,
  Navigate,
} 
from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Review from "./components/review.jsx"
import Footer from "./components/footer.jsx";


import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>

          <Route path="/" element={<Home />} />
        </Routes>
        <Review />
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
