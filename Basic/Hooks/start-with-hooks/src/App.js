import Accordion from './components/Accordion';

const items = [
  {
    title: 'what is react',
    content: 'React is js framework',
  },
  {
    title: 'why use react',
    content: 'React is favorite js library',
  },
  {
    title: 'how do you use react',
    content: 'You use react by creating components',
  },
];

const App = () => {
  return (
    <div>
      <Accordion items={items} />
    </div>
  );
};

export default App;
