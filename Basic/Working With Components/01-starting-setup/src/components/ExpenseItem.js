import './ExpenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 28);
  // const fullDate = `${expenseDate.getDate()} ${expenseDate.getMonth()} ${expenseDate.getFullYear()}`;
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 249.33;
  return (
    <div className='expense-item'>
      <div>{expenseDate}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
