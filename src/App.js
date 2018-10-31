import React, { Component } from 'react'; 
import SearchEngine from './SearchEngine'
// import Name from './Name'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchEngine />
        {/* <Name/> */}
      </div>
    );
  }
}

export default App;
