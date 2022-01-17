import { Helmet } from 'react-helmet';

import UserForm from 'components/UserForm';

export default function CreateForm() {
  return (
    <>
      <Helmet>
        <title>Create User | Challenge ATyGG</title>
        <meta name='description' content='create new user' />
      </Helmet>

      <UserForm />
    </>
  );
}
