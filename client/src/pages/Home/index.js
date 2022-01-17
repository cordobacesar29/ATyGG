import { Helmet } from 'react-helmet';
import UserList from 'components/UserList';
export default function Home() {

  return (
    <>
      <Helmet>
        <title>Home | Challenge ATyGG</title>
        <meta name='description' content='homepage' />
      </Helmet>

      <UserList />
    </>
  );
}
