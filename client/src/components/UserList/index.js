import useUsers from 'hooks/useUsers';
import User from 'components/User';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';

export default function Home() {
  const { deleteOneUser, users } = useUsers();

  const handleDelete = userId => {
    deleteOneUser(userId);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><p>First Name</p></TableCell>
              <TableCell><p>Last Name</p></TableCell>
              <TableCell><p>Age</p></TableCell>
              <TableCell><p>Email</p></TableCell>
              <TableCell><p>Edit</p></TableCell>
              <TableCell><p>Delete</p></TableCell>
            </TableRow>
          </TableHead>
          {users.map((user) => (
            <User handleDelete={handleDelete} key={user.id} user={user} />
          ))}
        </Table>
      </TableContainer>
    </>
  );
}