import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);
    this.state = { toggleSwitch: false };
  }

  clicked() {
    this.setState({ toggleSwitch: !this.state.toggleSwitch });
  }

  render() {
    let btnClass = 'btn-on';
    let divClass = 'switch-on';
    let textClass = 'text-on';
    let spanText = 'ON';
    if (this.state.toggleSwitch === false) {
      btnClass = 'btn-off';
      divClass = 'switch-off';
      textClass = 'text-off';
      spanText = 'OFF';
    } else {
      btnClass = 'btn-on';
      divClass = 'switch-on';
      textClass = 'text-on';
      spanText = 'ON';
    }
    return (
    <div>
      <button className={ btnClass } onClick={this.clicked}>
        <div className={ divClass }></div>
      </button>
      <span className={ textClass }> { spanText } </span>
    </div>
    );
  }
}

export default ToggleSwitch;
