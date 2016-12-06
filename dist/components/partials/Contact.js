'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ContactCard = require('./ContactCard');

var _ContactCard2 = _interopRequireDefault(_ContactCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Contact = function (_Component) {
    _inherits(Contact, _Component);

    function Contact() {
        _classCallCheck(this, Contact);

        return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
    }

    _createClass(Contact, [{
        key: 'getContactContent',
        value: function getContactContent() {
            var contactData = this.props.data;

            return contactData ? _react2.default.createElement(
                'ul',
                { className: 'contact-list' },
                this.props.data.map(function (item, index) {
                    return _react2.default.createElement(_ContactCard2.default, _extends({}, item, {
                        key: index
                    }));
                })
            ) : '';
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: '_section contact`' },
                _react2.default.createElement(
                    'div',
                    { className: '_section--container' },
                    _react2.default.createElement(
                        'h1',
                        { className: '_section-heading' },
                        _react2.default.createElement(
                            'span',
                            { className: '_section-heading--text' },
                            'Contact'
                        )
                    ),
                    this.getContactContent()
                )
            );
        }
    }]);

    return Contact;
}(_react.Component);

exports.default = Contact;