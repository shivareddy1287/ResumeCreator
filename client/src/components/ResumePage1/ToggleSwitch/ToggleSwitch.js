import React from "react";
import ReactSwitch from "react-switch";

class ToggleSwitch extends React.Component {
  state = {
    checked: true,
  };

  handleChange = () => {
    this.props.updateFunDisable(this.props.disbleId);
  };

  render() {
    return (
      <div className="app" style={{ textAlign: "center", height: "20px" }}>
        <ReactSwitch
          checked={this.props.checkedItem}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ToggleSwitch;
