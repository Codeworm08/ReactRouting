import './App.css';
import { Link,Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from './UserContext';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';
import Register from './components/Register';

function App() {
  const {isLoggedIn,loggedUser} = useContext(UserContext);
  return (
    <>
      <div className='Nav'>
        {isLoggedIn? (<Link to="/signout">Sign Out</Link>):(
          <>
          <Link to="/signin">Login</Link>
          <Link to="/register">Register</Link>
          </>
          )}                
      </div>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/signout" element={<SignOut />} />
        <Route path="/register" element={<Register />}/>
      </Routes>
    </>
  );
}

export default App;
