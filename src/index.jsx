import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Mobile from "./pages/mobile";
import Appliance from "./pages/appliance";
import About from "./pages/about";
import Kdigital from "./pages/k-digital";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/appliance" element={<Appliance />} />
        <Route path="/about" element={<About />} />
        <Route path="/k-digital" element={<Kdigital />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);
