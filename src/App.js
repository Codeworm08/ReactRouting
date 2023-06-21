import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Landing from './components/Landing';
import SignIn from './components/SignIn';
import Register from './components/Register';
function App() {
  return (
    <UserProvider>
    <>
      <Link to="/register">Register</Link>
      <Link to="/signin">SignIn</Link>
    </>
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/signin" element={<SignIn />}/>
        <Route path="/register" element={<Register />}/>
      </Routes>
    </UserProvider>
  );
}

export default App;
