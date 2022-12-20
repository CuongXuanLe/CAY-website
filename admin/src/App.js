import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AdminHome, AdminGuide, AdminFooter, ChangePassword, Login, Navigation, Portfolio } from './page';

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
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<AdminHome/>}/>
        <Route path="/adminGuide" element={<AdminGuide/>}/>
        <Route path="/navigation" element={<Navigation/>} />
        <Route path="/adminPortfolio/*" element={<Portfolio/>} />
        <Route path="/adminFooter" element={<AdminFooter/>}/>
        <Route path="/changePassword" element={<ChangePassword/>} />
      </Routes>
    </Router>
  );
}

export default App;
