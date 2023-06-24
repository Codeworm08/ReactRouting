import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './UserContext';
import { CourseProvider } from './CourseContext';
import { SubscribedProvider } from './SubscribedContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
    <CourseProvider>
    <SubscribedProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SubscribedProvider>
    </CourseProvider>
    </UserProvider>
  </React.StrictMode>
 
);

