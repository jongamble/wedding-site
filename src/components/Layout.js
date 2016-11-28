import React  from 'react';
import {Link} from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          Jonathan Gamble &amp; Kathleen McKee
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/">Travel Info</Link>
          <Link to="/">RSVP</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Registry</Link>
        </nav>
        {this.props.children}
        <footer>
          <p>
            Site designed and built by <a href="http://www.jongamble.com">Jon Gamble</a>
          </p>
        </footer>
      </div>
    );
  }
}