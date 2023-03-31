import React, { Component } from "react";

class HonorAwards extends Component {
  state = { awardName: "", awardOrg: "" };

  inputRefAward2 = React.createRef();
  inputRefOrg2 = React.createRef();

  r2onChangeHonorAwardName = (e) => {
    this.setState({ awardName: e.target.value });
    this.props.addAwardMainApp(
      this.props.detailsAward.idAward,
      e.target.value,
      this.state.awardOrg
    );
  };

  r2onChangeHonorMyOrg = (e) => {
    this.setState({ awardOrg: e.target.value });
    this.props.addAwardMainApp(
      this.props.detailsAward.idAward,
      this.state.awardName,
      e.target.value
    );
  };

  onDeleteHonor = () => {
    this.props.onDeleteHonorMain(this.props.detailsAward.idAward);
  };

  render() {
    return (
      <div>
        <div className="d-flex-work-add-button">
          <input
            ref={this.inputRefAward2}
            value={this.props.detailsAward.awardVal}
            onChange={this.r2onChangeHonorAwardName}
            onKeyDown={(e) => {
              if (
                e.key === "Enter" &&
                this.props.detailsAward.awardVal.trim() !== ""
              ) {
                this.inputRefOrg2.current.focus();
              }
            }}
            type="text"
            className="place-text-resume2 fontSizeClasspara"
            placeholder="Award Name"
          />
          <br />
          <div class="cont-add-button-exp">
            <button class="add-button-exp" onClick={this.onDeleteHonor}>
              -
            </button>
          </div>
        </div>

        <input
          ref={this.inputRefOrg2}
          value={this.props.detailsAward.awardOrgVal}
          onChange={this.r2onChangeHonorMyOrg}
          onKeyDown={(e) => {
            if (
              e.key === "Enter" &&
              this.props.detailsAward.awardOrgVal.trim() !== ""
            ) {
              this.props.inputRefEducationDegree.current.focus();
            }
          }}
          type="text"
          className="place-text-resume2 fontSizeClasspara"
          placeholder="My Org"
        />
      </div>
    );
  }
}

export default HonorAwards;
