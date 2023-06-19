import React, { Component } from "react";
import "./r2languagesknown.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

class Lang extends Component {
  state = {
    lang: this.props.eachLangDetails.language,
    prof: this.props.eachLangDetails.proficiency,
    showLangPopup: false,
    styleborderlang: { border: "none" },
  };

  popupLangRef = React.createRef();

  onUpdateLangInput = (event) => {
    this.setState({ lang: event.target.value });
    const { onUpdateLangInputs, eachLangDetails } = this.props;
    const { langId } = eachLangDetails;
    const { prof } = this.state;
    onUpdateLangInputs(langId, event.target.value, prof);
  };

  onUpdateProfInput = (event) => {
    this.setState({ prof: event.target.value });
    const { onUpdateLangInputs, eachLangDetails } = this.props;
    const { langId } = eachLangDetails;
    const { lang } = this.state;
    onUpdateLangInputs(langId, lang, event.target.value);
  };

  handleDeteleInput = () => {
    const { eachLangDetails, onDeleteLanguage } = this.props;
    const { langId } = eachLangDetails;
    onDeleteLanguage(langId);
  };

  onClickLangContainer = () => {
    this.setState({ showLangPopup: true });
    this.setState({
      styleborderlang: {
        border: "1px dashed",
        borderRadius: "10px",
        padding: "9px",
      },
    });
  };

  onHandleSwapLeft = () => {
    const { eachLangDetails, onSwapeLeftLangCont } = this.props;
    const { langId } = eachLangDetails;
    onSwapeLeftLangCont(langId);
  };

  handleSwapRight = () => {
    const { eachLangDetails, onSwapRightLangCont } = this.props;
    const { langId } = eachLangDetails;
    onSwapRightLangCont(langId);
  };

  handleLangClickOutSide = (event) => {
    if (
      this.popupLangRef.current &&
      !this.popupLangRef.current.contains(event.target)
    ) {
      this.setState({ showLangPopup: false });
      this.setState({ styleborderlang: { border: "none" } });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleLangClickOutSide);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleLangClickOutSide);
  }

  render() {
    const { showLangPopup, lang, prof, styleborderlang } = this.state;
    return (
      <div
        className="lang-inputs-conatiner"
        onClick={this.onClickLangContainer}
        ref={this.popupLangRef}
        style={styleborderlang}
      >
        {showLangPopup && (
          <div className="all-widget-pop-upp">
            <div className="widget-options">
              <span className="buttonn" onClick={this.handleDeteleInput}>
                <FontAwesomeIcon className="icon-style" icon={faTrash} />
              </span>
              <span onClick={this.onHandleSwapLeft}>
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="icon-style"
                />
              </span>
              <span onClick={this.handleSwapRight}>
                <FontAwesomeIcon
                  className="icon-style"
                  icon={faCircleArrowRight}
                />
              </span>
            </div>
          </div>
        )}
        <input
          onChange={this.onUpdateLangInput}
          className="r2-language-text"
          placeholder="Enter Language"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              this.selectProficiency.focus();
            }
          }}
          value={lang}
        />{" "}
        <br />
        <select
          className="language-selector-input"
          value={prof}
          ref={(element) => {
            this.selectProficiency = element;
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
            }
          }}
          onChange={this.onUpdateProfInput}
        >
          <option value="Full Proficient">Full Proficient</option>
          <option value="Intermidiate">Intermidiate</option>
          <option value="Bigginer">Bigginer</option>
        </select>
      </div>
    );
  }
}

export default Lang;
