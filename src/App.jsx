/** @format */


import { BrowserRouter as Router, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AnimatedRoute from "./components/AnimatedRoute";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <NavBar />
        <Outlet />
        <AnimatedRoute />
        <Footer />
      </Router>
      <Analytics />
    </>
  );
}

export default App;