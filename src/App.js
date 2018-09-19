import React, { Component } from 'react';
import './App.css';

const Label = ({name, val}) => (
  <div className="label">
    {name}: {val}
  </div>
)

const Cell = ({val, paint}) => (
  <div className="cell" >
    <input type="text" value={val} className={paint}/>
  </div>
)

const Cells = ({arr, lowIndex, midIndex, highIndex}) => {
  const cells = arr.map((value, index) => {
    let paint = index >= lowIndex && index <= highIndex ? 'valid-cell': 'invalid-cell';
    paint = index == midIndex ? 'search-cell': paint;
    return (
      <Cell val={value} paint={paint}/>
    )
  })
  return cells;
}

const StatusMessage = ({found, searching}) => (
  <div>
    {found ? 'Found!': (
      searching? 'searching':
      'not found'
    )}
  </div>
)

class App extends Component {
  constructor(){
    super();
    const arr =  [0,1,2,3,4,5,6,7,8,9];
    let lowIndex = 0;
    let highIndex = arr.length-1;
    let midIndex = Math.floor((highIndex+lowIndex) / 2);
    this.state = {
      arr,
      lowIndex,
      midIndex,
      highIndex,
      searchVal: 7,
      found: false,
      finished: false
    }
  }
  getMidIndex = (low, high) => (Math.floor((high+low) / 2))
  stepUp = _ => {
    const val = this.state.searchVal;
    let {highIndex, midIndex, lowIndex} = this.state;
    midIndex = this.getMidIndex(lowIndex, highIndex);
    let stat = false;
    const curr = this.state.arr[midIndex];
    if(curr == val) {
      stat = true;
      this.setState({
        found: stat,
        finished: true
      })
    } else if (curr < val) {
      lowIndex = midIndex + 1;
    } else if (curr > val) {
      highIndex = midIndex - 1;
    }
    if (curr != val && lowIndex > highIndex) {
      this.setState({
        finished: true
      })
    }
    
    this.setState({
      lowIndex,
      midIndex,
      highIndex
    });
  }
  render() {
    return (
      <div className="App">
        <div className="labels">
        <Label name="Low" val={this.state.lowIndex}></Label>
        <Label name= "Mid" val={this.state.midIndex}></Label>
        <Label name="High" val={this.state.highIndex}></Label>
        </div>
        <div className="array">
          <Cells
            arr={this.state.arr}
            lowIndex={this.state.lowIndex}
            midIndex={this.state.midIndex}
            highIndex={this.state.highIndex}
          />
        </div>
        <div>
          <button onClick={this.stepUp}>Step up</button>
        </div>
        <StatusMessage found={this.state.found} searching={this.state.searching}/>
      </div>
    );
  }
}

export default App;
