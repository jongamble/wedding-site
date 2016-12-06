"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactCard = function (_Component) {
    _inherits(ContactCard, _Component);

    function ContactCard() {
        _classCallCheck(this, ContactCard);

        return _possibleConstructorReturn(this, (ContactCard.__proto__ || Object.getPrototypeOf(ContactCard)).apply(this, arguments));
    }

    _createClass(ContactCard, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                { key: "contact-" + this.props.index, className: "contact-list--item" },
                _react2.default.createElement(
                    "h2",
                    { className: "contact-list--name" },
                    this.props.name
                ),
                _react2.default.createElement(
                    "p",
                    { className: "contact-list--phone" },
                    this.props.phone
                ),
                _react2.default.createElement(
                    "a",
                    {
                        className: "contact-list--email",
                        href: 'mailto:' + this.props.email
                    },
                    this.props.email
                )
            );
        }
    }]);

    return ContactCard;
}(_react.Component);

exports.default = ContactCard;