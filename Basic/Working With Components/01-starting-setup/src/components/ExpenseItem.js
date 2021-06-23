import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { title, amount, date } = props;

  //  date
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const day = date.toLocaleString('en-US', { day: '2-digit' });

  return (
    <div className='expense-item'>
      <div>
        <div className=''>{month}</div>
        <div className=''>{year}</div>
        <div className=''>{day}</div>
      </div>
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
