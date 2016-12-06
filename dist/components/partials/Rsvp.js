'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _invitationNames = require('../../data/invitation-names');

var _invitationNames2 = _interopRequireDefault(_invitationNames);

var _RsvpInitial = require('./RsvpInitial');

var _RsvpInitial2 = _interopRequireDefault(_RsvpInitial);

var _RsvpCard = require('./RsvpCard');

var _RsvpCard2 = _interopRequireDefault(_RsvpCard);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rsvp = function (_Component) {
    _inherits(Rsvp, _Component);

    function Rsvp(props) {
        _classCallCheck(this, Rsvp);

        var _this2 = _possibleConstructorReturn(this, (Rsvp.__proto__ || Object.getPrototypeOf(Rsvp)).call(this, props));

        _this2.state = {
            inviteName: '',
            inviteNumber: '',
            rsvpError: false,
            rsvpSubmitted: false
        };
        _this2.onInitialChange = _this2.onInitialChange.bind(_this2);
        _this2.onSecondaryChange = _this2.onSecondaryChange.bind(_this2);
        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        return _this2;
    }

    _createClass(Rsvp, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var _this3 = this;

            e.preventDefault();
            var _this = this;
            var state = this.state,
                dataPush = [];

            var _loop = function _loop(i) {
                dataPush[i] = { 'inviteName': state.inviteName };
                _this3.props.formFields.forEach(function (field) {
                    dataPush[i][field.name] = state[field.name + '-' + i];
                });
            };

            for (var i = 0; i < state.inviteNumber; i++) {
                _loop(i);
            }

            // Create an empty Headers instance
            var headers = new Headers();
            headers.set('Content-Type', 'application/json');

            var myInit = { method: 'post',
                headers: headers,
                body: JSON.stringify(dataPush)
            };

            fetch(new Request('/api', myInit)).then(function (response) {
                if (response.ok) {
                    _this.setState({ rsvpSubmitted: true });
                } else {
                    _this.setState({ rsvpError: true });
                }
            }).catch(function (ex) {
                console.log('parsing failed', ex);
                _this.setState({ rsvpError: true });
            });
        }
    }, {
        key: 'onInitialChange',
        value: function onInitialChange(name) {
            var state = {};
            state['inviteName'] = _lodash2.default.trim(name);
            state['inviteNumber'] = _lodash2.default.find(_invitationNames2.default, { 'name': name }).numberInvited;
            this.setState(state);
        }
    }, {
        key: 'onSecondaryChange',
        value: function onSecondaryChange(e) {
            var state = {};
            state[e.target.name] = _lodash2.default.trim(e.target.value);
            this.setState(state);
        }
    }, {
        key: 'getInvitationList',
        value: function getInvitationList() {
            var nameList = [];
            _invitationNames2.default.map(function (name) {
                nameList.push(name.name);
            });
            return nameList;
        }
    }, {
        key: 'renderCards',
        value: function renderCards() {
            var cards = [];
            for (var i = 0; i < this.state.inviteNumber; i++) {
                cards.push(_react2.default.createElement(_RsvpCard2.default, {
                    key: 'render-cards-' + i,
                    index: i,
                    fields: this.props.formFields,
                    onChange: this.onSecondaryChange
                }));
            }
            return cards;
        }
    }, {
        key: 'errorFrame',
        value: function errorFrame() {
            return this.state.rsvpError ? _react2.default.createElement(
                'div',
                { className: 'rsvp-error' },
                _react2.default.createElement(
                    'h2',
                    { className: 'rsvp-error--header' },
                    'Error!'
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'rsvp-error--copy' },
                    'There was an error with your submission. Please try again.'
                )
            ) : null;
        }
    }, {
        key: 'renderInitial',
        value: function renderInitial() {
            return !this.state.inviteName.length ? _react2.default.createElement(_RsvpInitial2.default, {
                showInvitees: this.handleSubmit,
                onChange: this.onInitialChange,
                nameList: this.getInvitationList()
            }) : !this.state.rsvpSubmitted ? _react2.default.createElement(
                'form',
                { method: 'post', name: 'rsvp-cards', className: 'rsvp-cards', onSubmit: this.handleSubmit },
                this.errorFrame(),
                _react2.default.createElement(
                    'div',
                    { className: 'rsvp-cards--container' },
                    this.renderCards()
                ),
                _react2.default.createElement(
                    'button',
                    { type: 'submit', name: 'submit', className: 'rsvp-cards--button' },
                    'Submit'
                )
            ) : _react2.default.createElement(
                'div',
                { className: 'rsvp-submitted' },
                _react2.default.createElement(
                    'h2',
                    { className: 'rsvp-submitted--header' },
                    'Success!'
                ),
                _react2.default.createElement(
                    'p',
                    { className: 'rsvp-submitted--copy' },
                    'Your response has been recorded. We look forward to seeing you soon!'
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'section',
                { className: '_section rsvp`' },
                _react2.default.createElement(
                    'div',
                    { className: '_section--container' },
                    _react2.default.createElement(
                        'h1',
                        { className: '_section-heading' },
                        _react2.default.createElement(
                            'span',
                            { className: '_section-heading--text' },
                            this.props.headline
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'rsvp-copy' },
                        this.props.copy
                    ),
                    this.renderInitial()
                )
            );
        }
    }]);

    return Rsvp;
}(_react.Component);

exports.default = Rsvp;