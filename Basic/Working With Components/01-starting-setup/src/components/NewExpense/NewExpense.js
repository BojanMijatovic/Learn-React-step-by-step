import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ onAddExpense }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditingExpense = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditing}>Add New Expenses </button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditingFunction={stopEditingExpense} />}
    </div>
  );
};

export default NewExpense;
