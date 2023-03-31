import { Component } from "react";
// import SelectOption from "./SelectWithRightMark ";

import "./ChangeTemp.css";

class ChangeTemp extends Component {
  onChangeSelectResume = (e) => {
    const selectedVal = e.target.value;
    this.props.onChangeAppSelectResume(selectedVal);
  };

  render() {
    const { selectResume } = this.props;
    return (
      <div>
        <div className="top-select-styles-bg">
          <select
            className="selected-options-ChangeTemp"
            onChange={this.onChangeSelectResume}
            value={selectResume}
          >
            <option value="Resume1">Resume1</option>
            <option value="Resume2">Resume2</option>
            <option selected value="Resume3">
              Resume3
            </option>
          </select>
        </div>
        {/* <div>
          <SelectOption />
        </div> */}
      </div>
    );
  }
}

export default ChangeTemp;
