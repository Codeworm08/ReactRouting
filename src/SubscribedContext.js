import { createContext, useState, useEffect } from 'react';

export const SubscribedContext = createContext();

export const SubscribedProvider = ({ children }) => {
  const [subscribedUsers, setSubscribedUsers] = useState(null);

  useEffect(() => {
    const storedSubscribedUsers = localStorage.getItem('subscribedUsers');
    if (storedSubscribedUsers) {
      setSubscribedUsers(JSON.parse(storedSubscribedUsers));
    } else {
      setSubscribedUsers({});
    }
  }, []);

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
