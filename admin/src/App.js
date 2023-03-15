import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import { AdminHome, AdminGuide, AdminFooter, ChangePassword, Login, Navigation, Schedule, AppointmentDetails, AppointmentEdit, AppointmentCreate, Portfolio } from './page';

const App = () => {
  function ScrollToTop() {

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    console.log(pathname)

    return null;
  }
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home" element={<AdminHome/>}/>
        <Route path="/adminGuide" element={<AdminGuide/>}/>
        <Route path="/navigation" element={<Navigation/>} />
        <Route path="/adminPortfolio/*" element={<Portfolio/>} />
        <Route path="/adminFooter" element={<AdminFooter/>}/>
        <Route path="/changePassword" element={<ChangePassword/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route exact path="/details/:id" element={<AppointmentDetails/>} />
        <Route path="/appointmentedit/:id" element={<AppointmentEdit />} />
        <Route path="/appointmentcreate" element={<AppointmentCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
