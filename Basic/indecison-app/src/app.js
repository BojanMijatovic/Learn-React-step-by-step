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
    renderApp();
  }
  console.log(app.options);
  e.target.reset();
};

//  render app
const renderApp = () => {
  const template = (
    <div className=''>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? `Here is ${app.options.length} options` : 'No options'}
      <p>{app.options.length}</p>
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
