import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";

import { MdEmail } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreenButton,
  faLink,
} from "@fortawesome/free-solid-svg-icons";

import ColorPiker from "./PopUp/popup";

import { IoMdDownload } from "react-icons/io";

import jsPDF from "jspdf";

import ImageUpload from "./UploadImage/uploadimage";

import AddWorkExp from "./AddWorkExperience/workexperience";
import Education from "./Education/education";
import ChangeTemp from "./ChangeTemp/ChangeTemp";
import R2ImageUpload from "./R2UploadImg/r2uploadimg";
import Skills from "./Skills/skills";
import AddPersonalProjects from "./PersonalProjects/personalprojects";

import SkillsAdd from "./SkillsAdd/SkillsAdd";
import LanguagesKnown from "./R2LaguagesKnown/r2languagesknown";

import HonorAwards from "./HonorAwards/HonorAwards";

import { toPng } from "html-to-image";

import "./resumepage1.css";

const intialAdd = {
  id: uuidv4(),
  id2: uuidv4(),
  workVal: "",
  positionVal: "",
  employerVal: "",
  fromUntilVal: "",
  scrollDum2Height: "100px",
};

const intialAddEducation = {
  idss: uuidv4(),
  degreeVal: "",
  schoolVal: "",
  fromUntilSchoolVal: "",
};

const skillsList = {
  idskils: uuidv4(),
  skillsListVal: "",
};

const awardList = {
  idAward: uuidv4(),
  awardVal: "",
  awardOrgVal: "",
};

class App extends Component {
  state = {
    selectedOption: "",
    summaryText: "",
    workText: "",
    isTrue: true,
    newAdd: [intialAdd],
    newAddEducation: [intialAddEducation],
    minim: "280px",
    mainHeadYour: "",
    Profession: "",
    summaryHead: "SUMMARY",
    LanguagesProficiencyList: [],
    showLanguageInputs: true,
    language: "",
    proficiency: "Full Proficient",
    personal: "PERSONAL DETAILS",
    location: "Location",
    contact: "CONTACT",
    workexp: "WORK EXPERIENCE",
    education: "EDUCATION",
    skills: "SKILLS",
    place: "",
    email: "",
    phone: "",
    styleCol: "blueviolet",
    styleFontStyle: "poppins",
    styles: {
      fontWeight: "bold",
      fontFamily: "Arial",
      fontStyle: "italic",
    },
    selectedFont: "Poppins, sans-serif",
    selectResume: "Resume1",
    scrollDum: "20px",
    minimSum: "300px",
    linkedin: "",
    aboutHeadlineResume2: "",
    skillsAdding: [skillsList],
    skillsList: [],
    newSkillName: "",
    showInput: true,
    showSaveButton: false,
    showInputDeleteButton: true,
    style1: {
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },

    downloading: false,
    addingAwards: [awardList],
    phoneUrl: "",
    emailUrl: "",
    linkedinUrl: "",
    selectFontSize: "",
    github: "",
    githubUrl: "",
    dummy: "",
  };

  reportTemplateRef = React.createRef();

  inputRefMainHeading = React.createRef();
  inputRefMainRole = React.createRef();
  inputRefMainAbout = React.createRef();

  inputRefAward2 = React.createRef();
  inputRefOrg2 = React.createRef();

  inputRefTextSummary = React.createRef();
  inputRefEducationDegree = React.createRef();
  inputEnterCity = React.createRef();
  inputRefEmail = React.createRef();
  inputRefPhone = React.createRef();
  inputReflinkiden = React.createRef();
  inputRefgithub = React.createRef();

  input1RefPos1 = React.createRef();

  inputEnterSkills = React.createRef();

  // /section
  inputlan1Ref = React.createRef();
  inputlan2Ref = React.createRef();

  onMainHeading = (e) => {
    this.setState({ mainHeadYour: e.target.value });
  };

  onMainProfession = (e) => {
    this.setState({ Profession: e.target.value });
  };

  onSummaryHeading = (e) => {
    this.setState({ summaryHead: e.target.value });
  };

  onPersonalDetails = (e) => {
    this.setState({ personal: e.target.value });
  };

  onPersonalLocation = (e) => {
    this.setState({ location: e.target.value });
  };

  onPlace = (e) => {
    this.setState({ place: e.target.value });
  };

  onContact = (e) => {
    this.setState({ contact: e.target.value });
  };

  onContactEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  onContactPhone = (e) => {
    this.setState({ phone: e.target.value });
  };

  onWorkExp = (e) => {
    this.setState({ workexp: e.target.value });
  };

  onEducation = (e) => {
    this.setState({ education: e.target.value });
  };

  onSkills = (e) => {
    this.setState({ skills: e.target.value });
  };

  onEnterSkills = (e) => {
    this.setState({ enterSkills: e.target.value });
  };

  uploadPicture = (isTrue) => (
    <div className="">
      <ImageUpload isTrue={isTrue} />
    </div>
  );

  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /

  r2conatactSection = (email, phone, linkedin) => (
    <div className="r2top-container-person-right-side-details">
      <input
        type="email"
        value={email}
        onChange={this.onContactEmail}
        placeholder="Email"
        className="r2-email-input"
      />{" "}
      <br />
      <input
        type="numbe"
        value={phone}
        onChange={this.onContactPhone}
        placeholder="Mobile Number"
        className="r2-number-input"
      />{" "}
      <br />
      <input
        type="url"
        value={linkedin}
        onChange={this.onChangeLinkedin}
        placeholder="Linked in"
        className="r2-url-input"
      />
    </div>
  );

  onChangeSkillName = (event) => {
    this.setState({ newSkillName: event.target.value });
    const { newSkillName } = this.state;
    this.setState({ newSkillName: event.target.value });
    if (newSkillName === "") {
      this.setState({ showSaveButton: true });
      this.setState({
        style1: { borderTopRightRadius: "0px", borderBottomRightRadius: "0px" },
      });
    } else {
      this.setState({ showSaveButton: true });
    }
  };

  onClickOnAddButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
    }
    this.setState({ showInput: true });
    this.setState({ showInputDeleteButton: true });
    this.setState({ showSaveButton: false });
    this.setState({
      style1: { borderTopRightRadius: "5px", borderBottomRightRadius: "5px" },
    });
  };

  onClickSaveButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
      this.setState({ showInput: false });
      this.setState({ showSaveButton: false });
    }
    this.setState({ showInputDeleteButton: false });
  };

  onClickEnterButton = () => {
    const { skillsList, newSkillName } = this.state;
    const newSkillObj = {
      uniqueNo: uuidv4(),
      skill: newSkillName,
    };
    if (newSkillName !== "") {
      this.setState({ skillsList: [...skillsList, newSkillObj] });
      this.setState({ newSkillName: "" });
      this.setState({ showInput: true });
      this.setState({ showSaveButton: false });
      this.setState({
        style1: { borderTopRightRadius: "5px", borderBottomRightRadius: "5px" },
      });
    }
  };

  onDeleteSkill = (uniqueNo) => {
    const { skillsList } = this.state;

    console.log(skillsList);

    const filteredSkillsList = skillsList.filter(
      (eachSkill) => eachSkill.uniqueNo !== uniqueNo
    );
    this.setState({ skillsList: filteredSkillsList });
  };

  onClickOnInputDeleteButton = () => {
    this.setState({ newSkillName: "" });
    this.setState({ showInput: false });
    this.setState({ showInputDeleteButton: false });
    this.setState({ showSaveButton: false });
  };

  onUpdateSkillsList = (skillIdd, updatedSkill) => {
    const { skillsList } = this.state;
    console.log(skillIdd);
    console.log(updatedSkill);
    const updatedSkillList = skillsList.map((eachSkill) => {
      if (eachSkill.uniqueNo === skillIdd) {
        console.log(eachSkill.uniqueNo);
        return {
          uniqueNo: skillIdd,
          skill: updatedSkill,
        };
      }
      return eachSkill;
    });
    this.setState({ skillsList: updatedSkillList });
  };

  onClikEnterAfterUpd = (message) => {
    if (message === "Enter") {
      this.onClickOnAddButton();
    }
  };

  onClickLanguageAddButton = () => {
    const { LanguagesProficiencyList, language, proficiency } = this.state;
    this.setState({ showLanguageInputs: true });
    const newLanguageObj = {
      langId: uuidv4(),
      language,
      proficiency,
    };

    if (language !== "") {
      this.setState({
        LanguagesProficiencyList: [...LanguagesProficiencyList, newLanguageObj],
      });
      this.setState({ language: "", proficiency: "Full Proficient" });
      this.inputlan1Ref.current.focus();
    }
  };

  onDeleteLangCont = (lanId) => {
    const { LanguagesProficiencyList } = this.state;
    const FilteredLanguagesList = LanguagesProficiencyList.filter(
      (eachLang) => eachLang.langId !== lanId
    );
    this.setState({ LanguagesProficiencyList: FilteredLanguagesList });
  };

  onClickOnSecondInput = (message) => {
    if (message === "Enter") {
      // this.inputlan1Ref.current.focus();
    }
  };

  onUpdateLangCont = (lang, prof, lnId) => {
    // this.setState({ language: lang });
    // this.setState({ proficiency: prof });
    const { LanguagesProficiencyList } = this.state;
    LanguagesProficiencyList.map((eachLang) => {
      if (eachLang.langId === lnId) {
        return {
          langId: lnId,
          language: lang,
          proficiency: prof,
        };
      }
      return eachLang;
    });
  };

  onChanger2Language = (event) => {
    this.setState({ language: event.target.value });
  };

  onChanger2Proficiency = (event) => {
    this.setState({ proficiency: event.target.value });
  };
  handleInput1KeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      this.inputlan2Ref.current.focus();
    }
  };

  onClickOnInputsDeleteButton = () => {
    this.setState({ showLanguageInputs: false });
  };

  r2summaryDetails = (summaryText, isTrue, minim) => (
    <div>
      {isTrue ? (
        <textarea
          type="text"
          onChange={this.onSummary}
          value={summaryText}
          style={{
            minHeight: "10vh",
            width: "95%",
            marginTop: "55px",
            height: "auto",
            resize: "none",
            overflow: "hidden",
          }}
          className="summary-text-total margin r2summary"
          placeholder="Enter Your Professional summary Provide a brief overview of your relevant skills, experience, and qualities that would make you a good condidate for the job. Make sure to keep it concise and focused. If your need help writing your professional summary, you can see the AI Writing Assistant."
        />
      ) : (
        <p className="summary-text-total para1">{summaryText}</p>
      )}
    </div>
  );

  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /
  // /my section /

  mainHeadingYour = (mainHeadYour, Profession) => (
    <div className="">
      <input
        ref={this.inputRefMainHeading}
        type="text"
        value={mainHeadYour}
        className="head-your-org fontSizeClassHead"
        onChange={this.onMainHeading}
        onKeyDown={(e) => {
          if (e.key === "Enter" && mainHeadYour.trim() !== "") {
            this.inputRefMainRole.current.focus();
          }
        }}
        placeholder="Your name"
        style={{ color: `${this.state.styleCol}` }}
      />
      <br />
      <input
        ref={this.inputRefMainRole}
        type="text"
        value={Profession}
        className="head-your-para-org fontSizeClassHeadsub"
        onChange={this.onMainProfession}
        onKeyDown={(e) => {
          if (e.key === "Enter" && Profession.trim() !== "") {
            this.inputRefTextSummary.current.focus();
          }
        }}
        placeholder="YOUR ROLE OR PROFESSION"
      />
    </div>
  );
  onSummary = (e) => {
    this.setState({
      summaryText: e.target.value,
      scrollDum: `${e.target.scrollHeight}px`,
      minimSum: "20px",
    });
    // e.target.style.height = "auto";

    // e.target.style.height = `${e.target.scrollHeight}px`;
  };

  summaryDetails = (summaryText, isTrue, minim, summaryHead) => (
    <div>
      <div>
        <input
          id="subHeadsummary"
          type="text"
          className="summary-head fontSizeClass"
          value={summaryHead}
          onChange={this.onSummaryHeading}
        />
        <br />

        <textarea
          ref={this.inputRefTextSummary}
          type="text"
          onChange={this.onSummary}
          onKeyDown={(e) => {
            if (e.key === "Enter" && summaryText.trim() !== "") {
              this.inputRefEducationDegree.current.focus();
            }
          }}
          value={summaryText}
          style={{
            minHeight: this.state.scrollDum,
            height: this.state.minimSum,
            resize: "none",
            overflow: "hidden",
          }}
          className="summary-text-total margin fontSizeClasspara"
          placeholder="Enter Your Professional summary Provide a brief overview of your relevant skills, experience, and qualities that would make you a good condidate for the job. Make sure to keep it concise and focused. If your need help writing your professional summary, you can see the AI Writing Assistant."
        />
      </div>
    </div>
  );

  personalDetails = (personal, location, place, email, phone) => (
    <div>
      <div>
        <input
          id="subHeadPersonal"
          className="summary-head fontSizeClass"
          type="text"
          value={personal}
          onChange={this.onPersonalDetails}
        />{" "}
        <br />
        <input
          className="location margin fontSizeClasspara"
          type="text"
          value={location}
          onChange={this.onPersonalLocation}
          style={{ color: this.state.styleCol }}
        />
        <br />
        <input
          ref={this.inputEnterCity}
          onKeyDown={(e) => {
            if (e.key === "Enter" && place.trim() !== "") {
              this.inputRefEmail.current.focus();
            }
          }}
          className="place-text fontSizeClasspara"
          type="text"
          placeholder="Enter your country and city"
          onChange={this.onPlace}
          value={place}
        />{" "}
        <br />
      </div>
    </div>
  );

  contactDetails = (contact, email, phone) => (
    <div>
      <div>
        <input
          id="subHeadContact"
          className="summary-head fontSizeClass"
          type="text"
          value={contact}
          onChange={this.onContact}
        />{" "}
        <div className="icon-cont margin">
          <div ref={this.iconRefEmail}>
            <div
              className="email-icon-back"
              style={{ backgroundColor: this.state.styleCol }}
            >
              <MdEmail className="font-icon-email" />
            </div>
          </div>
          <input
            ref={this.inputRefEmail}
            onChange={this.onContactEmail}
            onKeyDown={(e) => {
              if (e.key === "Enter" && email.trim() !== "") {
                this.inputRefPhone.current.focus();
              }
            }}
            value={email}
            className="place-text fontSizeClasspara"
            type="text"
            placeholder="Enter your email"
          />{" "}
        </div>
        <div className="icon-cont">
          <div ref={this.iconRefPhone}>
            {" "}
            <div
              className="email-icon-back"
              style={{ backgroundColor: this.state.styleCol }}
            >
              <BsFillTelephoneFill className="font-icon-email" />
            </div>
          </div>
          <input
            ref={this.inputRefPhone}
            onChange={this.onContactPhone}
            onKeyDown={(e) => {
              if (e.key === "Enter" && phone.trim() !== "") {
                this.inputReflinkiden.current.focus();
              }
            }}
            value={phone}
            className="place-text fontSizeClasspara"
            type="text"
            placeholder="Enter your phone number"
          />{" "}
        </div>
        <div className="icon-cont">
          <div ref={this.iconRefLinkedin}>
            {" "}
            <div
              className="email-icon-back"
              style={{ backgroundColor: this.state.styleCol }}
            >
              <BsLinkedin className="font-icon-email" />
            </div>
          </div>
          <input
            ref={this.inputReflinkiden}
            onChange={this.onChangeLinkedin}
            onKeyDown={(e) => {
              if (e.key === "Enter" && this.state.linkedin.trim() !== "") {
                this.inputRefgithub.current.focus();
              }
            }}
            value={this.state.linkedin}
            className="place-text fontSizeClasspara"
            type="text"
            placeholder="Add your linkedin link number"
          />{" "}
        </div>
        <div className="icon-cont">
          <div ref={this.iconRefGithub}>
            {" "}
            <div
              className="email-icon-back"
              style={{ backgroundColor: this.state.styleCol }}
            >
              <BsGithub className="font-icon-email" />
            </div>
          </div>
          <input
            ref={this.inputRefgithub}
            onChange={this.onChangeGithub}
            onKeyDown={(e) => {
              if (e.key === "Enter" && this.state.github.trim() !== "") {
                this.input1RefPos1.current.focus();
              }
            }}
            value={this.state.github}
            className="place-text fontSizeClasspara"
            type="text"
            placeholder="Add your github link number"
          />{" "}
        </div>
      </div>
    </div>
  );

  onAddNew = () => {
    const newPara = {
      id: uuidv4(),
      id2: uuidv4(),
      workVal: "",
      positionVal: "",
      employerVal: "",
      fromUntilVal: "",
      scrollDum2Height: "100px",
    };

    this.setState((prev) => ({ newAdd: [...prev.newAdd, newPara] }));
  };

  OnDeleteMain = (id) => {
    const { newAdd } = this.state;
    if (newAdd.length > 1) {
      const delFil = newAdd.filter((each) => each.id !== id);

      this.setState({ newAdd: delFil });
    }
  };

  onChangeFunAddWorkChangeValMain = (
    valFromWork,
    valFromPosition,
    valFromEmployer,
    valFromUntil,
    id,
    scrollDum2From
  ) => {
    const { newAdd } = this.state;

    const updateVal = newAdd.map((each) => {
      if (id === each.id) {
        return {
          ...each,
          workVal: valFromWork,
          positionVal: valFromPosition,
          employerVal: valFromEmployer,
          fromUntilVal: valFromUntil,
          scrollDum2Height: scrollDum2From,
        };
      }
      return each;
    });

    this.setState({ newAdd: updateVal });
  };

  workexperience = (workText, isTrue, newAdd, deleteDisplay, workexp) => (
    <div>
      <div className="d-flex-work-add-button">
        <div>
          <input
            id="subHeadExp"
            type="text"
            className="summary-head main-margin fontSizeClass"
            value={workexp}
            onChange={this.onWorkExp}
          />
        </div>

        <div class="cont-add-button-exp" onClick={this.onAddNew}>
          <button class="add-button-exp">+</button>
        </div>
      </div>

      <div>
        <div>
          {newAdd.map((each) => (
            <AddWorkExp
              newAdd={this.state.newAdd}
              input1RefPos1={this.input1RefPos1}
              selectResume={this.state.selectResume}
              onChangeFunAddWorkChangeValMain={
                this.onChangeFunAddWorkChangeValMain
              }
              onAddNew={this.onAddNew}
              key={each.id}
              details={each}
              OnDeleteMain={this.OnDeleteMain}
              isTrue={isTrue}
              deleteDisplay={deleteDisplay}
              styleCol={this.state.styleCol}
            />
          ))}
        </div>
      </div>
    </div>
  );

  onAddNewEducation = () => {
    const newParass = {
      idss: uuidv4(),
      degreeVal: "",
      schoolVal: "",
      fromUntilSchoolVal: "",
    };

    this.setState((prev) => ({
      newAddEducation: [...prev.newAddEducation, newParass],
    }));
  };

  OnDeleteMainEducation = (idss) => {
    const { newAddEducation } = this.state;
    if (newAddEducation.length > 1) {
      const delFil = newAddEducation.filter((each) => each.idss !== idss);
      this.setState({ newAddEducation: delFil });
    }
  };

  onChangeValMainEducation = (
    degreeFrom,
    schoolFrom,
    fromUntilSchoolFrom,
    idss
  ) => {
    const { newAddEducation } = this.state;

    const updateVal = newAddEducation.map((each) => {
      if (idss === each.idss) {
        return {
          ...each,
          degreeVal: degreeFrom,
          schoolVal: schoolFrom,
          fromUntilSchoolVal: fromUntilSchoolFrom,
        };
      }
      return each;
    });

    this.setState({ newAddEducation: updateVal });
  };

  educationDetails = (newAddEducation, checkLen, education) => (
    <div>
      <div className="d-flex-work-add-button">
        <input
          id="subHeadEducation"
          className="summary-head main-margin fontSizeClass"
          type="text"
          value={education}
          onChange={this.onEducation}
        />
        <div class="cont-add-button-exp" onClick={this.onAddNewEducation}>
          <button class="add-button-exp">+</button>
        </div>
      </div>

      <div>
        {newAddEducation.map((each) => (
          <Education
            inputEnterCity={this.inputEnterCity}
            inputRefEducationDegree={this.inputRefEducationDegree}
            onChangeValMainEducation={this.onChangeValMainEducation}
            key={each.idss}
            details={each}
            OnDeleteMainEducation={this.OnDeleteMainEducation}
            checkLen={checkLen}
            styleCol={this.state.styleCol}
            selectResume={this.state.selectResume}
          />
        ))}
      </div>
    </div>
  );

  onclickAddSkills = () => {
    const newValObj = {
      idskils: uuidv4(),
      skillsListVal: "",
    };

    this.setState((prev) => ({
      skillsAdding: [...prev.skillsAdding, newValObj],
    }));
    // this.focusNextInput(idskils);
  };

  addMainFunSkills = (id1, skillsValFrom) => {
    const { skillsAdding } = this.state;

    const updateSkillVal = skillsAdding.map((each) => {
      if (id1 === each.idskils) {
        return { ...each, skillsListVal: skillsValFrom };
      }
      return each;
    });
    this.setState({ skillsAdding: updateSkillVal });
  };

  onDeleteMainSkils = (id) => {
    const { skillsAdding } = this.state;
    const updateSkillVal = skillsAdding.filter((each) => id !== each.idskils);

    this.setState({ skillsAdding: updateSkillVal });
  };

  dummyFun = () => {
    this.setState({ dummy: "" });
  };

  skillsDetails = (skills, deleteSkillsDisplay) => (
    <div>
      <div>
        <div className="skills-button-cont">
          <div>
            <input
              id="subHeadSkills"
              className="summary-head main-margin fontSizeClass"
              type="text"
              value={skills}
              onChange={this.onSkills}
            />{" "}
          </div>

          <div class="cont-add-button-exp">
            <button
              class="add-button-exp"
              type="button"
              onClick={this.onclickAddSkills}
            >
              +
            </button>{" "}
          </div>
        </div>

        <div className="skills-add-list">
          {this.state.skillsAdding.map((each) => (
            <SkillsAdd
              dummyFun={this.dummyFun}
              skillsAdding={this.state.skillsAdding}
              onclickAddSkills={this.onclickAddSkills}
              // styleCol={this.state.styleCol}
              deleteSkillsDisplay={deleteSkillsDisplay}
              onDeleteMainSkils={this.onDeleteMainSkils}
              details={each}
              addMainFunSkills={this.addMainFunSkills}
            />
          ))}
        </div>
      </div>
    </div>
  );

  downloadFileDocument = () => {
    // this.setState(
    //   (prevState) => {

    //   },
    //   () => {}
    // );

    var doc = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#content"), {
      callback: function (pdf) {
        // var pageCount = doc.internal.getNumberOfPages();
        // pdf.deletePage(pageCount);
        pdf.save("mypdf.pdf");
      },
    });
    this.setState({ downloading: true });
  };

  changeFunCol = (color) => {
    this.setState({ styleCol: color });
  };

  onSelectOptions = (e) => {
    this.setState({
      selectedFont: e.target.value,
      selectedOption: e.target.value,
    });
  };

  onChangeAppSelectResume = (selectedVal) => {
    this.setState({ selectResume: selectedVal });
  };

  onChangeLinkedin = (e) => {
    this.setState({ linkedin: e.target.value });
  };

  onAboutHeadlineResume2 = (e) => {
    this.setState({ aboutHeadlineResume2: e.target.value });
  };

  onAddAwards = () => {
    const newVal = {
      idAward: uuidv4(),
      awardVal: "",
      awardOrgVal: "",
    };

    this.setState((prev) => ({ addingAwards: [...prev.addingAwards, newVal] }));
  };

  addAwardMainApp = (idAward, awardName, awardOrg) => {
    const { addingAwards } = this.state;
    const updateAward = addingAwards.map((each) => {
      if (idAward === each.idAward) {
        return { ...each, awardVal: awardName, awardOrgVal: awardOrg };
      }
      return each;
    });

    this.setState({ addingAwards: updateAward });
  };

  iconRefEmail = React.createRef();
  iconRefPhone = React.createRef();
  iconRefLinkedin = React.createRef();
  iconRefGithub = React.createRef();

  componentDidMount = () => {
    toPng(this.iconRefEmail.current)
      .then((dataUrl) => {
        this.setState({ emailUrl: dataUrl });
      })
      .catch((error) => {
        console.log(error);
      });
    toPng(this.iconRefPhone.current)
      .then((dataUrl) => {
        this.setState({ phoneUrl: dataUrl });
      })
      .catch((error) => {
        console.log(error);
      });
    toPng(this.iconRefLinkedin.current)
      .then((dataUrl) => {
        this.setState({ linkedinUrl: dataUrl });
      })
      .catch((error) => {
        console.log(error);
      });
    toPng(this.iconRefGithub.current)
      .then((dataUrl) => {
        this.setState({ githubUrl: dataUrl });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onFontsizeChangeA1 = () => {
    // const classNameSize1 = document.getElementsByClassName("fontSizeClass")
    const element = document.getElementsByClassName("fontSizeClass");
    const paraElement = document.getElementsByClassName("fontSizeClasspara");
    const mainHeadElement =
      document.getElementsByClassName("fontSizeClassHead");
    const fontSizeClassHeadsub = document.getElementsByClassName(
      "fontSizeClassHeadsub"
    );

    const idEle1 = document.getElementById("head1");
    idEle1.style.color = "blue";

    const idEle2 = document.getElementById("head2");
    idEle2.style.color = "white";

    const idEle3 = document.getElementById("head3");
    idEle3.style.color = "white";

    for (let i = 0; i < paraElement.length; i++) {
      paraElement[i].style.fontSize = "16px";
    }

    for (let i = 0; i < element.length; i++) {
      element[i].style.fontSize = "18px";
    }

    for (let i = 0; i < mainHeadElement.length; i++) {
      mainHeadElement[i].style.fontSize = "40px";
    }

    for (let i = 0; i < fontSizeClassHeadsub.length; i++) {
      fontSizeClassHeadsub[i].style.fontSize = "24px";
    }
  };

  onFontsizeChangeA2 = () => {
    const element = document.getElementsByClassName("fontSizeClass");
    const paraElement = document.getElementsByClassName("fontSizeClasspara");
    const mainHeadElement =
      document.getElementsByClassName("fontSizeClassHead");
    const fontSizeClassHeadsub = document.getElementsByClassName(
      "fontSizeClassHeadsub"
    );

    const idEle1 = document.getElementById("head1");
    idEle1.style.color = "white";

    const idEle2 = document.getElementById("head2");
    idEle2.style.color = "blue";

    const idEle3 = document.getElementById("head3");
    idEle3.style.color = "white";

    for (let i = 0; i < paraElement.length; i++) {
      paraElement[i].style.fontSize = "18px";
    }

    for (let i = 0; i < element.length; i++) {
      element[i].style.fontSize = "20px";
    }

    for (let i = 0; i < mainHeadElement.length; i++) {
      mainHeadElement[i].style.fontSize = "45px";
    }

    for (let i = 0; i < fontSizeClassHeadsub.length; i++) {
      fontSizeClassHeadsub[i].style.fontSize = "26px";
    }
  };

  onFontsizeChangeA3 = () => {
    const element = document.getElementsByClassName("fontSizeClass");
    const paraElement = document.getElementsByClassName("fontSizeClasspara");
    const mainHeadElement =
      document.getElementsByClassName("fontSizeClassHead");
    const fontSizeClassHeadsub = document.getElementsByClassName(
      "fontSizeClassHeadsub"
    );

    const idEle1 = document.getElementById("head1");
    idEle1.style.color = "white";

    const idEle2 = document.getElementById("head2");
    idEle2.style.color = "white";

    const idEle3 = document.getElementById("head3");
    idEle3.style.color = "blue";

    for (let i = 0; i < element.length; i++) {
      element[i].style.fontSize = "20px";
    }

    for (let i = 0; i < paraElement.length; i++) {
      paraElement[i].style.fontSize = "22px";
    }

    for (let i = 0; i < mainHeadElement.length; i++) {
      mainHeadElement[i].style.fontSize = "48px";
    }

    for (let i = 0; i < fontSizeClassHeadsub.length; i++) {
      fontSizeClassHeadsub[i].style.fontSize = "28px";
    }
  };

  onDeleteHonorMain = (idAward) => {
    const { addingAwards } = this.state;
    const updateAward1 = addingAwards.filter(
      (each) => idAward !== each.idAward
    );
    this.setState({ addingAwards: updateAward1 });
  };

  onChangeGithub = (e) => {
    this.setState({ github: e.target.value });
  };

  render() {
    const {
      selectedOption,
      workText,
      summaryText,
      isTrue,
      newAdd,
      newAddEducation,
      minim,
      mainHeadYour,
      skillsList,
      newSkillName,
      skillsAdding,
      showInput,
      showSaveButton,
      showInputDeleteButton,
      style1,
      Profession,
      summaryHead,
      showLanguageInputs,
      language,
      proficiency,
      LanguagesProficiencyList,
      personal,
      location,
      contact,
      workexp,
      education,
      skills,
      place,
      email,
      phone,
    } = this.state;

    let checkLen = false;
    let deleteDisplay = false;
    let deleteSkillsDisplay = false;

    if (newAddEducation.length > 1) {
      checkLen = true;
    } else {
      checkLen = false;
    }

    if (newAdd.length > 1) {
      deleteDisplay = true;
    } else {
      deleteDisplay = false;
    }

    if (this.state.skillsAdding.length > 1) {
      deleteSkillsDisplay = true;
    } else {
      deleteSkillsDisplay = false;
    }

    const headings = document.getElementsByTagName("h1");
    const paragraphs = document.getElementsByTagName("p");
    const inputsTe = document.getElementsByTagName("input");
    const textareaElement = document.getElementsByTagName("textarea");
    const buttonEle = document.getElementsByTagName("button");

    for (let i = 0; i < headings.length; i++) {
      headings[i].style.fontFamily = this.state.selectedFont;
    }
    for (let i = 0; i < paragraphs.length; i++) {
      paragraphs[i].style.fontFamily = this.state.selectedFont;
    }
    for (let i = 0; i < inputsTe.length; i++) {
      inputsTe[i].style.fontFamily = this.state.selectedFont;
    }
    for (let i = 0; i < textareaElement.length; i++) {
      textareaElement[i].style.fontFamily = this.state.selectedFont;
    }
    for (let i = 0; i < buttonEle.length; i++) {
      buttonEle[i].style.fontFamily = this.state.selectedFont;
    }

    //     if (this.state.selectFontSize='A1'){
    // this.onFontsizeChangeA1()
    //     }else if (this.state.selectFontSize='A2'){
    //       this.onFontsizeChangeA2()

    //     }else if (this.state.selectFontSize='A3'){
    // this.onFontsizeChangeA3()
    //     }

    return (
      <div>
        <div
          className="main-cont-bg poppins-bold"
          style={{ backgroundColor: this.state.styleCol }}
        >
          <div className="main-cont">
            <div className="top-container-head">
              <div className="top-button-styles">
                <div>
                  <ColorPiker changeFunCol={this.changeFunCol} />
                </div>

                <div className="fontSelecterContainer">
                  <select
                    className="selected-options"
                    onChange={this.onSelectOptions}
                    value={selectedOption}
                  >
                    <option value="Poppins, sans-serif">Poppins</option>
                    <option value="Nunito, sans-serif">Nunito</option>
                    <option value="Merriweather, serif">Merriweather</option>
                    <option value="Space Mono, monospace">Space Mono</option>
                    <option value="Karla, sans-serif">Karla</option>
                    <option value="Fira Sans, sans-serif">Fira Sans</option>
                    <option value="Syne, cursive">Syne</option>
                    <option value="Work Sans, sans-serif">Work Sans</option>
                    <option value="Josefin Sans, sans-serif">
                      Josefin Sons
                    </option>
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="Times New Roman, serif">
                      Times New Roman
                    </option>
                    <option value="Verdana, sans-serif">Verdana</option>
                    <option value="Courier New, monospace">Courier New</option>
                    <option value="Syne, cursive">Syne</option>
                  </select>
                  <p className="color-para">TYPOGRAPHY</p>
                </div>

                <div className="divFontSizeA">
                  <h2
                    id="head1"
                    onClick={this.onFontsizeChangeA1}
                    style={{
                      color: "white",
                      fontFamily: "initial",
                      fontSize: "20px",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      cursor: "pointer",
                    }}
                    className="h2ClassFontA1"
                  >
                    A
                  </h2>
                  <h2
                    id="head2"
                    onClick={this.onFontsizeChangeA2}
                    style={{
                      color: "white",
                      fontFamily: "initial",
                      fontSize: "35px",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      cursor: "pointer",
                    }}
                    className="h2ClassFontA2"
                  >
                    A
                  </h2>
                  <h2
                    id="head3"
                    onClick={this.onFontsizeChangeA3}
                    style={{
                      color: "white",
                      fontFamily: "initial",
                      fontSize: "50px",
                      boxSizing: "border-box",
                      margin: "0px",
                      padding: "0px",
                      cursor: "pointer",
                    }}
                    className="h2ClassFontA3"
                  >
                    A
                  </h2>
                </div>
              </div>
              <div>
                <button
                  onClick={() => this.downloadFileDocument()}
                  className="button-download"
                  type="button"
                >
                  {" "}
                  <div>
                    <IoMdDownload size={32} />
                  </div>
                  DOWNLOAD PDF
                </button>
              </div>
              <div>
                <ChangeTemp
                  onChangeAppSelectResume={this.onChangeAppSelectResume}
                  selectResume={this.state.selectResume}
                />
              </div>
            </div>

            {this.state.selectResume === "Resume1" && (
              <div>
                <div className="margin-main-cont">
                  <div className="first-container">
                    {this.uploadPicture(isTrue)}
                    {this.mainHeadingYour(mainHeadYour, Profession)}
                  </div>
                  <div className="work-summary-cont">
                    <div>
                      {this.summaryDetails(
                        summaryText,
                        isTrue,
                        minim,
                        summaryHead
                      )}
                      {this.educationDetails(
                        newAddEducation,
                        checkLen,
                        education
                      )}
                      {this.personalDetails(personal, location, place)}
                      {this.contactDetails(contact, email, phone)}
                    </div>
                    <div>
                      {this.workexperience(
                        workText,
                        isTrue,
                        newAdd,
                        deleteDisplay,
                        workexp
                      )}

                      <div className="container">
                        <h2>Skills</h2>

                        <div className="skills-add-button-containerr">
                          <button
                            className="r2add-button"
                            onClick={this.onClickOnAddButton}
                          >
                            +
                          </button>{" "}
                        </div>
                        <br />
                        <div>
                          {skillsList.map((eachSkill) => (
                            <Skills
                              skillsDetails={eachSkill}
                              onDeleteSkill={this.onDeleteSkill}
                              onUpdateSkillsList={this.onUpdateSkillsList}
                              onClikEnterAfterUpd={this.onClikEnterAfterUpd}
                              key={eachSkill.uniqueNo}
                            />
                          ))}

                          {showInput && (
                            <span className="skill-box bbb">
                              <input
                                type="text"
                                className="skill-box inside-edit"
                                placeholder="Enter Skill"
                                value={newSkillName}
                                onChange={this.onChangeSkillName}
                                onKeyDown={(event) => {
                                  if (event.key === "Enter") {
                                    this.onClickEnterButton();
                                  }
                                }}
                              />
                              {showInputDeleteButton && (
                                <button
                                  className="skill-box inside-edit"
                                  onClick={this.onClickOnInputDeleteButton}
                                  style={style1}
                                >
                                  -
                                </button>
                              )}
                              {showSaveButton && (
                                <button
                                  className="skill-box inside-edit"
                                  onClick={this.onClickSaveButton}
                                >
                                  Save
                                </button>
                              )}{" "}
                              <br />
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.selectResume === "Resume2" && (
              <div>
                <div className="margin-main-cont">
                  <div className="first-container">
                    {this.uploadPicture(isTrue)}
                    <div className="">
                      <input
                        ref={this.inputRefMainHeading}
                        type="text"
                        value={mainHeadYour}
                        className="head-your-org fontSizeClassHead"
                        onChange={this.onMainHeading}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && mainHeadYour.trim() !== "") {
                            this.inputRefMainRole.current.focus();
                          }
                        }}
                        placeholder="Your name"
                        style={{ color: `${this.state.styleCol}` }}
                      />
                      <br />
                      <input
                        ref={this.inputRefMainRole}
                        type="text"
                        value={Profession}
                        className="head-your-para-org fontSizeClassHeadsub"
                        onChange={this.onMainProfession}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && Profession.trim() !== "") {
                            this.inputRefMainAbout.current.focus();
                          }
                        }}
                        placeholder="YOUR ROLE OR PROFESSION"
                      />
                      <br />
                      <input
                        ref={this.inputRefMainAbout}
                        type="text"
                        value={this.state.aboutHeadlineResume2}
                        className="head-your-para-resume2 fontSizeClasspara"
                        onChange={this.onAboutHeadlineResume2}
                        onKeyDown={(e) => {
                          if (
                            e.key === "Enter" &&
                            this.state.aboutHeadlineResume2.trim() !== ""
                          ) {
                            this.inputRefEmail.current.focus();
                          }
                        }}
                        placeholder="ABOUT HEADLINE"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="mail-phone-linkedin border-hr"
                      style={{ borderColor: this.state.styleCol }}
                    >
                      <div className="icon-cont margin">
                        <div
                          className="email-icon-back"
                          style={{ backgroundColor: this.state.styleCol }}
                        >
                          <MdEmail className="font-icon-email" />
                        </div>
                        <input
                          ref={this.inputRefEmail}
                          onChange={this.onContactEmail}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && email.trim() !== "") {
                              this.inputRefPhone.current.focus();
                            }
                          }}
                          value={email}
                          className="place-text fontSizeClasspara"
                          type="text"
                          placeholder="Enter your email"
                        />{" "}
                      </div>
                      <div className="icon-cont">
                        <div
                          className="email-icon-back"
                          style={{ backgroundColor: this.state.styleCol }}
                        >
                          <BsFillTelephoneFill className="font-icon-email" />
                        </div>
                        <input
                          ref={this.inputRefPhone}
                          onChange={this.onContactPhone}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && phone.trim() !== "") {
                              this.inputReflinkiden.current.focus();
                            }
                          }}
                          value={phone}
                          className="place-text fontSizeClasspara"
                          type="text"
                          placeholder="Enter your phone number"
                        />{" "}
                      </div>

                      <div className="icon-cont left-margin-linkedin">
                        <div>
                          {" "}
                          <div
                            className="email-icon-back"
                            style={{ backgroundColor: this.state.styleCol }}
                          >
                            {" "}
                            <BsLinkedin className="font-icon-email" />
                          </div>
                        </div>

                        <div>
                          <input
                            ref={this.inputReflinkiden}
                            type="text"
                            onChange={this.onChangeLinkedin}
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                this.state.linkedin.trim() !== ""
                              ) {
                                this.inputRefgithub.current.focus();
                              }
                            }}
                            value={this.state.linkedin}
                            placeholder="enter link"
                            className="place-text-resume2 fontSizeClasspara"
                          />
                        </div>
                      </div>
                      <div className="icon-cont left-margin-linkedin">
                        <div>
                          {" "}
                          <div
                            className="email-icon-back"
                            style={{ backgroundColor: this.state.styleCol }}
                          >
                            {" "}
                            <BsGithub className="font-icon-email" />
                          </div>
                        </div>

                        <div>
                          <input
                            ref={this.inputRefgithub}
                            type="text"
                            onChange={this.onChangeGithub}
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                this.state.github.trim() !== ""
                              ) {
                                this.input1RefPos1.current.focus();
                              }
                            }}
                            value={this.state.github}
                            placeholder="enter link"
                            className="place-text-resume2 fontSizeClasspara"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="workexp-skillshonoreducation">
                      <div>
                        <div className="d-flex-work-add-button">
                          {" "}
                          <input
                            id="subHeadWorkExpR2"
                            style={{ color: this.state.styleCol }}
                            type="text"
                            className="summary-head main-margin fontSizeClass"
                            value={workexp}
                            onChange={this.onWorkExp}
                          />{" "}
                          <div
                            class="cont-add-button-exp"
                            onClick={this.onAddNew}
                          >
                            <button class="add-button-exp">+</button>
                          </div>
                        </div>

                        <div>
                          <div>
                            {newAdd.map((each) => (
                              <AddWorkExp
                                newAdd={this.state.newAdd}
                                input1RefPos1={this.input1RefPos1}
                                onAddNew={this.onAddNew}
                                selectResume={this.state.selectResume}
                                onChangeFunAddWorkChangeValMain={
                                  this.onChangeFunAddWorkChangeValMain
                                }
                                key={each.id}
                                details={each}
                                OnDeleteMain={this.OnDeleteMain}
                                isTrue={isTrue}
                                deleteDisplay={deleteDisplay}
                                styleCol={this.state.styleCol}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div>
                            <div className="skills-button-cont">
                              <div>
                                <input
                                  id="subHeadSkillsR2"
                                  style={{ color: this.state.styleCol }}
                                  className="summary-head main-margin fontSizeClass"
                                  type="text"
                                  value={skills}
                                  onChange={this.onSkills}
                                />{" "}
                              </div>

                              <div class="cont-add-button-exp">
                                <button
                                  class="add-button-exp"
                                  type="button"
                                  onClick={this.onclickAddSkills}
                                >
                                  +
                                </button>{" "}
                              </div>
                            </div>

                            <div className="container">
                              <div className="skills-add-button-containerr">
                                <button
                                  className="r2add-button"
                                  onClick={this.onClickOnAddButton}
                                >
                                  +
                                </button>{" "}
                              </div>
                              <br />
                              <div>
                                {skillsList.map((eachSkill) => (
                                  <Skills
                                    skillsDetails={eachSkill}
                                    onDeleteSkill={this.onDeleteSkill}
                                    onUpdateSkillsList={this.onUpdateSkillsList}
                                    onClikEnterAfterUpd={
                                      this.onClikEnterAfterUpd
                                    }
                                    key={eachSkill.uniqueNo}
                                  />
                                ))}

                                {showInput && (
                                  <span className="skill-box bbb">
                                    <input
                                      type="text"
                                      className="skill-box inside-edit"
                                      placeholder="Enter Skill"
                                      value={newSkillName}
                                      onChange={this.onChangeSkillName}
                                      onKeyDown={(event) => {
                                        if (event.key === "Enter") {
                                          this.onClickEnterButton();
                                        }
                                      }}
                                    />
                                    {showInputDeleteButton && (
                                      <button
                                        className="skill-box inside-edit"
                                        onClick={
                                          this.onClickOnInputDeleteButton
                                        }
                                        style={style1}
                                      >
                                        -
                                      </button>
                                    )}
                                    {showSaveButton && (
                                      <button
                                        className="skill-box inside-edit"
                                        onClick={this.onClickSaveButton}
                                      >
                                        Save
                                      </button>
                                    )}{" "}
                                    <br />
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div className="cont-d-flex-button-honor-pdf2">
                            <h1
                              id="subHeadHonourAwardsR2"
                              style={{ color: this.state.styleCol }}
                              className="side-head-awards fontSizeClass"
                            >
                              HONOR AWARDS
                            </h1>
                            <div class="cont-add-button-exp-pdf2">
                              <button
                                class="add-button-exp-pdf2"
                                type="button"
                                onClick={this.onAddAwards}
                              >
                                +
                              </button>{" "}
                            </div>
                          </div>

                          {this.state.addingAwards.map((each) => (
                            <HonorAwards
                              inputRefEducationDegree={
                                this.inputRefEducationDegree
                              }
                              detailsAward={each}
                              addAwardMainApp={this.addAwardMainApp}
                              onDeleteHonorMain={this.onDeleteHonorMain}
                            />
                          ))}
                        </div>
                        <div>
                          <div className="d-flex-work-add-button">
                            <input
                              id="subHeadEducationR2"
                              style={{ color: this.state.styleCol }}
                              className="summary-head main-margin fontSizeClass"
                              type="text"
                              value={education}
                              onChange={this.onEducation}
                            />
                            <div
                              class="cont-add-button-exp"
                              onClick={this.onAddNewEducation}
                            >
                              <button class="add-button-exp">+</button>
                            </div>
                          </div>

                          <div>
                            {newAddEducation.map((each) => (
                              <Education
                                inputRefEducationDegree={
                                  this.inputRefEducationDegree
                                }
                                onChangeValMainEducation={
                                  this.onChangeValMainEducation
                                }
                                key={each.idss}
                                details={each}
                                OnDeleteMainEducation={
                                  this.OnDeleteMainEducation
                                }
                                checkLen={checkLen}
                                styleCol={this.state.styleCol}
                                selectResume={this.state.selectResume}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {this.state.selectResume === "Resume3" && (
              <div ref={this.reportTemplateRef}>
                <div className="r2top-sec-container">
                  <div className="top-left-container">
                    <div className="r2top-photo">
                      <R2ImageUpload />
                    </div>
                    <div className="r2top-person-details">
                      {this.mainHeadingYour(mainHeadYour, Profession)}
                    </div>
                  </div>
                  <div className="r2top-container-person-right-side-details">
                    {this.r2conatactSection(email, phone, this.state.linkedin)}
                  </div>
                </div>

                {this.r2summaryDetails(summaryText, isTrue, minim)}

                <div className="container">
                  <h1>Skills</h1>
                  <hr />
                  <div className="skills-add-button-containerr">
                    <button
                      className="r2add-button"
                      onClick={this.onClickOnAddButton}
                    >
                      +
                    </button>{" "}
                  </div>
                  <br />
                  <div>
                    {skillsList.map((eachSkill) => (
                      <Skills
                        skillsDetails={eachSkill}
                        onDeleteSkill={this.onDeleteSkill}
                        onUpdateSkillsList={this.onUpdateSkillsList}
                        onClikEnterAfterUpd={this.onClikEnterAfterUpd}
                        key={eachSkill.uniqueNo}
                      />
                    ))}

                    {showInput && (
                      <span className="skill-box bbb">
                        <input
                          type="text"
                          className="skill-box inside-edit"
                          placeholder="Enter Skill"
                          value={newSkillName}
                          onChange={this.onChangeSkillName}
                          onKeyDown={(event) => {
                            if (event.key === "Enter") {
                              this.onClickEnterButton();
                            }
                          }}
                        />
                        {showInputDeleteButton && (
                          <button
                            className="skill-box inside-edit"
                            onClick={this.onClickOnInputDeleteButton}
                            style={style1}
                          >
                            -
                          </button>
                        )}
                        {showSaveButton && (
                          <button
                            className="skill-box inside-edit"
                            onClick={this.onClickSaveButton}
                          >
                            Save
                          </button>
                        )}{" "}
                        <br />
                      </span>
                    )}
                  </div>
                </div>

                <div className="cont">
                  <h1>Language</h1>
                  <hr />
                  <div className="laguage-add-button-container">
                    <button onClick={this.onClickLanguageAddButton}>+</button>
                  </div>
                  <div className="r2languages-container">
                    {LanguagesProficiencyList.map((eachLanguage) => (
                      <LanguagesKnown
                        languagesDetails={eachLanguage}
                        onDeleteLangCont={this.onDeleteLangCont}
                        onUpdateLangCont={this.onUpdateLangCont}
                        onClickOnSecondInput={this.onClickOnSecondInput}
                        key={eachLanguage.langId}
                      />
                    ))}

                    {showLanguageInputs && (
                      <div className="total-inputs-cont">
                        <div className="inputs-cont2">
                          <input
                            type="text"
                            className="r2-lan-input-elements"
                            value={language}
                            onChange={this.onChanger2Language}
                            ref={this.inputlan1Ref}
                            onKeyDown={this.handleInput1KeyPress}
                            placeholder="Enter Language"
                          />{" "}
                          <br />
                          <select
                            value={proficiency}
                            onChange={this.onChanger2Proficiency}
                            className="r2-lan-input-element-selector"
                            ref={this.inputlan2Ref}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                this.onClickLanguageAddButton();
                              }
                            }}
                          >
                            <option value="Begginer">Begginer</option>
                            <option value="Intermidiate">Intermidiate</option>
                            <option value="Full Proficient">
                              Full Proficient
                            </option>
                          </select>
                        </div>
                        {/* <div>
                          <button
                            className="input-delete-button"
                            onClick={this.onClickOnInputsDeleteButton}
                          >
                            -
                          </button>
                        </div> */}
                      </div>
                    )}
                  </div>
                </div>

                <div className="r2Workexperience-container">
                  <h3>WORK EXPERIENCE</h3>
                  <hr />
                  <div>
                    {this.workexperience(
                      workText,
                      isTrue,
                      newAdd,
                      deleteDisplay,
                      workexp
                    )}
                  </div>
                </div>

                <div className="r2Personal-projects-container">
                  <h3>PERSONAL PROJECTS</h3>
                  <hr />

                  <h4>College</h4>
                  <p>created the details</p>
                  <p>added the details</p>
                </div>

                <div className="r2-education-detais-container">
                  <h3>EDUCATION</h3>
                  <hr />
                  {this.educationDetails(newAddEducation, checkLen, education)}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}
        {/* Download section */}

        {this.state.selectResume === "Resume1" && (
          <div id="content">
            <div className="mainCont">
              <div className="margin-right-cont-pdf back-img">12</div>
              <div>
                <h1
                  className="main-head-your"
                  style={{ color: this.state.styleCol }}
                >
                  {mainHeadYour}
                </h1>
                <p className="font-profession-sub-main-resume1">{Profession}</p>
              </div>
            </div>
            <div className="mainCont">
              {" "}
              <div className="margin-right-cont-pdf">
                <div>
                  <h1 className="head-resume-pdf">{summaryHead}</h1>
                  <p className="font-para-resume1 margin-right-cont-pdf">
                    {this.state.summaryText}
                  </p>
                </div>
                <div>
                  <h1 className="head-resume-pdf">{personal}</h1>
                  <p
                    className="font-para-resume1"
                    style={{ color: this.state.styleCol }}
                  >
                    {location}
                  </p>
                  <p className="font-para-resume1">{place}</p>
                </div>
                <div>
                  <h1 className="head-resume-pdf">{contact}</h1>
                  <p className="font-para-resume1">{email}</p>
                  <p className="font-para-resume1">{phone}</p>
                  <div className="icon-cont-pdf">
                    <div
                      className="email-icon-back-pdf"
                      style={{ backgroundColor: this.state.styleCol }}
                    >
                      {this.state.emailUrl && (
                        <img src={this.state.emailUrl} alt="React icon" />
                      )}
                    </div>
                    <div>
                      <p className="font-para-resume1">{email}</p>
                    </div>
                  </div>
                  <div className="icon-cont">
                    <div
                      className="email-icon-back"
                      style={{ backgroundColor: this.state.styleCol }}
                    >
                      {/* <BsFillTelephoneFill className="font-icon-email-pdf" /> */}
                      {this.state.phoneUrl && (
                        <img src={this.state.phoneUrl} alt="React icon" />
                      )}
                    </div>
                    <div>
                      <p className="font-para-resume1">{phone}</p>
                    </div>

                    {this.state.linkedinUrl && (
                      <img src={this.state.linkedinUrl} alt="React icon" />
                    )}
                    <div>
                      <p className="font-para-resume1">{this.state.linkedin}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <h1 className="head-resume-pdf">{workexp}</h1>
                  {newAdd.map((each) => (
                    <div>
                      <p
                        className="font-para-resume1"
                        style={{ color: this.state.styleCol }}
                      >
                        {each.positionVal}
                      </p>
                      <div className="from-empleyer">
                        <p className="font-para-resume1">{each.employerVal}</p>
                        <p className="font-para-resume1">{each.fromUntilVal}</p>
                      </div>
                      <p className="font-para-resume1">{each.workVal}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="head-resume-pdf">{education}</h1>
                  {newAddEducation.map((each) => (
                    <div>
                      <p
                        className="font-para-resume1"
                        style={{ color: this.state.styleCol }}
                      >
                        {each.degreeVal}
                      </p>
                      <div className="from-empleyer">
                        <p className="font-para-resume1">{each.schoolVal}</p>
                        <p className="font-para-resume1">
                          {each.fromUntilSchoolVal}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div>
                  <h1 className="head-resume-pdf">{skills}</h1>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.state.selectResume === "Resume2" && (
          <div id="content">
            <div>
              <div></div>
              <div>
                <h1 className="main-head-your">{mainHeadYour}</h1>
                <p className="font-para-resume-pdf2">{Profession}</p>
                <p className="font-para-resume-pdf2">
                  {this.state.aboutHeadlineResume2}
                </p>
              </div>
            </div>
            <div>
              <div className="mail-phone-linkedin2-pdf2 border-hr-pdf2">
                <div>
                  {this.state.emailUrl && (
                    <img src={this.state.emailUrl} alt="React icon" />
                  )}
                </div>
                <span className="font-para-resume-pdf2">{email}</span>

                <div>
                  {/* <BsFillTelephoneFill className="font-icon-email-pdf" /> */}
                  {this.state.phoneUrl && (
                    <img src={this.state.phoneUrl} alt="React icon" />
                  )}
                  <span className="font-para-resume-pdf2">{phone}</span>
                </div>

                <div>
                  {/* <BsFillTelephoneFill className="font-icon-email-pdf" /> */}
                  {this.state.linkedinUrl && (
                    <img src={this.state.linkedinUrl} alt="React icon" />
                  )}
                  <span className="font-para-resume-pdf2">
                    {this.state.linkedin}
                  </span>
                </div>
                <div>
                  {/* <BsFillTelephoneFill className="font-icon-email-pdf" /> */}
                  {this.state.githubUrl && (
                    <img src={this.state.githubUrl} alt="React icon" />
                  )}
                  <span className="font-para-resume-pdf2">
                    {this.state.github}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="workexp-skillshonoreducation-pdf">
                <div>
                  <h1 className="head-resume-pdf2">{workexp}</h1>
                  {newAdd.map((each) => (
                    <div>
                      <p
                        className="font-para-resume-pdf2"
                        style={{ color: this.state.styleCol }}
                      >
                        {each.positionVal}
                      </p>
                      <div className="from-empleyer">
                        <p className="head-resume-pdf2">{each.employerVal}</p>
                        <p className="head-resume-pdf2">{each.fromUntilVal}</p>
                      </div>
                      <p className="head-resume-pdf2">{each.workVal}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <div>
                    <h1 className="head-resume-pdf2">{skills}</h1>
                    {this.state.skillsAdding.map((each) => (
                      <div>
                        <p className="font-para-resume-pdf2">
                          {each.skillsListVal}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <h1
                      style={{ color: this.state.styleCol }}
                      className="side-head-awards"
                    >
                      HONOR AWARDS
                    </h1>
                    {this.state.addingAwards.map((each) => (
                      <div>
                        <p>{each.awardVal}</p>
                        <p>{each.awardOrgVal}</p>
                      </div>
                    ))}
                  </div>
                  <div>
                    <div>
                      <h1 className="head-resume-pdf2">{education}</h1>
                      {newAddEducation.map((each) => (
                        <div>
                          <p
                            className="font-para-resume-pdf2"
                            style={{ color: this.state.styleCol }}
                          >
                            {each.degreeVal}
                          </p>
                          <div className="from-empleyer">
                            <p className="font-para-resume-pdf2">
                              {each.schoolVal}
                            </p>
                            <p className="font-para-resume-pdf2">
                              {each.fromUntilSchoolVal}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
