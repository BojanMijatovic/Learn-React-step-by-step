'use strict';

var app = {
  title: 'Indecision',
  subtitle: 'A simple decision making app',
  options: ['one', 'two', 'three']
};

var user = {
  name: 'bojan mijatovic',
  age: 34,
  location: 'Serbia'
};

var getLocation = function getLocation() {
  return React.createElement(
    'p',
    null,
    'Location: ',
    user.location || 'unknown'
  );
};

var template = React.createElement(
  'div',
  { className: '' },
  React.createElement(
    'h1',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'p',
    null,
    app.subtitle
  ),
  app.options.length > 0 ? 'Here is ' + app.options.length + ' options' : 'No options'
);

var templateTwo = React.createElement(
  'div',
  { className: '' },
  React.createElement(
    'h1',
    null,
    user.name || 'Anonymous'
  ),
  user.age > 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation()
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
