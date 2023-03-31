import React, { Component } from "react";
import "./skills.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
class Skills extends Component {
  input1Ref = React.createRef();
  state = {
    showButton: false,
    editItem: false,
    updatedSkill: this.props.skillsDetails.skill,
    styletry1: { backgroundColor: "" },
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
    const { showButton } = this.state;
    this.setState({ showButton: !showButton });
    if (showButton) {
      this.setState({ styletry1: { backgroundColor: "#9f9a96" } });
    } else {
      this.setState({ styletry1: { backgroundColor: "orange" } });
    }
  };

  onClickonSkillSaveButton = () => {
    this.setState({ editItem: false });
    this.setState({ styletry1: { backgroundColor: "#9f9a96" } });
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

  render() {
    const { showButton, editItem, updatedSkill, styletry1 } = this.state;
    const { skillsDetails } = this.props;
    const { skill } = skillsDetails;

    if (editItem) {
      return (
        <span className="skill-box bbb">
          <input
            onChange={this.onChangeEditSkillName}
            value={updatedSkill}
            // style={styletry1}
            className="skill-box inside-edit"
            ref={this.input1Ref}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.onClickonSkillSaveButton();
                this.onClickEnterAfterUpdate();
              }
            }}
          />

          {/* {showButton && ( */}
          <button
            className="skill-box inside-edit"
            onClick={this.onClickonSkillSaveButton}
          >
            Save
          </button>
          {/* )} */}
        </span>
      );
    } else {
      return (
        <>
          <span
            className="skill-box"
            style={styletry1}
            onClick={this.onClickonSkillItem}
          >
            {skill}{" "}
          </span>
          {showButton && (
            <div className="right-side-scroll-bar">
              <span className="buttonn" onClick={this.onHandleDeleteSkill}>
                <FontAwesomeIcon icon={faTrash} />
              </span>
              <span onClick={this.onClickEditButton}>
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>
            </div>
          )}
        </>
      );
    }
  }
}

export default Skills;
