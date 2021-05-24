import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';

import styles from './AddUsers.module.scss';

const AddUsers = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');

  const addFormSubmit = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }

    props.onAddUser(userName, age);
    setUserName('');
    setAge('');
  };

  const onChangeUsername = (e) => {
    setUserName(e.target.value);
  };

  const onChangeAge = (e) => {
    setAge(e.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addFormSubmit}>
        <label htmlFor='username'>UserName</label>
        <input
          type='text'
          placeholder='add user name'
          id='username'
          onChange={onChangeUsername}
          value={userName}
        />
        <label htmlFor='username'>Age</label>
        <input
          type='number'
          placeholder='add user age'
          id='age'
          onChange={onChangeAge}
          value={age}
        />
        <Button type='submit'>add user</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
