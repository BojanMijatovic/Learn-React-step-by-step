const app = {
  title: 'Indecision',
  subtitle: 'A simple decision making app',
  options: ['one', 'two', 'three'],
};

const user = {
  name: 'bojan mijatovic',
  age: 34,
  location: 'Serbia',
};

const getLocation = () => {
  return <p>Location: {user.location || 'unknown'}</p>;
};

const template = (
  <div className=''>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {app.options.length > 0 ? `Here is ${app.options.length} options` : 'No options'}
  </div>
);

const templateTwo = (
  <div className=''>
    <h1>{user.name || 'Anonymous'}</h1>
    {user.age > 18 && <p>Age: {user.age}</p>}
    {getLocation()}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
