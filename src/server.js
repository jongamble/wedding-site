import path from 'path';
import { Server } from 'http';
import Express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import React from 'react';
import _ from 'lodash';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import NotFoundPage from './components/NotFoundPage';
import inviteeSchema from './models/invitees';

// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

app.use(bodyParser.json());


const mongooseOptions = {
  user: 'weddingAdmin',
  pass: 'j.Gamb1e89'
};

mongoose.connect('mongodb://138.197.36.27/guestList', mongooseOptions);
mongoose.Promise = require('bluebird');

app.post('/api', (req, res) => {
  const sub = req.body,
    conn = mongoose.connection,
    Invitee = mongoose.model('Invitee', inviteeSchema);

  let validData = false;

  function sanitizeString(str){
      str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim,"");
      return str.trim();
  }

  sub.map((invite) => {
    if(invite.name) {
      let sanitizedObj = {};
      Object.keys(invite).forEach(function(key) {
        sanitizedObj[key] = sanitizeString(invite[key]);
      });
      let inviteObj = new Invitee(sanitizedObj);
      inviteObj.save(function (err, invitee) {
        if (err) return console.error(err);
      });
      validData = true;
    }
  })

  if(validData) {
    res.status(200).send('OK');
  } else {
    res.status(400).send('Invalid data');
  }

  // res.status(500).send('Something broke!')
});

// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});