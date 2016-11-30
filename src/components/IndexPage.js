import React from 'react';
import data from '../data/index-page';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="main">
       {data.title}
      </div>
    );
  }
}