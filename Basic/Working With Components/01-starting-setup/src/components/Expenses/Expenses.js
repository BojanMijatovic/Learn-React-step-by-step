import '../../style/components/expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

import { useState } from 'react';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('');

  const addFilterByYear = (newYear) => {
    setFilteredYear(newYear);
    console.log(`Here is from Expenses ${newYear}`);
  };

  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          showYearHandler={addFilterByYear}
          selected={filteredYear}
        />
        {props.expenses.map((expense, id) => (
          <ExpenseItem
            key={id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
