import React from "react";
import { Navbar, Footer, Sidebar } from "./components";
import { Home, Guide, Contact, Portfolio, ScheduleTable, ScheduleBooking,  } from "./page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/guide/*" element={<Guide />} />
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/portfolio/*" element={<Portfolio />} />
          <Route exact path="/schedule" element={<ScheduleTable />} />
          <Route exact path="/booking" element={<ScheduleBooking />} />
        </Routes>
        <Footer />
        <Sidebar />
      </Router>
    </div>
  );
}

export default App;
