import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import { CgDetailsMore } from 'react-icons/cg';

import './styles.css';

export default function User({ handleDelete, user }) {
  return (
    <div className='userItem'>
      <p>{user.firstName}</p>
      <section className='links'>
        <Link to={`/${user.id}`}>
          <button>
            <CgDetailsMore />
          </button>
        </Link>
        <div className='actions'>
          <Link to={`/edit/${user.id}`}>
            <button>
              <FaRegEdit />
            </button>
          </Link>
          <button onClick={() => handleDelete(user.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </section>
    </div>
  );
}
