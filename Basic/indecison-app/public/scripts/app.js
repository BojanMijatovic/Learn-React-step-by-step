'use strict';

var app = {
  title: 'Indecision',
  subtitle: 'A simple decision making app',
  options: []
};

//  form
var onSubmitForm = function onSubmitForm(e) {
  e.preventDefault();
  var option = e.target.option.value;
  console.log(option);
  {
    option ? app.options.push(option) : false;
    renderApp();
  }
  console.log(app.options);
  e.target.reset();
};

//  render app
var renderApp = function renderApp() {
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
    app.options.length > 0 ? 'Here is ' + app.options.length + ' options' : 'No options',
    React.createElement(
      'p',
      null,
      app.options.length
    ),
    React.createElement(
      'form',
      { onSubmit: onSubmitForm },
      React.createElement('input', { type: 'text', placeholder: 'add', name: 'option' }),
      React.createElement(
        'button',
        null,
        'add'
      )
    )
  );

  var appRoot = document.getElementById('app');
  ReactDOM.render(template, appRoot);
};

renderApp();
