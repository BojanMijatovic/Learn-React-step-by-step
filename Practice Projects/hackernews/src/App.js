import ListItems from './Components/LIstItems/ListItems';

const App = () => {
  const test = {
    title: 'Welcome to react',
    subTitle: 'This is just for learn',
  };

  const list = [
    {
      title: 'React',
      author: 'Jordan Walker',
      points: 4,
      num_comments: 2,
    },
    {
      title: 'Redux',
      author: 'Dan Abrams',
      points: 3,
      num_comments: 5,
    },
  ];

  return (
    <div>
      <h2>{test.title}</h2>
      <h4>{test.subTitle}</h4>
      <ListItems listItems={list} />
    </div>
  );
};

export default App;
