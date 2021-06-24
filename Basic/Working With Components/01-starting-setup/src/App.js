import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
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
      <NewExpense />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
