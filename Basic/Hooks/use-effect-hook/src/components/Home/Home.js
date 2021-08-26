import React, { useContext } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';
import { AuthContextProvider } from '../../store/auth-context';

const Home = (props) => {
  const authContext = useContext(AuthContextProvider);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <button onClick={authContext.login}>Login</button>
    </Card>
  );
};

export default Home;
