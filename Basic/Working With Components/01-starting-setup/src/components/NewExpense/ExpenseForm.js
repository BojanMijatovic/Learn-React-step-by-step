import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [newDate, setNewDate] = useState('');

  const onInputTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onInputAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onInputDateChange = (e) => {
    setNewDate(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    const expenseData = {
      expenseTitle: title,
      expenseAmount: amount,
      expenseDate: new Date(newDate),
    };

    //  lift up data from child to parent
    onSaveExpenseData(expenseData);
    setTitle('');
    setAmount('');
    setNewDate('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' placeholder='add expense' onChange={onInputTitleChange} value={title} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={onInputAmountChange} value={amount} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2023-12-31' onChange={onInputDateChange} value={newDate} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
