// A Component in React is just a simple function !
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

//  Import css file
// Adding Basic CSS Styling
import '../../style/components/expenseItem.css';

const ExpenseItem = (props) => {
  // Passing Data via "props"

  //  React HOOKS!!
  // titleToManage is pointer to props.title (value how is managed)
  //                                                                  props.title is initial value
  // const [titleToManage, setTitle] = useState(props.title);

  //  here create function
  //   name convention is to click function we add Handler on end of name
  // const clickHandler = () => {
  //   setTitle('Here is new title from  hook');
  // };

  //  <button onClick={clickHandler}>Change Title</button>;

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
