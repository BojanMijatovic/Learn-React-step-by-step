import Expenses from './components/Expenses';

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
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
