import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const App = () => {
  const [expensesData, setExpensesData] = useState([]);
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 234.66,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'House rent',
      amount: 500,
      date: new Date(2020, 5, 1),
    },
    {
      title: 'Beer',
      amount: 15,
      date: new Date(2020, 10, 18),
    },
    {
      title: 'Water',
      amount: 100,
      date: new Date(2021, 2, 8),
    },
  ];

  const addExpense = (expense) => {
    setExpensesData((addNewExpenses) => {
      return [...addNewExpenses, expense];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses expenses={expenses} />
      {console.log({ expensesData })}
    </div>
  );
};

export default App;
