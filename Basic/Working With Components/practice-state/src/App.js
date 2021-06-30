import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList/UsersList';

const App = () => {
  const [arrayUsers, setArrayUsers] = useState([]);

  const onAddUsers = (user) => {
    setArrayUsers((prevArr) => {
      return [user, ...prevArr];
    });
  };

  return (
    <div className=''>
      <AddUser onAddUsers={onAddUsers} />
      <UsersList users={arrayUsers} />
    </div>
  );
};

export default App;
