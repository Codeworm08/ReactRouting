import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UserContext from './UserContext';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Catalog from './components/Catalog';
import Course from './components/Course';
import { useContext } from 'react';
import SignOut from './components/SignOut';
import Dashboard from './components/Dashboard';
function App() {
  const {isLoggedIn}=useContext(UserContext);
  return (
    <>
    <div class="Nav">
      {isLoggedIn? (
        <>
        <Link to="/signout">Log Out</Link>)
        <Link to="/dash">Dashboard</Link>)
        </>
      )
        :
      (
        <>
        <Link to="/register">Register</Link>
        <Link to="/signin">SignIn</Link>
        </>
      )}
      <Link to="/courses">Courses</Link>
    </div>
    
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signout" element={<SignOut />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/courses" element={<Catalog />}/>
        <Route path="/course/:courseName" element={<Course />}/>
        <Route path="/dash" element={<Dashboard />}/>
      </Routes>
    </>
  );
}

export default App;
