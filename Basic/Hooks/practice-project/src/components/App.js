import React, { useState } from 'react';

import './App.scss';
import AddUsers from './Users/AddUsers';
import UsersList from './Users/UsersList';

const App = () => {
  const [usersList, setUsersList] = useState([]);

  const onAddUser = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, { name: userName, age: userAge }];
    });
  };

  console.log(usersList);
  return (
    <div>
      <AddUsers onAddUser={onAddUser} />
      <UsersList users={usersList} />
    </div>
  );
};

export default App;
