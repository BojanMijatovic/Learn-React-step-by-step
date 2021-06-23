import ExpenseItem from './components/ExpenseItem';

const App = () => {
  const expenses = [
    {
      title: 'Car Insurance',
      amount: 234.66,
      date: new Date(2021, 2, 28),
    },
    {
      title: 'House rent',
      amount: 500,
      date: new Date(2021, 5, 1),
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
  return (
    <div>
      <h1>Here is second time in React</h1>
      <p>This also works!</p>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date} />
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date} />
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date} />
    </div>
  );
};

export default App;
