import React, { Component } from 'react';
import './App.css';

const Label = ({name, val}) => (
  <div className="label">
    {name}: {val}
  </div>
)

const Cell = ({val, paint}) => (
  <div className="cell" className={paint}>
    <input type="text"/>
  </div>
)

const Cells = ({arr, lowIndex, midIndex, highIndex}) => {
  const cells = arr.map((value, index) => {
    
  })
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="labels">
        <Label name="Low" val="0"></Label>
        <Label name= "Mid" val="2"></Label>
        <Label name="High" val="4"></Label>
        </div>
        <div className="array">

        </div>
      </div>
    );
  }
}

export default App;
