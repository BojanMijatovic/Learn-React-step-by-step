import React, { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUsers.module.scss';

const AddUsers = (props) => {
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  const addFormSubmit = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please insert valid name and age',
      });
      return;
    }
    if (+age < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please insert real age',
      });
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorModal={errorHandler}
        />
      )}
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
    </div>
  );
};

export default AddUsers;
