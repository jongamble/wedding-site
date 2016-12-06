'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TravelItem = require('./TravelItem');

var _TravelItem2 = _interopRequireDefault(_TravelItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Travel = function (_Component) {
    _inherits(Travel, _Component);

    function Travel() {
        _classCallCheck(this, Travel);

        return _possibleConstructorReturn(this, (Travel.__proto__ || Object.getPrototypeOf(Travel)).apply(this, arguments));
    }

    _createClass(Travel, [{
        key: 'getTravelContent',
        value: function getTravelContent() {
            var travelData = this.props.data;

            return travelData ? _react2.default.createElement(
                'ul',
                { className: 'travel-list' },
                this.props.data.map(function (item, index) {
                    return _react2.default.createElement(_TravelItem2.default, _extends({}, item, {
                        key: index
                    }));
                })
            ) : null;
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: '_section travel' },
                _react2.default.createElement(
                    'div',
                    { className: '_section--container' },
                    _react2.default.createElement(
                        'h1',
                        { className: '_section-heading' },
                        _react2.default.createElement(
                            'span',
                            { className: '_section-heading--text' },
                            'Travel and Accommodations'
                        )
                    ),
                    this.getTravelContent()
                )
            );
        }
    }]);

    return Travel;
}(_react.Component);

exports.default = Travel;