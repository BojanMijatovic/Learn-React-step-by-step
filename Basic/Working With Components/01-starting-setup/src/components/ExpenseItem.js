// A Component in React is just a simple function !

//  Import css file
// Adding Basic CSS Styling
import '../style/components/expenseItem.css';

const ExpenseItem = () => {
  const expenseDate = new Date(2021, 2, 30);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 250;

  return (
    <div className="expense-item">
      <div>March 30 2021</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

// Writing More Complex JSX Code
export default ExpenseItem;
