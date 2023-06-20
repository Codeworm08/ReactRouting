import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Landing from './components/Landing';
function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
    </UserProvider>
  );
}

export default App;
