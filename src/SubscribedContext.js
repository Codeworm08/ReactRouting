import { createContext, useState, useEffect } from 'react';

export const SubscribedContext = createContext();

export const SubscribedProvider = ({ children }) => {
  const [subscribedUsers, setSubscribedUsers] = useState(()=>{
    try
    {
        const storedSubscribedUsers = localStorage.getItem('subscribedUsers');
        return storedSubscribedUsers? JSON.parse(storedSubscribedUsers):{};
    }
    catch(error)
    {
        console.error('Error parsing subscribers from local storage.',error);
        return [];
    }
  });


  useEffect(() => {
    localStorage.setItem('subscribedUsers', JSON.stringify(subscribedUsers));
  }, [subscribedUsers]);

  const subscribeUser = (username, courses) => {
    setSubscribedUsers((prevUsers) => {
        const userSubscriptions = prevUsers[username] || [];

        // Check if the user is already subscribed to the course
        if (userSubscriptions.includes(courses)) {
          // User is already subscribed, handle accordingly (e.g., show a message)
          return prevUsers;
        }
    
        const updatedSubscriptions = {
          ...prevUsers,
          [username]: [...userSubscriptions, courses],
        };
    
        return updatedSubscriptions;
      });
  };

  const value = {
    subscribedUsers,
    subscribeUser,
  };

  return (
    <SubscribedContext.Provider value={value}>{children}</SubscribedContext.Provider>
  );
};
