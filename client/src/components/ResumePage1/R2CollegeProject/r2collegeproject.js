import React, { Component } from "react";
import "./r2collegeproject.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleArrowUp,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";

class CollegeProject extends Component {
  state = {
    inp1: this.props.eachProj.collegeProjName,
    inp2: this.props.eachProj.createDetails,
    inp3: this.props.eachProj.addedDetails,
    showProjPopup: false,
    projBg: { border: "none" },
  };

  popupLanInpRef = React.createRef();

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.popupLanInpRef.current &&
      !this.popupLanInpRef.current.contains(event.target)
    ) {
      this.setState({ showProjPopup: false });
      this.setState({ projBg: { border: "none" } });
    }
  };

  onChangeinp1 = (event) => {
    const { eachProj, onUpdateInputs } = this.props;
    const { inp2, inp3 } = this.state;
    this.setState({ inp1: event.target.value });
    onUpdateInputs(eachProj.uniqueId, event.target.value, inp2, inp3);
  };

  onChangeinp2 = (event) => {
    const { eachProj, onUpdateInputs } = this.props;
    const { inp1, inp3 } = this.state;
    this.setState({ inp2: event.target.value });
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    onUpdateInputs(eachProj.uniqueId, inp1, event.target.value, inp3);
  };

  onChangeinp3 = (event) => {
    const { eachProj, onUpdateInputs } = this.props;
    const { inp1, inp2 } = this.state;
    this.setState({ inp3: event.target.value });
    const textarea = event.target;
    textarea.style.height = "auto";
    textarea.style.height = `${textarea.scrollHeight}px`;
    onUpdateInputs(eachProj.uniqueId, inp1, inp2, event.target.value);
  };

  onClikonInputs = () => {
    this.setState({ showProjPopup: true });
  };

  onHandleDeleteProj = () => {
    const { eachProj, onDeleteProj } = this.props;
    onDeleteProj(eachProj.uniqueId);
  };

  onEnter3rdInput = (event) => {
    const { onEnterproj3rdInput } = this.props;
    if (event.key === "Enter") {
      event.preventDefault();
      onEnterproj3rdInput(event.key);
    }
  };

  onClickCPProjElement = () => {
    // const { showProjPopup } = this.state;
    this.setState({ showProjPopup: true });
    this.setState({ projBg: { border: "2px dashed", padding: "8px" } });
  };

  componentDidUpdate() {
    // const { inp1, inp2, inp3 } = this.state;
    // if (inp1 === "" && inp2 === "" && inp3 === "") {
    //   this.textarea1.focus();
    // }
  }

  componentDidMount() {
    const { inp1, inp2, inp3 } = this.state;
    // if (inp1 === "" && inp2 === "" && inp3 === "") {
    //   this.textarea1.focus();
    // }
    // this.setState({ showProjPopup: true });
    // this.setState({ projBg: { border: "2px dashed", padding: "8px" } });
    this.onChangeinp2({ target: this.textarea2 });
    this.onChangeinp3({ target: this.textarea3 });
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  onHandleMoveUp = () => {
    const { eachProj, onSwapUpElement } = this.props;
    const { uniqueId } = eachProj;
    onSwapUpElement(uniqueId);
  };

  onHandleMoveDown = () => {
    const { eachProj, onSwapDownElement } = this.props;
    const { uniqueId } = eachProj;
    onSwapDownElement(uniqueId);
  };
  render() {
    const { showProjPopup, projBg, inp1, inp2, inp3 } = this.state;
    console.log("yes it was triggering");

    return (
      <div
        className="proj-input-container"
        style={projBg}
        onClick={this.onClickCPProjElement}
        ref={this.popupLanInpRef}
      >
        {showProjPopup && (
          <div className="all-widget-pop-upp">
            <div className="widget-options">
              <span className="buttonn" onClick={this.onHandleDeleteProj}>
                {" "}
                <FontAwesomeIcon className="icon-style" icon={faTrash} />
              </span>
              <span className="buttonn" onClick={this.onHandleMoveUp}>
                {" "}
                <FontAwesomeIcon
                  icon={faCircleArrowUp}
                  className="icon-style"
                />
              </span>
              <span className="buttonn" onClick={this.onHandleMoveDown}>
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faCircleArrowDown}
                />
              </span>
            </div>
            {/* </div> */}
          </div>
        )}
        {/* <form
          onSubmit={(event) => {
            event.preventDefault();
            this.textarea2.focus();
          }}
        > */}
        <input
          onChange={this.onChangeinp1}
          onClick={this.onClikonInputs}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              this.textarea2.focus();
            }
          }}
          ref={(element) => {
            this.textarea1 = element;
          }}
          placeholder="College"
          value={inp1}
          className="col-proj-input1"
        />{" "}
        <br />
        {/* </form> */}
        <textarea
          onChange={this.onChangeinp2}
          placeholder="-Created the details"
          value={inp2}
          rows="1"
          className="bg-cont col-proj-input2 scroll-hidden"
          style={{ resize: "none", width: "100%", fontSize: "16px" }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              this.textarea3.focus();
            }
          }}
          ref={(element) => {
            this.textarea2 = element;
          }}
        />
        <br />
        <textarea
          rows="1"
          onChange={this.onChangeinp3}
          placeholder="-Added the Details"
          value={inp3}
          className="bg-cont col-proj-input2 scroll-hidden onChangeinp3"
          style={{ resize: "none", width: "100%", fontSize: "16px" }}
          onKeyDown={this.onEnter3rdInput}
          ref={(element) => {
            this.textarea3 = element;
          }}
        />
      </div>
    );
  }
}

export default CollegeProject;
