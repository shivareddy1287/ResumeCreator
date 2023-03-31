import React, { Component } from "react";
import "./r2languagesknown.css";

class LanguagesKnown extends Component {
  state = {
    lanShowInput: false,
    showDeleteButton: true,
    lang: this.props.languagesDetails.language,
    prof: this.props.languagesDetails.proficiency,
  };

  input1Ref = React.createRef();
  input2Ref = React.createRef();

  onChangeLangInput = (event) => {
    const { languagesDetails, onUpdateLangCont } = this.props;
    const { langId } = languagesDetails;
    const { lang, prof } = this.state;
    this.setState({ lang: event.target.value });
    onUpdateLangCont(lang, prof, langId);
  };

  onChangeProfInput = (event) => {
    this.setState({ prof: event.target.value });
  };

  onClickSpanItem = () => {
    this.setState({ lanShowInput: true });
    // this.input1Ref.current.focus();
  };

  onClickDeleteButton = () => {
    const { languagesDetails, onDeleteLangCont } = this.props;
    const { langId } = languagesDetails;
    onDeleteLangCont(langId);
  };

  onEnterOnSecondInput = () => {
    const { onClickOnSecondInput } = this.props;
    this.setState({ lanShowInput: false });

    onClickOnSecondInput("Enter");
  };

  onMouseEnterLangBox = () => {
    this.setState({ showDeleteButton: true });
  };
  onMouseLeaveLangBox = () => {
    this.setState({ showDeleteButton: false });
  };

  render() {
    // const { languagesDetails } = this.props;
    // const { language, proficiency } = languagesDetails;

    const { lanShowInput, showDeleteButton, lang, prof } = this.state;

    if (lanShowInput) {
      return (
        <div className="lan-input-container">
          <input
            onChange={this.onChangeLangInput}
            value={lang}
            ref={this.input1Ref}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.input2Ref.current.focus();
              }
            }}
            className="lan-span-input"
          />
          <br />
          <input
            onChange={this.onChangeProfInput}
            value={prof}
            ref={this.input2Ref}
            className="lan-span-input2"
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                this.onEnterOnSecondInput();
              }
            }}
          />
        </div>
      );
    }

    return (
      <span className="languages-box">
        {showDeleteButton && (
          <button
            className="r2-lang-del-button"
            onClick={this.onClickDeleteButton}
          >
            -
          </button>
        )}

        <div
          className="r2-lang-cont"
          onClick={this.onClickSpanItem}
          // onMouseEnter={this.onMouseEnterLangBox}
          // onMouseLeave={this.onMouseLeaveLangBox}
        >
          <h4 className="r2-laguage-heading" onClick={this.onClickSpanItem}>
            {lang}
          </h4>
          <p className="r2-proficiency-text" onClick={this.onClickSpanItem}>
            {prof}
          </p>
        </div>
      </span>
    );
  }
}

export default LanguagesKnown;
