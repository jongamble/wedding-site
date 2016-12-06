'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RsvpCard = function (_Component) {
	_inherits(RsvpCard, _Component);

	function RsvpCard(props) {
		_classCallCheck(this, RsvpCard);

		var _this = _possibleConstructorReturn(this, (RsvpCard.__proto__ || Object.getPrototypeOf(RsvpCard)).call(this, props));

		var state = {};
		_this.props.fields.map(function (field, index) {
			state[field.name + '-' + _this.props.index] = '';
		});
		_this.state = state;
		return _this;
	}

	_createClass(RsvpCard, [{
		key: 'getSelectOptions',
		value: function getSelectOptions(field, parentIndex) {
			return field.options.map(function (option, index) {
				return _react2.default.createElement(
					'option',
					{ key: 'select-option-' + parentIndex + '-' + index, value: option.value },
					option.label
				);
			});
		}
	}, {
		key: 'getFields',
		value: function getFields() {
			var _this2 = this;

			return this.props.fields.map(function (field, index) {
				if (field.type == 'text') {
					return _react2.default.createElement(
						'div',
						{ key: "rsvp-" + index },
						_react2.default.createElement(
							'label',
							{ className: 'rsvp-cards--label', htmlFor: field.name },
							field.label
						),
						_react2.default.createElement('input', {
							name: field.name + '-' + _this2.props.index,
							type: field.type,
							className: 'rsvp-cards--textbox',
							onChange: _this2.props.onChange
						})
					);
				} else {
					return _react2.default.createElement(
						'div',
						{ key: "rsvp-" + index },
						_react2.default.createElement(
							'label',
							{ className: 'rsvp-cards--label', htmlFor: field.name },
							field.label
						),
						_react2.default.createElement(
							'select',
							{
								name: field.name + '-' + _this2.props.index,
								onChange: _this2.props.onChange,
								className: 'rsvp-cards--select',
								value: _this2.state[field.name + '-' + _this2.props.index].value
							},
							_react2.default.createElement('option', null),
							_this2.getSelectOptions(field, index)
						)
					);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				{ className: 'rsvp-cards--item', key: 'render-cards-item-' + this.props.index },
				this.getFields()
			);
		}
	}]);

	return RsvpCard;
}(_react.Component);

exports.default = RsvpCard;