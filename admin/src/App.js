import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AdminPage from './page/AdminPage/AdminPage';
const App = () => {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<AdminPage/>}/>      
      </Routes>
    </Router>
  );
}

export default App;
