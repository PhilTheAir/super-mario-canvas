import React, { Component } from 'react';
import { superMario } from './utils/canvas.js';

class App extends Component {
  componentDidMount() {
    superMario();
  }

  render() {
    return (
      <canvas id="mario" width={window.innerWidth} height={window.innerHeight} />
    );
  }
}

export default App;
