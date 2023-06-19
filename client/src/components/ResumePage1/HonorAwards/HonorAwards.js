import React, { Component } from "react";
import "./HonorAwards.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleArrowDown,
  faCircleArrowUp,
} from "@fortawesome/free-solid-svg-icons";
// import { FaTrash, FaSave } from "react-icons/fa";

class HonorAwards extends Component {
  state = {
    Awardree: this.props.details.awardName,
    school: this.props.details.Organization,
    fromSchool: this.props.details.fromOrganization,
    untillSchool: this.props.details.toOrganization,
    showhonorAwardsWidget: false,
    eduSelectStyleBorder: {
      border: "none",
    },
    ishonorAwards: false,
    idIndexEduc: "",
  };

  inputRefhonorAwardsSchool = React.createRef();
  inputRefEduFrom = React.createRef();
  inputRefEnterCity = React.createRef();

  eduWidjetRef = React.createRef();

  onDeletess = (OnDeleteMainhonorAwards, awardIdd) => {
    OnDeleteMainhonorAwards(awardIdd);
  };

  onAwardree = (e) => {
    this.setState({ Awardree: e.target.value });
    console.log(
      this.state.school,
      this.state.Awardree,
      this.state.fromSchool,
      this.state.untillSchool
    );
    this.props.onChangeValMainhonorAwards(
      e.target.value,
      this.state.school,
      this.state.fromSchool,
      this.state.untillSchool,
      this.props.details.awardIdd
    );
  };

  onSchool = (e) => {
    this.setState({ school: e.target.value });
    this.props.onChangeValMainhonorAwards(
      this.state.Awardree,
      e.target.value,
      this.state.fromSchool,
      this.state.untillSchool,
      this.props.details.awardIdd
    );
  };
  onChangeFromValue = (event) => {
    this.setState({ fromSchool: event.target.value });
    this.props.onChangeValMainhonorAwards(
      this.state.Awardree,
      this.state.school,
      event.target.value,
      this.state.untillSchool,
      this.props.details.awardIdd
    );
  };

  onChangeUntillVal = (event) => {
    this.setState({ untillSchool: event.target.value });
    this.props.onChangeValMainhonorAwards(
      this.state.Awardree,
      this.state.school,
      this.state.fromSchool,
      event.target.value,
      this.props.details.awardIdd
    );
  };

  onHandleSwapUp = () => {
    const { details, onSwapUphonorAwards } = this.props;
    const { awardIdd } = details;
    onSwapUphonorAwards(awardIdd);
  };

  onHandleSwapDown = () => {
    const { details, onSwapDownhonorAwards } = this.props;
    const { awardIdd } = details;
    onSwapDownhonorAwards(awardIdd);
  };

  onClickOnhonorAwardsContainer = () => {
    this.setState({ showhonorAwardsWidget: true });
    this.setState({
      eduSelectStyleBorder: {
        border: "2px dashed",
        borderRadius: "10px",
        // paddingRight: "5px",
        padding: "4.5px",
      },
    });
  };

  handlehonorAwardsClickOutSide = (event) => {
    if (
      this.eduWidjetRef.current &&
      !this.eduWidjetRef.current.contains(event.target)
    ) {
      this.setState({ showhonorAwardsWidget: false });
      this.setState({ eduSelectStyleBorder: { border: "none" } });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handlehonorAwardsClickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener(
      "mousedown",
      this.handlehonorAwardsClickOutSide
    );
  }

  nextFocusFunEduction = () => {
    this.setState({ idIndexEduc: "", ishonorAwards: true });
  };

  onFocusonInputElement = () => {
    this.setState({
      eduSelectStyleBorder: {
        border: "2px dashed",
        borderRadius: "10px",
        padding: "4.5px",
      },
    });
    // this.setState({ showhonorAwardsWidget: true });
  };

  render() {
    const { details, OnDeleteMainhonorAwards } = this.props;

    const { showhonorAwardsWidget, eduSelectStyleBorder } = this.state;

    const { awardIdd, awardName, Organization } = details;

    let styleColorHeading = this.props.styleCol;
    let classhonorAwards = "d-flex-add-deleteEdu";

    if (this.props.selectResume === "Resume1") {
      styleColorHeading = this.props.styleCol;
      classhonorAwards = "d-flex-add-deleteEdu";
    } else if (this.props.selectResume === "Resume2") {
      styleColorHeading = "";
    }

    if (this.state.ishonorAwards) {
      const nextId =
        this.props.honorAwardsList[this.props.honorAwardsList.length - 1]
          ?.awardIdd;

      if (nextId !== undefined) {
        const inputIdEnter = document.getElementById(`${nextId}`);

        if (inputIdEnter !== null) {
          inputIdEnter.focus();

          this.setState({ ishonorAwards: false });
        } else {
          this.setState({ idIndexEduc: "" });
        }
      }
    }

    const resul1 = this.props.honorAwardsList.every(
      (each) => each.awardName.length > 0
    );

    const resul2 = this.props.honorAwardsList.every(
      (each) => each.Organization.length > 0
    );

    const finalEdu = resul1 && resul2;

    return (
      <div
        className="honorAwards-li-item style-border"
        onClick={this.onClickOnhonorAwardsContainer}
        ref={this.eduWidjetRef}
        style={eduSelectStyleBorder}
      >
        <div>
          <div className="inividual-honorAwards-container">
            <div className={classhonorAwards}>
              {showhonorAwardsWidget && (
                <div className="all-widget-pop-upp" ref={this.skillspopupRef}>
                  <div className="widget-options">
                    <span
                      className="buttonn"
                      onClick={() =>
                        this.onDeletess(OnDeleteMainhonorAwards, awardIdd)
                      }
                    >
                      <FontAwesomeIcon className="icon-style" icon={faTrash} />
                    </span>
                    <span onClick={this.onHandleSwapUp}>
                      <FontAwesomeIcon
                        icon={faCircleArrowUp}
                        className="icon-style"
                      />
                    </span>
                    <span onClick={this.onHandleSwapDown}>
                      <FontAwesomeIcon
                        className="icon-style"
                        icon={faCircleArrowDown}
                      />
                    </span>
                  </div>
                </div>
              )}
            </div>
            <div className="eud-input-cont-from-to">
              <div>
                <input
                  id={this.props.details.awardIdd}
                  ref={this.props.inputRefhonorAwardsAwardree}
                  value={awardName}
                  type="text"
                  className="position-text-honor margin awardFontSize "
                  placeholder="Award"
                  onChange={this.onAwardree}
                  onFocus={this.onFocusonInputElement}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && awardName.trim() !== "") {
                      this.inputRefhonorAwardsSchool.current.focus();
                    }
                  }}
                />
                <br />
              </div>
            </div>

            <div className="from-until-flex">
              <input
                ref={this.inputRefhonorAwardsSchool}
                value={Organization}
                type="text"
                className="employer-text sub-margin fontSizeClasspara"
                placeholder="Organization"
                onChange={this.onSchool}
                onKeyDown={(e) => {
                  if (
                    e.key === "Enter" &&
                    Organization.trim() !== "" &&
                    awardName.trim() !== "" &&
                    finalEdu
                  ) {
                    this.setState({ eduSelectStyleBorder: { border: "none" } });
                    this.setState({ showhonorAwardsWidget: false });
                    this.props.onAddNewhonorAwards();
                    this.inputRefhonorAwardsSchool.current.blur();

                    this.nextFocusFunEduction();
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HonorAwards;
