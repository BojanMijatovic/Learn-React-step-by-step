import React, { useState, useRef } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

import styles from './AddUsers.module.scss';

const AddUsers = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addFormSubmit = (e) => {
    e.preventDefault();

    //  helper const
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    console.log(nameInputRef.current.value);

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please insert valid name and age',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid age',
        message: 'Please insert real age',
      });
      return;
    }

    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
            ref={nameInputRef}
          />
          <label htmlFor='username'>Age</label>
          <input
            type='number'
            placeholder='add user age'
            id='age'
            ref={ageInputRef}
          />
          <Button type='submit'>add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUsers;
