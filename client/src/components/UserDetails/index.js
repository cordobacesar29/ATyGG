import useUsers from 'hooks/useUsers';

import './styles.css';

export default function UserDetails({ userId }) {
  const { users } = useUsers();

  const userExits = userId ? users.find(u => u.id === userId) : null;

  if (!userExits) {
    return <h5 className='error'>User not found</h5>;
  }

  return (
    <div className='userDetails'>
      <h3>{userExits.firstName}</h3>
      <p>{userExits.lastName}</p>
    </div>
  );
}
