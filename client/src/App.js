import React from "react";
import { Navbar } from "./components";
import { Home } from "./page";
import { Footer } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/home" element={<Home />}></Route>
        </Routes>

        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
