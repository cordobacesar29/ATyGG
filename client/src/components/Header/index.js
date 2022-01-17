import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import './styles.css';

export default function Header() {
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
      <Button color="secondary"  variant="outlined">Sign Out</Button>
      </div>
    </div>
  );
}
