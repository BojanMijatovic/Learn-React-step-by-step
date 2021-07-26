'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      count: 0
    };
    return _this;
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

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('Mount');
      var json = localStorage.getItem('count');
      var count = JSON.parse(json);
      this.setState(function () {
        return { count: count };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('Did update');
      // const json = JSON.stringify(this.state.count);
      // localStorage.setItem('count', json);
      if (prevState.count !== this.state.count) {
        var json = JSON.stringify(this.state.count);
        console.log(json);
        localStorage.setItem('count', json);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var count = this.state.count;


      var addOne = function addOne() {
        _this2.setState({
          count: count + 1
        });
      };

      var removeOne = function removeOne() {
        _this2.setState({
          count: count - 1
        });
      };

      var resetCount = function resetCount() {
        _this2.setState({
          count: 0
        });
      };

      return React.createElement(
        'div',
        { className: '' },
        React.createElement(
          'h1',
          null,
          'Count: ',
          count
        ),
        React.createElement(
          'button',
          { onClick: addOne, className: 'button' },
          '+ add'
        ),
        React.createElement(
          'button',
          { onClick: removeOne, className: 'button' },
          '- remove'
        ),
        React.createElement(
          'button',
          { onClick: resetCount, className: 'button' },
          '= reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
