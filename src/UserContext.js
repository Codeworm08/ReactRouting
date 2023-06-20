import React, { createContext, useState } from 'react';
const UserContext = createContext();
export const UserProvider = ({children}) => {
    const [users,setUsers] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedUser,setUser] = useState(null);
    const registerUser = (username,password) => {
        if(users[username])
        {
            alert("Username already exists!.");
            return;
        }
        setUsers((prevUsers)=>({
            ...prevUsers,
            [username]: {password}
        }));
        alert("Registration Successful!");
    };
    const loginUser = (username, password) => {
        if(users[username] && users[username].password === password) {
            setIsLoggedIn(true);
            setUser(username);
            alert('Login successful');
        }
        else
        {
            setIsLoggedIn(false);
            setUser(null);
            alert('Invalid Username or password');
        }
    };
    const value={users,isLoggedIn,loggedUser,registerUser,loginUser};
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );

};
export default UserContext;