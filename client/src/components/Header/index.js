import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import './styles.css';
import { firebaseApp } from 'services/firebase';
import {getAuth, signOut} from "firebase/auth";
const auth = getAuth(firebaseApp);


export default function Header( {click}) {
  return (
    <div className='header'>
      <div className='nav'>
        <nav>
          <Link to='/' className='link'>
            <h4>Home</h4>
          </Link>
          <Link to='/create' className='link'>
            <h4>Create user</h4>
          </Link>
        </nav>
      </div>
      <div className='sign-button'>
      <Button color="secondary"  variant="outlined" onClick={()=>signOut(auth)}>Sign Out</Button>
      </div>
    </div>
  );
}
