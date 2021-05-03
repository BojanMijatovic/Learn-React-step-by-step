// A Component in React is just a simple function !

//  Import css file
// Adding Basic CSS Styling
import '../style/components/expenseItem.css';

const ExpenseItem = (props) => {
  // Passing Data via "props"
  return (
    <div className="expense-item">
      <div>{props.date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
};

// Writing More Complex JSX Code
export default ExpenseItem;
