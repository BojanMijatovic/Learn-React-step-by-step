// A Component in React is just a simple function !
import ExpenseDate from './ExpenseDate';
//  Import css file
// Adding Basic CSS Styling
import '../style/components/expenseItem.css';

const ExpenseItem = (props) => {
  // Passing Data via "props"

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

// Writing More Complex JSX Code
export default ExpenseItem;
