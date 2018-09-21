import React, { Component } from 'react';
import './App.css';
import Cells from './components/Cells';
import Label from './components/Label';
import StatusMessage from './components/StatusMessage';
import Header from './components/Header';

class App extends Component {
  constructor() {
    super();
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let lowIndex = 0;
    let highIndex = arr.length - 1;
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    let displayMid = midIndex;
    this.state = {
      arr,
      lowIndex,
      midIndex,
      highIndex,
      displayMid,
      searchVal: 7,
      found: false,
      finished: false
    };
  }
  getMidIndex = (low, high) => Math.floor((high + low) / 2);
  checkMid = () => {
    const mid = this.state.arr[this.state.midIndex];
    if (mid === this.state.searchVal) {
      this.setState({
        found: true,
        finished: true
      });
    }
  };
  stepUp = _ => {
    const val = this.state.searchVal;
    let { highIndex, midIndex, lowIndex } = this.state;
    let stat = false;
    let curr = this.state.arr[midIndex];
    if (curr < val) {
      lowIndex = midIndex + 1;
    } else if (curr > val) {
      highIndex = midIndex - 1;
    }
    midIndex = this.getMidIndex(lowIndex, highIndex);
    curr = this.state.arr[midIndex];
    const displayMid = midIndex;
    if (curr == val) {
      stat = true;
      this.setState({
        lowIndex,
        midIndex,
        highIndex,
        displayMid,
        found: stat,
        finished: true
      });
      return;
    }
    if (curr != val && lowIndex > highIndex) {
      this.setState({
        finished: true
      });
      return;
    }

    this.setState({
      lowIndex,
      midIndex,
      highIndex,
      displayMid
    });
  };
  addCell = () => {
    const arr = this.state.arr.concat(0).sort();
    const high = arr.length - 1;
    const mid = this.getMidIndex(0, high);
    const displayMid = mid;
    this.setState({
      arr,
      highIndex: high,
      lowIndex: 0,
      midIndex: mid,
      found: false,
      finished: false,
      displayMid
    });
  };
  randomize = () => {
    const arr = this.state.arr
      .map(val => Math.floor(Math.random() * 100))
      .sort((first, second) => {
        if (first > second) return 1;
        else if (first < second) return -1;
        return 0;
      });
    const highIndex = this.state.arr.length - 1;
    const lowIndex = 0;
    const midIndex = this.getMidIndex(lowIndex, highIndex);
    const found = false;
    const finished = false;

    this.setState({
      arr,
      highIndex,
      lowIndex,
      midIndex,
      displayMid: midIndex,
      found,
      finished
    });
  };
  changeCell = (e, i) => {
    const inp =
      e.target.value === '' ? 0 : e.target.value.replace(/^0|\D+/g, '');
    console.log(inp);
    console.log('I am here!');
    console.log(e.target.value);
    const arr = [...this.state.arr];
    arr[i] = +inp;
    const sorted = arr.sort((first, second) => {
      if (first > second) return 1;
      else if (first < second) return -1;
      return 0;
    });
    const highIndex = this.state.arr.length - 1;
    const lowIndex = 0;
    const midIndex = this.getMidIndex(lowIndex, highIndex);
    const found = false;
    const finished = false;
    this.setState({
      arr: sorted,
      highIndex,
      lowIndex,
      midIndex,
      displayMid: midIndex,
      found,
      finished
    });
  };
  changeSearch = e => {
    const searchVal = +e.target.value.replace(/\D/g, '');
    const highIndex = this.state.arr.length - 1;
    const lowIndex = 0;
    const midIndex = this.getMidIndex(lowIndex, highIndex);
    const found = false;
    const finished = false;
    this.setState({
      searchVal,
      highIndex,
      lowIndex,
      midIndex,
      displayMid: midIndex,
      found,
      finished
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <div className="buttons">
          <div>
            <button onClick={this.addCell}>
              <i className="fas fa-plus" />
            </button>
          </div>
          <div>
            <button onClick={this.stepUp}>
              <i className="fas fa-play" />
            </button>
          </div>

          <div>
            <button onClick={this.randomize}>
              <i className="fas fa-random" />
            </button>
          </div>
        </div>

        <div className="array">
          <Cells
            handleText={this.changeCell}
            arr={this.state.arr}
            lowIndex={this.state.lowIndex}
            midIndex={this.state.displayMid}
            highIndex={this.state.highIndex}
          />
        </div>

        <div className="labels">
          <Label name="Low" val={this.state.lowIndex} />
          <Label name="Mid" val={this.state.midIndex} />
          <Label name="High" val={this.state.highIndex} />
        </div>
        <div className="search">
          <div className="icon">
            <i className="fas fa-search" />
          </div>

          <input
            id="search-box"
            value={this.state.searchVal}
            onChange={this.changeSearch}
          />
        </div>
        <StatusMessage
          found={this.state.found}
          searching={!this.state.finished}
        />
      </div>
    );
  }
}

export default App;
