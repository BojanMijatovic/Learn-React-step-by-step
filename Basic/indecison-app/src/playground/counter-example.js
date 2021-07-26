class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  /*
    componentDidMount() {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    this.setState(() => ({ options }));
  }

  componentDidUpdate(prevProps, prevState) {
    //  add to local storage
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }
  */

  componentDidMount() {
    const json = localStorage.getItem('count');
    const count = JSON.parse(json);
    this.setState(() => ({ count }));
  }

  componentDidUpdate(prevProps, prevState) {
    // const json = JSON.stringify(this.state.count);
    // localStorage.setItem('count', json);
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      console.log(json);
      localStorage.setItem('count', json);
    }
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
