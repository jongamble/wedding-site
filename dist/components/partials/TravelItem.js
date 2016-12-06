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

var TravelItem = function (_Component) {
    _inherits(TravelItem, _Component);

    function TravelItem() {
        _classCallCheck(this, TravelItem);

        return _possibleConstructorReturn(this, (TravelItem.__proto__ || Object.getPrototypeOf(TravelItem)).apply(this, arguments));
    }

    _createClass(TravelItem, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "li",
                { key: "travel-" + this.props.index, className: "travel-list--item" },
                _react2.default.createElement(
                    "h3",
                    { className: "travel-list--heading" },
                    this.props.headline
                ),
                _react2.default.createElement(
                    "p",
                    { className: "travel-list--copy" },
                    this.props.copy
                )
            );
        }
    }]);

    return TravelItem;
}(_react.Component);

exports.default = TravelItem;