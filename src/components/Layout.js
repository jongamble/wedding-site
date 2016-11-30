import React  from 'react';
import {Link} from 'react-router';
import Header from './partials/Header';
import data from '../data/index-page';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <Header {...data.header} />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Travel Info</Link>
          <Link to="/">RSVP</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Registry</Link>
        </nav>
        {this.props.children}
        <footer className="footer">
          <p>
            Site designed and built by <a href="http://www.jongamble.com" target="_blank">Jon Gamble</a>.
            Water color and print design by <a href="http://www.sagepaperco.com" target="_blank">Sage Paper Co.</a>
          </p>
        </footer>
      </div>
    );
  }
}