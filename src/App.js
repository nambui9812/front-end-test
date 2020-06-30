import React from 'react';
import './App.css'

import Filters from './components/Filters';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Filters />
        <div className="results"></div>
      </div>
    )
  }
}

export default App;
