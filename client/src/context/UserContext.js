import { createContext, useEffect, useState } from 'react';

import { getAll } from 'services/userApi';

const Context = createContext({});

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
 const fetchUsers =() =>{ getAll()
  .then(data => setUsers(data))
  .catch(err => console.error(err))};

  useEffect(() => {
    fetchUsers()
    console.log(users)
  }, []);

  return <Context.Provider value={{ users, setUsers,fetchUsers }}>{children}</Context.Provider>;
};

export default Context;