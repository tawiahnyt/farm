/** @format */

import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductandServices from "./pages/ProductandServices";
import ContactUs from "./pages/ContactUs";
import GreenDevelopment from "./pages/GreenDevelopment";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products-and-services" element={<ProductandServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/green-development" element={<GreenDevelopment />} />
      </Routes>
    </Router>
  );
}

export default App;