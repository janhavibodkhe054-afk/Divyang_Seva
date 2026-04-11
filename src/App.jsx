import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/ScrollToTop";
import Work from "./pages/Work";
// Pages

export default function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Navbar />

      <div className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}