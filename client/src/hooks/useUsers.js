import { useContext } from 'react';

import UserContext from 'context/UserContext';

import * as userService from 'services/userApi';

const useUsers = () => {
  const { users, setUsers } = useContext(UserContext);

  const addNewUser = (body) => {
    return userService
      .addOne(body)
      .then(newUser => setUsers([...users, newUser]))
      .catch(err => console.error(err));
  };

  const updateOneUser = (id,body) => {
    return userService
      .updateOneUser(id, body)
      .then(res => setUsers([...users.map(p => (p.id === Number(id) ? res : p))]))
      .catch(err => console.error(err));
  };

  const deleteOneUser = userId => {
    return userService
      .deleteOne(userId)
      .then(() => setUsers([...users.filter(p => p.id !== userId)]))
      .catch(err => console.error(err));
  };

  return {
    addNewUser,
    deleteOneUser,
    users,
    setUsers,
    updateOneUser,
  };
};

export default useUsers;
