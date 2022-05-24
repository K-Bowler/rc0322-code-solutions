import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.timer = this.timer.bind(this);
    this.clicked = this.clicked.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.state = {
      counter: 0,
      isRunning: false
    };
  }

  timer() {
    this.setState({ counter: this.state.counter + 1 });
  }

  clicked() {
    if (this.state.isRunning === false) {
      this.intervalId = setInterval(this.timer, 1000);
    } else {
      clearInterval(this.intervalId);
    }
    this.setState({ isRunning: !this.state.isRunning });
  }

  resetTimer() {
    if (!this.state.isRunning) {
      this.setState({ counter: 0 });
    }
  }

  render() {
    let icon = 'fas fa-play';
    if (this.state.isRunning === true) {
      icon = 'fas fa-pause';
    } else {
      icon = 'fas fa-play';
    }
    return (
      <div className='container'>
        <div className='row'>
          <div onClick={this.resetTimer} className='counter-circle'>
            <div className='counter'> {this.state.counter} </div>
          </div>
        </div>
        <div className='row'>
          <i className={icon} onClick={this.clicked}></i>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
