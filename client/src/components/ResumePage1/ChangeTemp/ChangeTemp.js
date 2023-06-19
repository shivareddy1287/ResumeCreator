import { Component } from "react";
import "./ChangeTemp.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";

class ResumeSelector extends Component {
  state = { selectResumePopup: false, selectedResume: "Resume2" };

  onClickSelectResume = () => {
    this.setState({ selectResumePopup: true });
  };

  // onClickOnResume1 = () => {
  //   this.setState({ selectResumePopup: false, selectedResume: "Resume1" });
  //   this.props.onChangeAppSelectResume("Resume1");
  //   this.props.changeStateFun();
  // };
  onClickOnResume2 = () => {
    this.setState({ selectResumePopup: false, selectedResume: "Resume2" });
    this.props.onChangeAppSelectResume("Resume2");
    this.props.changeStateFun();
  };
  onClickOnResume3 = () => {
    this.setState({ selectResumePopup: false, selectedResume: "Resume3" });
    this.props.onChangeAppSelectResume("Resume3");
    this.props.changeStateFun();
  };
  onClickResumeBackButton = () => {
    this.setState({ selectResumePopup: false });
  };

  render() {
    const { selectResumePopup } = this.state;
    return (
      <div>
        <div
          onClick={this.onClickSelectResume}
          className="row-horzontal-color-new"
        >
          <div className="template-button-icon-new">
            <FontAwesomeIcon icon={faFileLines} />
          </div>

          <p className="dowload-text-new">TEMPLATE</p>
        </div>
        {/* <div className="choose-template" onClick={this.onClickSelectResume}>
          <FontAwesomeIcon
            className="choose-template-icon"
            icon={faFileLines}
          />
          <p className="choose-template-text">Choose Template</p>
        </div> */}
        {selectResumePopup && (
          <div className="select-resume-popup">
            <div className="res-popup">
              <button
                onClick={this.onClickResumeBackButton}
                className="resume-back-button"
              >
                X
              </button>
              {/* <img
                alt="Resume1"
                className="resume-images"
                onClick={this.onClickOnResume1}
                src="https://mycvdesigner.com/wp-content/uploads/2020/06/administrative-assistant-visual-resume-example-mcdv0034-724x1024.png"
              /> */}
              <img
                alt="Resume2"
                className="resume-images"
                onClick={this.onClickOnResume2}
                src="https://res.cloudinary.com/dzrc9ejln/image/upload/v1683118987/Screenshot_2023-05-03_182518_cc1xuz.png"
              />
              <img
                alt="Resume3"
                className="resume-images"
                onClick={this.onClickOnResume3}
                src="https://res.cloudinary.com/dzrc9ejln/image/upload/v1683118904/Screenshot_2023-05-03_182547_tddle6.png"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ResumeSelector;

// import { Component } from "react";
// // import SelectOption from "./SelectWithRightMark ";

// import "./ChangeTemp.css";

// class ChangeTemp extends Component {
//   onChangeSelectResume = (e) => {
//     const selectedVal = e.target.value;
//     this.props.onChangeAppSelectResume(selectedVal);
//     this.props.changeStateFun();
//   };

//   render() {
//     const { selectResume } = this.props;
//     return (
//       <div>
//         <div className="top-select-styles-bg">
//           <select
//             className="selected-options-ChangeTemp"
//             onChange={this.onChangeSelectResume}
//             value={selectResume}
//           >
//             <option value="Resume1">Resume1</option>
//             <option value="Resume2">Resume2</option>
//             <option selected value="Resume3">
//               Resume3
//             </option>
//           </select>
//         </div>
//         {/* <div>
//           <SelectOption />
//         </div> */}
//       </div>
//     );
//   }
// }

// export default ChangeTemp;
