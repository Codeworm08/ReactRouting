import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import UserContext from './UserContext';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Catalog from './components/Catalog';
import { useContext } from 'react';
import SignOut from './components/SignOut';
function App() {
  const {isLoggedIn,loggedUser}=useContext(UserContext);
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
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signout" element={<SignOut />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/courses" element={<Catalog />}/>
      </Routes>
    </>
  );
}

export default App;
