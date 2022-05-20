import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = { totalClicks: 0 };
  }

  clicked() {
    this.setState({ totalClicks: this.state.totalClicks + 1 });
  }

  render() {
    const totalClicks = this.state.totalClicks;
    let btnWarmth = 'freeze';
    if (totalClicks < 3) {
      btnWarmth = 'freeze';
    } else if (totalClicks < 6) {
      btnWarmth = 'colder';
    } else if (totalClicks < 9) {
      btnWarmth = 'cold';
    } else if (totalClicks < 12) {
      btnWarmth = 'luke-warm';
    } else if (totalClicks < 15) {
      btnWarmth = 'warm';
    } else if (totalClicks < 18) {
      btnWarmth = 'hot';
    } else if (totalClicks < 21) {
      btnWarmth = 'red-hot';
    } else {
      btnWarmth = 'white-hot';
    }
    return <button className={`btn ${btnWarmth}`} onClick={this.clicked}>Hot Button</button>;
  }
}

export default HotButton;
