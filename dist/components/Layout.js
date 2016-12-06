'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _Header = require('./partials/Header');

var _Header2 = _interopRequireDefault(_Header);

var _indexPage = require('../data/index-page');

var _indexPage2 = _interopRequireDefault(_indexPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Layout = function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'app-container' },
        _react2.default.createElement(_Header2.default, _indexPage2.default.header),
        _react2.default.createElement(
          'nav',
          { className: 'nav' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'Travel Info'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'RSVP'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'Contact'
          ),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: '/' },
            'Registry'
          )
        ),
        this.props.children,
        _react2.default.createElement(
          'footer',
          { className: 'footer' },
          _react2.default.createElement(
            'p',
            null,
            'Site designed and built by ',
            _react2.default.createElement(
              'a',
              { href: 'http://www.jongamble.com', target: '_blank' },
              'Jon Gamble'
            ),
            '. Water color and print design by ',
            _react2.default.createElement(
              'a',
              { href: 'http://www.sagepaperco.com', target: '_blank' },
              'Sage Paper Co.'
            )
          )
        )
      );
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;