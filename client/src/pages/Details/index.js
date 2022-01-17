import { Helmet } from 'react-helmet';

import UserDetails from 'components/UserDetails';

export default function Details(props) {
  const { id } = props.match.params;

  return (
    <>
      <Helmet>
        <title>Details | WarmUp Challenge JS</title>
        <meta name='description' content='post description' />
      </Helmet>

      <UserDetails userId={id} />
    </>
  );
}
