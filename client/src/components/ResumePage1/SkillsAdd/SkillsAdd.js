import React, { Component } from "react";
import "./SkillsAdd.css";

class SkillsAdd extends Component {
  state = {
    skillsVal: "",
    enterSkills: "",
    widthVal: "100px",
    idIndex: "",
    isFun: false,
  };

  inputRefEnterSkills = React.createRef();

  onChangeEnterSkills = (e) => {
    const value = e.target.value;
    const width = `${this.inputRefEnterSkills.current.scrollWidth}px`;
    const prevLength = this.state.enterSkills.length;
    const currLength = value.length;
    const isDeleting = currLength <= prevLength;

    if (!isDeleting) {
      this.setState({
        enterSkills: value,
        widthVal: width,
      });
    } else if (value === "") {
      this.setState({
        enterSkills: value,
        widthVal: "80px",
      });
    } else {
      this.setState({
        enterSkills: value,
      });
    }

    this.props.addMainFunSkills(this.props.details.idskils, value, width);
  };

  onDeleteSkils = () => {
    this.props.onDeleteMainSkils(this.props.details.idskils);
  };

  nextFocusFun = () => {
    this.setState({ idIndex: this.props.details.idskils, isFun: true });
    console.log(
      this.props.skillsAdding.every((each) => each.skillsListVal.length > 0)
    );
  };

  render() {
    if (this.state.isFun) {
      // const indexId = this.props.skillsAdding.findIndex(
      //   (obj1) => obj1.idskils === this.props.details.idskils
      // );
      const nextId =
        this.props.skillsAdding[this.props.skillsAdding.length - 1]?.idskils;
      // console.log(1);
      if (nextId !== undefined) {
        const inputIdEnter = document.getElementById(`${nextId}`);
        // console.log(2);

        if (inputIdEnter !== null) {
          inputIdEnter.focus();
          // console.log(3);
          this.setState({ isFun: false });
        } else {
          this.setState({ idIndex: this.props.details.idskils });
          // this.props.dummyFun();
          // console.log(4);
        }
      }
      // else {
      //   this.setState({ idIndex: this.props.details.idskils });
      //   // this.props.dummyFun();
      //   // console.log(5);
      // }
    }

    return (
      <div className="cont-d-flex-delete-button11">
        <input
          id={this.props.details.idskils}
          ref={this.inputRefEnterSkills}
          onChange={this.onChangeEnterSkills}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              // this.props.details.skillsListVal.length > 0
              this.props.skillsAdding.every(
                (each) => each.skillsListVal.length > 0
              )
            ) {
              this.props.onclickAddSkills();
              this.inputRefEnterSkills.current.blur(); // Unfocus current input
              // this.props.focusNextInput(this.props.details.idskils);
              this.nextFocusFun();
            }
          }}
          value={this.props.details.skillsListVal}
          className="place-text-skills-add-section bgcc my-input fontSizeClasspara"
          placeholder="Enter skill"
          style={{ width: this.state.widthVal }}

          //   style={{ backgroundColor: this.props.styleCol }}
        />
        {this.props.deleteSkillsDisplay && (
          <div class="cont-add-button-exp">
            <button class="add-button-exp" onClick={this.onDeleteSkils}>
              -
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default SkillsAdd;
