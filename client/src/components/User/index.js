import { Link } from 'react-router-dom';
import { FaRegEdit } from 'react-icons/fa';
import { AiOutlineDelete } from 'react-icons/ai';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';

export default function User({ handleDelete, user }) {
  return (

    <TableBody>
      <TableCell><p>{user.firstName}</p></TableCell>
      <TableCell><p>{user.lastName}</p></TableCell>
      <TableCell><p>{user.age}</p></TableCell>
      <TableCell><p>{user.email}</p></TableCell>
      <TableCell>
        <Link to={`/edit/${user.id}`}>
          <Button 
            className='button-edit'
            color="info" 
            variant="outlined" 
            startIcon={<FaRegEdit />} 
          >
          Edit
          </Button>
        </Link>
      </TableCell>
      <TableCell>
        <Button 
          color="error" 
          variant="outlined" 
          startIcon={<AiOutlineDelete />} 
          onClick={() => handleDelete(user.id)} 
        >
        Delete
        </Button>
      </TableCell>
    </TableBody>
  );
}
