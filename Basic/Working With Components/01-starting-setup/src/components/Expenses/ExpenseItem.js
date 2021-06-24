import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  const [newTitle, setNewTitle] = useState(title);

  const onButtonClick = () => {
    setNewTitle('New Title');
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{newTitle}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={onButtonClick}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
