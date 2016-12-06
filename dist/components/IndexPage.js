'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _indexPage = require('../data/index-page');

var _indexPage2 = _interopRequireDefault(_indexPage);

var _Travel = require('./partials/Travel');

var _Travel2 = _interopRequireDefault(_Travel);

var _Contact = require('./partials/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

var _Registry = require('./partials/Registry');

var _Registry2 = _interopRequireDefault(_Registry);

var _Rsvp = require('./partials/Rsvp');

var _Rsvp2 = _interopRequireDefault(_Rsvp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexPage = function (_React$Component) {
    _inherits(IndexPage, _React$Component);

    function IndexPage() {
        _classCallCheck(this, IndexPage);

        return _possibleConstructorReturn(this, (IndexPage.__proto__ || Object.getPrototypeOf(IndexPage)).apply(this, arguments));
    }

    _createClass(IndexPage, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'main' },
                _react2.default.createElement(_Travel2.default, { data: _indexPage2.default.travel }),
                _react2.default.createElement(_Rsvp2.default, _indexPage2.default.rsvp),
                _react2.default.createElement(_Contact2.default, { data: _indexPage2.default.contact }),
                _react2.default.createElement(_Registry2.default, { data: _indexPage2.default.registry })
            );
        }
    }]);

    return IndexPage;
}(_react2.default.Component);

exports.default = IndexPage;