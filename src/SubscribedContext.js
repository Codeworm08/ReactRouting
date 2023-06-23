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
    setSubscribedUsers((prevUsers) => ({
      ...prevUsers,
      [username]: courses,
    }));
  };

  const value = {
    subscribedUsers,
    subscribeUser,
  };

  return (
    <SubscribedContext.Provider value={value}>{children}</SubscribedContext.Provider>
  );
};
