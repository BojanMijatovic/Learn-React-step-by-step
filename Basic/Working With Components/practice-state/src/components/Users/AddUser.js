import React, { useState } from 'react';
import Card from '../UI/Card/Card';
import style from './AddUser.module.css';
import Button from '../UI/Button/Button';

const AddUser = () => {
  const [inputUserName, setInputUserName] = useState('');
  const [inputUserAge, setInputUserAge] = useState('');

  const onInputUserNameChange = (e) => {
    setInputUserName(e.target.value);
  };

  const onInputUserAgeChange = (e) => {
    setInputUserAge(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(inputUserName, inputUserAge);
    setInputUserName('');
    setInputUserAge('');
  };

  return (
    <Card className={style.input}>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='username'>Username</label>
        <input
          type='text'
          placeholder='add user name'
          id='username'
          onChange={onInputUserNameChange}
          value={inputUserName}
        />
        <label htmlFor='age'>Age</label>
        <input type='number' placeholder='add user age' id='age' onChange={onInputUserAgeChange} value={inputUserAge} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
