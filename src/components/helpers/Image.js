import React, {Component} from 'react';

export default class Image extends Component {
  render() {
    return (
      <img
      	src={'/img/' + this.props.image}
      	className={this.props.class}
      	alt={this.props.alt}
      />
    );
  }
}
