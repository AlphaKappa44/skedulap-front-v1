import React, { useContext, createContext, useState, useEffect } from 'react';

// create context
const UserContext = createContext();

const UserStateContext = () => {
  // the value that will be given to the context
  const [user, setUser] = useState(null);

  // fetch a user from a fake backend API
  useEffect(() => {
    const fetchUser = () => {
      // this would usually be your own backend, or localStorage
      // for example
      fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        
        .then((result) => { 
            setUser(result.results[0]);
            console.log(result.results[0].name)
            })
        .catch((error) => console.log('An error occurred'))
    };
    

    fetchUser();
  }, []);
  

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={user}>
      <Page />
    </UserContext.Provider>
  );
  };

const Page = () => {
  // access the context value
  const user = useContext(UserContext);

  if (user?.login?.username) {
    return <p>You are logged in as {user?.login.username}</p>;
  } else {
    return <p>You are not logged in</p>;
  }
};

export default UserStateContext;