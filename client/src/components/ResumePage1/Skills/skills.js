import React, { Component } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faPenToSquare,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

class Skills extends Component {
  input1Ref = React.createRef();
  skillspopupRef = React.createRef();
  state = {
    showButton: false,
    editItem: false,
    updatedSkill: this.props.skillsDetails.skill,
    styletry1: { backgroundColor: "" },
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.skillspopupRef.current &&
      !this.skillspopupRef.current.contains(event.target)
    ) {
      this.setState({ showButton: false });
      this.setState({ styletry1: { backgroundColor: "#d3d3d3" } });
    }
  };

  onHandleDeleteSkill = () => {
    const { skillsDetails, onDeleteSkill } = this.props;
    const { uniqueNo } = skillsDetails;
    onDeleteSkill(uniqueNo);
  };

  onMoueseEnterSkillElement = () => {
    this.setState({ showButton: true });
  };
  onMouseLeaveSkillElement = () => {
    this.setState({ showButton: false });
  };

  onClickonSkillItem = () => {
    // this.setState({ showButton: false });
    const { showButton } = this.state;
    this.setState({ showButton: !showButton });
    if (showButton) {
      this.setState({ styletry1: { backgroundColor: "#d3d3d3" } });
    } else {
      this.setState({ styletry1: { backgroundColor: "orange" } });
    }
  };

  onClickonSkillSaveButton = () => {
    this.setState({ editItem: false });
    this.setState({ showButton: false });
    this.setState({ styletry1: { backgroundColor: "#d3d3d3" } });
  };

  onChangeEditSkillName = (event) => {
    this.setState({ updatedSkill: event.target.value });
    const uppSkill = event.target.value;
    const { skillsDetails, onUpdateSkillsList } = this.props;
    const { uniqueNo } = skillsDetails;
    onUpdateSkillsList(uniqueNo, uppSkill);
  };

  onClickEnterAfterUpdate = () => {
    const { onClikEnterAfterUpd } = this.props;
    onClikEnterAfterUpd("Enter");
    this.onMouseLeaveSkillElement();
  };

  onFocusEditInput = () => {
    this.input1Ref.current.focus();
  };

  onClickEditButton = () => {
    this.setState({ editItem: true });
  };

  handleSwapLeft = () => {
    const { skillsDetails, onSwapLeft } = this.props;
    const { uniqueNo } = skillsDetails;
    onSwapLeft(uniqueNo);
  };

  onHandleSwapRight = () => {
    const { skillsDetails, onSwapRight } = this.props;
    const { uniqueNo } = skillsDetails;
    onSwapRight(uniqueNo);
  };

  render() {
    const { showButton, editItem, updatedSkill, styletry1 } = this.state;
    const { skillsDetails } = this.props;
    const { skill } = skillsDetails;

    if (editItem) {
      return (
        <span className="skill-box bbb bb2">
          <input
            onChange={this.onChangeEditSkillName}
            value={updatedSkill}
            className="skill-box inside-edit"
            ref={this.input1Ref}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.onClickonSkillSaveButton();
                this.onClickEnterAfterUpdate();
              }
            }}
          />

          <button
            className="skill-box inside-edit"
            onClick={this.onClickonSkillSaveButton}
          >
            Save
          </button>
        </span>
      );
    } else {
      return (
        <>
          <span
            className="skill-box span-el-crate"
            style={styletry1}
            onClick={this.onClickonSkillItem}
          >
            {skill}{" "}
          </span>
          {showButton && (
            <div className="all-widget-pop-upp" ref={this.skillspopupRef}>
              <div className="widget-options">
                <span className="buttonn" onClick={this.onHandleDeleteSkill}>
                  <FontAwesomeIcon className="icon-style" icon={faTrash} />
                </span>
                <span onClick={this.onClickEditButton}>
                  <FontAwesomeIcon
                    className="icon-style"
                    icon={faPenToSquare}
                  />
                </span>
                <span onClick={this.handleSwapLeft}>
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    className="icon-style"
                  />
                </span>
                <span onClick={this.onHandleSwapRight}>
                  <FontAwesomeIcon
                    className="icon-style"
                    icon={faCircleArrowRight}
                  />
                </span>
              </div>
            </div>
          )}
        </>
      );
    }
  }
}

export default Skills;
