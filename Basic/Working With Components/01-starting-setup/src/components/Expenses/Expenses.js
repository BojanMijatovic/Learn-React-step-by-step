import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  //  Outputting Conditional Content
  let expensesContent = <p style={{ color: 'white', fontSize: '18px' }}>No expenses found </p>;
  //  Outputting Conditional Content
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => {
      return <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />;
    });
  }

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
