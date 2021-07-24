'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Toggler = function (_React$Component) {
  _inherits(Toggler, _React$Component);

  function Toggler(props) {
    _classCallCheck(this, Toggler);

    var _this = _possibleConstructorReturn(this, (Toggler.__proto__ || Object.getPrototypeOf(Toggler)).call(this, props));

    _this.state = {
      isVisible: false
    };

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Toggler, [{
    key: 'onClick',
    value: function onClick() {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var isVisible = this.state.isVisible;

      return React.createElement(
        'div',
        { className: 'toggler' },
        React.createElement(
          'button',
          { onClick: this.onClick },
          isVisible ? ' show detail' : 'hide detail'
        ),
        isVisible ? false : React.createElement(
          'p',
          null,
          'Lorem ipsum dolor sit.'
        )
      );
    }
  }]);

  return Toggler;
}(React.Component);

ReactDOM.render(React.createElement(Toggler, null), document.getElementById('app'));
