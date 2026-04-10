import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import ScrollToTop from "./components/ScrollToTop";
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
          {/* <Route path="/pages" element={<Pages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/event" element={<Event />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/project" element={<Project />} />
          <Route path="/donate" element={<Donate />} /> */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}