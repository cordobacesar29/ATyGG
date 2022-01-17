import { Link } from 'react-router-dom';

import './styles.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <nav>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
          <Link to='/create'>
            <h3>Create user</h3>
          </Link>
        </nav>
      </div>
    </>
  );
}
