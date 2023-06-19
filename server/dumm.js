import React, { Component } from "react";
import ToggleSwitch from "./toggle";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

const intialDisable = [
  { disbleId: uuidv4(), disProfilePic: true, checked: true },
  { disbleId: uuidv4(), disRole: true, checked: true },
  { disbleId: uuidv4(), disSummary: true, checked: true },
  { disbleId: uuidv4(), disAbout: true, checked: true },
  { disbleId: uuidv4(), disEmail: true, checked: true },
  { disbleId: uuidv4(), disPhone: true, checked: true },
  { disbleId: uuidv4(), disLinkedin: true, checked: true },
  { disbleId: uuidv4(), disGithub: true, checked: true },
  { disbleId: uuidv4(), disSkills: true, checked: true },
  { disbleId: uuidv4(), disAwards: true, checked: true },
  { disbleId: uuidv4(), disLanguages: true, checked: true },
  { disbleId: uuidv4(), disPersonal: true, checked: true },
];

class App extends Component {
  state = {
    widgetPopup: false,
    disbleList: intialDisable,
    selectedResume: "Resume3",
  };

  updateFunDisable = (disId) => {
    const updateListDis = this.state.disbleList.map((each) => {
      if (disId === each.disbleId) {
        return { ...each, checked: !each.checked };
      }
      return { ...each };
    });

    this.setState({ disbleList: updateListDis });
  };

  onClickOnWidgetButton = () => {
    this.setState({ widgetPopup: true });
  };
  onClickOnWidgetCloseButton = () => {
    this.setState({ widgetPopup: false });
  };
  onClickRes1 = () => {
    this.setState({ selectedResume: "Resume2" });
  };
  onClickRes2 = () => {
    this.setState({ selectedResume: "Resume3" });
  };

  render() {
    let toggleContainer = "";
    if (this.state.selectedResume === "Resume2") {
      toggleContainer = (
        <div className="edit-total-cont">
          <div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[0].disbleId}
                checkedItem={this.state.disbleList[0].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>PICTURE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[4].disbleId}
                checkedItem={this.state.disbleList[4].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>EMAIL</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[5].disbleId}
                checkedItem={this.state.disbleList[5].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>PHONE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[6].disbleId}
                checkedItem={this.state.disbleList[6].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>LINKEDIN</p>
            </div>
          </div>
          <div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[1].disbleId}
                checkedItem={this.state.disbleList[1].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>ROLE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[3].disbleId}
                checkedItem={this.state.disbleList[3].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>ABOUT</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[8].disbleId}
                checkedItem={this.state.disbleList[8].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>SKILLS</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[9].disbleId}
                checkedItem={this.state.disbleList[9].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>AWARDS</p>
            </div>
          </div>
        </div>
      );
    } else if (this.state.selectedResume === "Resume3") {
      toggleContainer = (
        <div className="edit-total-cont">
          <div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[0].disbleId}
                checkedItem={this.state.disbleList[0].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>PICTURE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[1].disbleId}
                checkedItem={this.state.disbleList[1].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>ROLE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[2].disbleId}
                checkedItem={this.state.disbleList[2].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>SUMMARY</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[8].disbleId}
                checkedItem={this.state.disbleList[8].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>SKILLS</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[10].disbleId}
                checkedItem={this.state.disbleList[10].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>LANGUAGE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[11].disbleId}
                checkedItem={this.state.disbleList[11].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>PERSONAL PROJECTS</p>
            </div>
          </div>
          {/* </div> */}
          <div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[4].disbleId}
                checkedItem={this.state.disbleList[4].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>EMAIL</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[5].disbleId}
                checkedItem={this.state.disbleList[5].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>PHONE</p>
            </div>
            <div className="edit-toggle-cont">
              <ToggleSwitch
                disbleList={this.state.disbleList}
                disbleId={this.state.disbleList[6].disbleId}
                checkedItem={this.state.disbleList[6].checked}
                updateFunDisable={this.updateFunDisable}
              />
              <p>LINKEDIN</p>
            </div>
          </div>
        </div>
      );
    }
    console.log(this.state.disbleList);
    const { widgetPopup } = this.state;
    return (
      <div>
        <button onClick={this.onClickOnWidgetButton}>Widget</button>
        <button onClick={this.onClickRes1}>Resume 2</button>
        <button onClick={this.onClickRes2}>Resume 3</button>
        <p>{this.state.selectedResume}</p>
        {widgetPopup && (
          <div className="widget-popup-container">
            <div className="widget-card">
              <div
                className="widget-close-button"
                onClick={this.onClickOnWidgetCloseButton}
              >
                <p className="close-button">X</p>
              </div>
              <div className="toggle-tems">{toggleContainer}</div>
            </div>
          </div>
        )}
        {/* Add toggleContainer here */}
      </div>
    );
  }
}

export default App;
