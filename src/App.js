import React from "react";
import './App.css';
// Pages
import Home from "./screens/Home";
import About from "./screens/About";
import AboutAuthor from "./screens/AboutAuthor";
import NotFound from "./screens/NotFound";
// React Router
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/About/about-author" element={<AboutAuthor />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
