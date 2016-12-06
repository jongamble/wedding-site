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

var RegistryItem = function (_Component) {
    _inherits(RegistryItem, _Component);

    function RegistryItem() {
        _classCallCheck(this, RegistryItem);

        return _possibleConstructorReturn(this, (RegistryItem.__proto__ || Object.getPrototypeOf(RegistryItem)).apply(this, arguments));
    }

    _createClass(RegistryItem, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'li',
                { key: "registry-" + this.props.index, className: 'registry-list--item' },
                _react2.default.createElement(
                    'a',
                    { href: this.props.link, target: '_blank', className: 'registry-list--link' },
                    _react2.default.createElement(_Image2.default, {
                        'class': 'registry-list--image',
                        image: this.props.image,
                        alt: this.props.store
                    })
                ),
                _react2.default.createElement(
                    'h2',
                    { className: 'registry-list--name' },
                    this.props.store
                )
            );
        }
    }]);

    return RegistryItem;
}(_react.Component);

exports.default = RegistryItem;