'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _server = require('react-dom/server');

var _reactRouter = require('react-router');

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

var _NotFoundPage = require('./components/NotFoundPage');

var _NotFoundPage2 = _interopRequireDefault(_NotFoundPage);

var _invitees = require('./models/invitees');

var _invitees2 = _interopRequireDefault(_invitees);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize the server and configure support for ejs templates
var app = new _express2.default();
var server = new _http.Server(app);
app.set('view engine', 'ejs');
app.set('views', _path2.default.join(__dirname, '../src/views'));

// define the folder that will be used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, '../src/static')));

app.use(_bodyParser2.default.json());

var mongooseOptions = {
  user: 'weddingAdmin',
  pass: 'j.Gamb1e89'
};

_mongoose2.default.connect('mongodb://138.197.36.27/guestList', mongooseOptions);
_mongoose2.default.Promise = require('bluebird');

app.post('/api', function (req, res) {
  var sub = req.body,
      conn = _mongoose2.default.connection,
      Invitee = _mongoose2.default.model('Invitee', _invitees2.default);

  var validData = false;

  function sanitizeString(str) {
    str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
    return str.trim();
  }

  sub.map(function (invite) {
    if (invite.name) {
      (function () {
        var sanitizedObj = {};
        Object.keys(invite).forEach(function (key) {
          sanitizedObj[key] = sanitizeString(invite[key]);
        });
        var inviteObj = new Invitee(sanitizedObj);
        inviteObj.save(function (err, invitee) {
          if (err) return console.error(err);
        });
        validData = true;
      })();
    }
  });

  if (validData) {
    res.status(200).send('OK');
  } else {
    res.status(400).send('Invalid data');
  }

  // res.status(500).send('Something broke!')
});

// universal routing and rendering
app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirectLocation, renderProps) {

    // in case of error display the error message
    if (err) {
      return res.status(500).send(err.message);
    }

    // in case of redirect propagate the redirect to the browser
    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    // generate the React markup for the current route
    var markup = void 0;
    if (renderProps) {
      // if the current route matched we have renderProps
      markup = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, renderProps));
    } else {
      // otherwise we can render a 404 page
      markup = (0, _server.renderToString)(_react2.default.createElement(_NotFoundPage2.default, null));
      res.status(404);
    }

    // render the index template with the embedded React markup
    return res.render('index', { markup: markup });
  });
});

// start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';
server.listen(port, function (err) {
  if (err) {
    return console.error(err);
  }
  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});