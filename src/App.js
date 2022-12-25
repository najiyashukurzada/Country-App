import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Comps
import Navbar from "./components/navbar/Navbar";

// Styles
import "aos/dist/aos.css";
import Countries from "./components/pages/home/Countries";
import CountryDetails from "./components/pages/country/Details";

function App() {
  const AOS = require("aos");
  useEffect(() => {
    AOS.init();
  }, [AOS]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/view/:countryCodes" element={<CountryDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
