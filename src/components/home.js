import React, { Component } from 'react';
import Library from './library/library';
import Schedule from '.schedule/schedule';


class Home extends Component {
  render() {
    return (
      <div className= "home">
        <library/>
        <schedule/>
      </div>
    );
  }
}

export default Home;