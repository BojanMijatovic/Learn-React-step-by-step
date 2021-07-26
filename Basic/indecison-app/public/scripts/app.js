'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.deleteAllOptions = _this.deleteAllOptions.bind(_this);
    _this.randomPickOption = _this.randomPickOption.bind(_this);
    _this.removeSingleOption = _this.removeSingleOption.bind(_this);
    _this.addSingleOption = _this.addSingleOption.bind(_this);

    _this.state = {
      options: []
    };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var json = localStorage.getItem('options');
      var options = JSON.parse(json);
      if (options) {
        this.setState({ options: options });
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      //  add to local storage
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('IndecisionApp unmounted');
    }
  }, {
    key: 'deleteAllOptions',
    value: function deleteAllOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'randomPickOption',
    value: function randomPickOption() {
      var options = this.state.options;
      var randomIndex = Math.floor(Math.random() * options.length);
      console.log(options[randomIndex]);
      return options[randomIndex];
    }
  }, {
    key: 'addSingleOption',
    value: function addSingleOption(option) {
      if (!option) {
        return;
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option is here ';
      }
      this.setState(function (prevState) {
        return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
      });
    }
  }, {
    key: 'removeSingleOption',
    value: function removeSingleOption(option) {
      this.setState(function (prevState) {
        return { options: prevState.options.filter(function (opt) {
            return opt !== option;
          }) };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision app';

      return React.createElement(
        'div',
        { className: '' },
        React.createElement(Header, { title: title }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0, randomPickOption: this.randomPickOption }),
        React.createElement(Options, {
          options: this.state.options,
          deleteAllOptions: this.deleteAllOptions,
          removeSingleOption: this.removeSingleOption
        }),
        React.createElement(AddOption, { addSingleOption: this.addSingleOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle;

  return React.createElement(
    'div',
    { className: 'header' },
    React.createElement(
      'h1',
      null,
      title
    ),
    React.createElement(
      'h2',
      null,
      subtitle
    )
  );
};

Header.defaultProps = {
  title: 'Indecision',
  //  subtitle: 'A simple app to test the indecision module',
  subtitle: 'Some subtitle'
};

var Action = function Action(_ref2) {
  var randomPickOption = _ref2.randomPickOption;

  return React.createElement(
    'div',
    { className: 'action' },
    React.createElement(
      'button',
      { onClick: randomPickOption },
      'Random'
    )
  );
};

var Options = function Options(_ref3) {
  var options = _ref3.options,
      deleteAllOptions = _ref3.deleteAllOptions,
      removeSingleOption = _ref3.removeSingleOption;

  var lengthOptions = options.length;
  return React.createElement(
    'div',
    { className: '' },
    React.createElement(
      'h3',
      null,
      'Options'
    ),
    React.createElement(
      'p',
      null,
      'Yo now have ',
      lengthOptions,
      ' options'
    ),
    options.length === 0 && React.createElement(
      'p',
      null,
      'No options'
    ),
    React.createElement(
      'ul',
      { className: 'options' },
      options.map(function (option, index) {
        return React.createElement(Option, { key: index + 1, optionText: option, removeSingleOption: removeSingleOption });
      })
    ),
    React.createElement(
      'button',
      { onClick: deleteAllOptions },
      'Remove all'
    )
  );
};

var Option = function Option(_ref4) {
  var optionText = _ref4.optionText,
      removeSingleOption = _ref4.removeSingleOption,
      editSingleOption = _ref4.editSingleOption;

  return React.createElement(
    'div',
    { className: '' },
    optionText,
    React.createElement(
      'button',
      { onClick: function onClick() {
          return removeSingleOption(optionText);
        } },
      'remove'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.onFormAddOption = _this2.onFormAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'onFormAddOption',
    value: function onFormAddOption(e) {
      e.preventDefault();
      var option = e.target.option.value.trim();
      var error = this.props.addSingleOption(option);
      e.target.option.value = '';
      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: '' },
        this.state.error ? React.createElement(
          'p',
          null,
          this.state.error
        ) : null,
        React.createElement(
          'form',
          { className: 'add-option', onSubmit: this.onFormAddOption },
          React.createElement('input', { type: 'text', placeholder: 'Add option', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
