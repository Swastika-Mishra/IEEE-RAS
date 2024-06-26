import React, { useState, useEffect } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";


import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home scrollToElement="about" />} />
          <Route path="/event" element={<Home scrollToElement="events"/>} />
          <Route path="/blog" element={<Home scrollToElement="blogs" />} />
          <Route path="/board" element={<Home scrollToElement="board"/>} />
          <Route path="/gallery" element={<Home scrollToElement="gallery"/>} />
          <Route path="/contact" element={<Home scrollToElement="contact"/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>


        <Footer />
        

      </div>
    </BrowserRouter>
  );
}

export default App;
