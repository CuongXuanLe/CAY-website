import React from "react";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, Guide, Contact } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/guide/*" element={<Guide />} />
          <Route exact path="/contact" element={<Contact />}></Route>
        </Routes>
        <Footer />
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
