const title = 'Visibility toggler';
let buttonName = 'show detail';

const onClickToggler = () => {
  buttonName = buttonName === 'show detail' ? 'hide detail' : 'show detail';
  showApp();
};

const showApp = () => {
  const template = (
    <div className=''>
      <h1>{title}</h1>
      <button onClick={onClickToggler}>{buttonName}</button>
      {buttonName === 'show detail' ? false : <p>Lorem ipsum dolor sit.</p>}
    </div>
  );

  const appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

showApp();
