import React from "react";
import "./app.css";

class Buttons extends React.Component {
  state = {
    mouseDownTime: 0,
    mouseUpTime: 0
  }

  /**
   * Calculate time when is mouse pressed
   * @memberof Buttons
   */
  mouseDown = () => {
    const current = new Date().getTime();
    this.setState({ mouseDownTime: current });
  }
  /**
   * Calculate time when is mouse released
   * @memberof Buttons
   */
  mouseUp = () => {
    const current = new Date().getTime();
    this.setState({ mouseUpTime: current });
  }
  render() {
    return (<button className="StyledButton" onClick={() => this.props.onclick(this.props.keys[0], this.state.mouseDownTime, this.state.mouseUpTime)} onMouseDown={this.mouseDown} onMouseUp={this.mouseUp}>{this.props.keys[1]}<br></br>{this.props.keys[2]}</button>);
  }
}
export default Buttons;
