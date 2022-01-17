import { Helmet } from 'react-helmet';

import UserForm from 'components/UserForm';

export default function EditForm(props) {
  const { id } = props.match.params;

  return (
    <>
      <Helmet>
        <title>Edit User | Challenge ATyGG</title>
        <meta name='description' content='edit user' />
      </Helmet>

      <UserForm userId={id} />
    </>
  );
}
