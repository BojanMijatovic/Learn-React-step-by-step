// let count = 0;

// const addOne = () => {
//   console.log(count++);
//   renderApp();
// };

// const removeOne = () => {
//   console.log(--count);
//   renderApp();
// };

// const resetCount = () => {
//   count = 0;
//   console.log(count);
//   renderApp();
// };

// const renderApp = () => {
//   const countApp = (
//     <div className=''>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne} className='button'>
//         +
//       </button>
//       <button onClick={removeOne} className='button'>
//         -
//       </button>
//       <button onClick={resetCount} className='button'>
//         =
//       </button>
//     </div>
//   );

//   const appRoot = document.getElementById('app');
//   ReactDOM.render(countApp, appRoot);
// };

// renderApp();

// /*
// const user = {
//   name: 'bojan mijatovic',
//   age: 34,
//   location: 'Serbia',
// };

// const getLocation = (location) => {
//   return <p>Location: {location || 'unknown'}</p>;
// };

// */

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    const { count } = this.state;

    const addOne = () => {
      this.setState({
        count: count + 1,
      });
    };

    const removeOne = () => {
      this.setState({
        count: count - 1,
      });
    };

    const resetCount = () => {
      this.setState({
        count: 0,
      });
    };

    return (
      <div className=''>
        <h1>Count: {count}</h1>
        <button onClick={addOne} className='button'>
          + add
        </button>
        <button onClick={removeOne} className='button'>
          - remove
        </button>
        <button onClick={resetCount} className='button'>
          = reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
