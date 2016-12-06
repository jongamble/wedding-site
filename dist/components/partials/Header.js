'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Image = require('../helpers/Image');

var _Image2 = _interopRequireDefault(_Image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { className: 'header' },
                _react2.default.createElement(
                    'div',
                    { className: 'header-content' },
                    _react2.default.createElement(
                        'h2',
                        { className: 'header-location' },
                        this.props.location
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'header-name-container' },
                        _react2.default.createElement(
                            'h1',
                            { className: 'header-name' },
                            this.props.leftName
                        ),
                        _react2.default.createElement(
                            'h1',
                            { className: 'header-name' },
                            this.props.rightName
                        ),
                        _react2.default.createElement(_Image2.default, {
                            'class': 'header-image',
                            image: this.props.image,
                            alt: 'Raemoir House Hotel'
                        })
                    ),
                    _react2.default.createElement(
                        'h2',
                        { className: 'header-date' },
                        this.props.date
                    )
                )
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

exports.default = Header;