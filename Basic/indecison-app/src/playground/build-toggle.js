// const title = 'Visibility toggler';
// let buttonName = 'show detail';

// const onClickToggler = () => {
//   buttonName = buttonName === 'show detail' ? 'hide detail' : 'show detail';
//   showApp();
// };

// const showApp = () => {
//   const template = (
//     <div className=''>
//       <h1>{title}</h1>
//       <button onClick={onClickToggler}>{buttonName}</button>
//       {buttonName === 'show detail' ? false : <p>Lorem ipsum dolor sit.</p>}
//     </div>
//   );

//   const appRoot = document.getElementById('app');
//   ReactDOM.render(template, appRoot);
// };

// showApp();

class Toggler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  }

  render() {
    const { isVisible } = this.state;
    return (
      <div className='toggler'>
        <button onClick={this.onClick}>{isVisible ? ' show detail' : 'hide detail'}</button>
        {isVisible ? false : <p>Lorem ipsum dolor sit.</p>}
      </div>
    );
  }
}

ReactDOM.render(<Toggler />, document.getElementById('app'));
