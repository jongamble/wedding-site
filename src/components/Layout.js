import React  from 'react';
import Scroll from 'react-scroll';
import Header from './partials/Header';
import data   from '../data/index-page';

const Link   = Scroll.Link,
  scroll     = Scroll.animateScroll,
  Events     = Scroll.Events,
  scrollSpy  = Scroll.scrollSpy;

export default class Layout extends React.Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  }

  componentWillUnmount() {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
  }
  render() {
    return (
      <div className="app-container">
        <Header {...data.header} />
        <nav className="nav">
          <Link to="travel" spy={true} smooth={true} duration={500}>Travel Info</Link>
          <Link to="rsvp" spy={true} smooth={true} duration={500}>RSVP</Link>
          <Link to="contact" spy={true} smooth={true} duration={500}>Contact</Link>
          <Link to="registry" spy={true} smooth={true} duration={500}>Registry</Link>
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