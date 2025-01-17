/** @format */

import {
  Routes,
  Route,
  useLocation,

} from "react-router-dom";


import {AnimatePresence} from 'framer-motion'
import Home from "../pages/Home";
import About from "../pages/About";
import ProductandServices from "../pages/ProductandServices";
import ContactUs from "../pages/ContactUs";
import GreenDevelopment from "../pages/GreenDevelopment";

const AnimatedRoute = () => {
    const location = useLocation()

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products-and-services" element={<ProductandServices />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/green-development" element={<GreenDevelopment />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
