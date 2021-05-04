import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  //  EXAMPLE
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  //  title
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    //  EXAMPLE
    //  Another APPROACH 01
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // });

    //  Another APPROACH 02
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     enteredTitle: e.target.value,
    //   };
    // });
  };

  // amount
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);

    //  EXAMPLE
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  //  date
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);

    //  EXAMPLE
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };

  //  submit
  const submitHandler = (e) => {
    e.preventDefault();

    //  create obj
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
