import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Components
// import TopBar from "./components/TopBar";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// Pages
import Home from "./pages/HomePage";
import Causes from "./pages/CausesPage.jsx";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";

export default function App() {
  
  return (
    <>
      <Router>
        <Navbar />

        {/* Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback */}
          <Route
            path="*"
            element={
              <div className="h-screen flex items-center justify-center text-2xl font-semibold">
                Page Not Found
              </div>
            }
          />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
      
    </>

    
  );
}
