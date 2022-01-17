import {  useState ,useContext} from 'react';
import { useHistory } from 'react-router';
import { GrAdd, GrUpdate } from 'react-icons/gr';
import UserContext from 'context/UserContext';
import useUsers from 'hooks/useUsers';
import './styles.css';

export default function UserForm({ userId }) {
  const { addNewUser, users, updateOneUser } = useUsers();
  const { fetchUsers } = useContext(UserContext);

  const [firstNameError, setFirstNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
  const [ageError, setAgeError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [body, setBody] = useState();

  const history = useHistory();

  const userToEdit = userId ? users.find(u => u.id === userId) : null;

  const handleSubmit = e => {
    e.preventDefault();

    !body.firstName ? setFirstNameError('first name content must not be empty') : setFirstNameError('');
    !body.lastName ? setLastNameError('last name title must not be empty') : setLastNameError('');
    !body.age ? setAgeError('age title must not be empty') : setAgeError('');
    !body.email ? setEmailError('email title must not be empty') : setEmailError('');
    !body.password ? setPasswordError('password title must not be empty') : setPasswordError('');

    
    userId ? updateOneUser(userId,body).then(()=>fetchUsers())
    
    : 
      addNewUser(body);
      fetchUsers()
    history.push('/');
    
  };

  const handleChange =(e)=>{
    setBody({...body,[e.target.name]:e.target.value})
  }

  return (
    <>
      <h2 className='title'>{userToEdit ? 'Update user' : 'Create user'}</h2>
      <div className='formContainer'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label>First Name</label>
            <input
              name='firstName'
              onChange={handleChange}
              type='text'
            />
            {firstNameError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{firstNameError}</span>
            )}

            <label>Last Name</label>
            <input
              name='lastName'
              onChange={handleChange}
              type='text'
            />
            {lastNameError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{lastNameError}</span>
            )}

            <label>Age</label>
            <input
              name='age'
              onChange={handleChange}
              type='number'
            />
            {ageError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{ageError}</span>
            )}

            <label>Email</label>
            <input
              name='email'
              onChange={handleChange}
              type='text'
            />
            {emailError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{emailError}</span>
            )}

            <label>Password</label>
            <input
              name='password'
              onChange={handleChange}
              type='password'
            />
            {passwordError && (
              <span style={{ color: 'red', paddingTop: '5px' }}>{passwordError}</span>
            )}
          </div>
          
          <button type='submit'>
            {userToEdit ? (
              <>
                <GrUpdate />
                Update
              </>
            ) : (
              <>
                <GrAdd />
                Add
              </>
            )}
          </button>
        </form>
      </div>
    </>
  );
}