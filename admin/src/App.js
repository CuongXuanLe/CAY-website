import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AdminHome } from './page';

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
        <Route path="/" element={<AdminHome/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
