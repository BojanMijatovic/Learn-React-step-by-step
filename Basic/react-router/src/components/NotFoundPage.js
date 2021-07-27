import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <Fragment>
      <h1>Not Found Page 404</h1>
      <Link to='/'>Back to Home</Link>
    </Fragment>
  );
};

export default NotFoundPage;
