import React, { useState } from 'react';

// import Accordion from './components/Accordion';

import Dropdown from './components/Dropdown';

// import Search from './components/Search';

// const items = [
//   {
//     title: 'what is react',
//     content: 'React is js framework',
//   },
//   {
//     title: 'why use react',
//     content: 'React is favorite js library',
//   },
//   {
//     title: 'how do you use react',
//     content: 'You use react by creating components',
//   },
// ];

const options = [
  {
    label: 'The color red',
    value: 'red',
  },
  {
    label: 'The color green',
    value: 'green',
  },
  {
    label: 'The color blue',
    value: 'blue',
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div style={{ margin: '20px' }}>
      <Dropdown
        options={options}
        selected={selected}
        onSelectedChange={setSelected}
      />
    </div>
  );
};

export default App;
