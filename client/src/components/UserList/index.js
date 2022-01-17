import useUsers from 'hooks/useUsers';
import User from 'components/User';
import './styles.css';

export default function Home() {
  const { deleteOneUser, users } = useUsers();

  const handleDelete = userId => {
    deleteOneUser(userId);
  };

  return (
    <>
      <h2 className='title'>Users</h2>
      <div className='list'>
        {users.map(user => (
          <User handleDelete={handleDelete} key={user.id} user={user} />
        ))}
      </div>
    </>
  );
}
