const app = {
  title: 'Indecision',
  subtitle: 'A simple decision making app',
  options: [],
};

//  form
const onSubmitForm = (e) => {
  e.preventDefault();
  const option = e.target.option.value;
  console.log(option);
  {
    option ? app.options.push(option) : false;
  }

  e.target.reset();
  renderApp();
};

// onRemoveAllButton
const onRemoveAllButton = () => {
  app.options = [];
  renderApp();
};

//  onDecisionButton
const onDecisionButton = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  console.log(option);
};

//  render app
const renderApp = () => {
  const template = (
    <div className=''>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? <p> Here is {app.options.length} options </p> : 'No options'}
      <button disabled={!app.options.length} onClick={onDecisionButton}>
        make decision
      </button>
      <button onClick={onRemoveAllButton}>remove all</button>
      <ol>
        {app.options.map((option, i) => {
          return <li key={i++}>{option}</li>;
        })}
      </ol>
      <form onSubmit={onSubmitForm}>
        <input type='text' placeholder='add' name='option' />
        <button>add</button>
      </form>
    </div>
  );

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderApp();
