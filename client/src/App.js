import React from "react";
import { Navbar, GuideRental } from "./components";
import { Home, Guide } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="/guide" element={<Guide/>}>
            <Route exact path="/guide/rental" element={<GuideRental/>}></Route>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
