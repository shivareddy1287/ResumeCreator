import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { BsFillTelephoneFill, BsLinkedin, BsGithub } from "react-icons/bs";

import { MdEmail, MdDownload, MdUpload } from "react-icons/md";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines, faGear } from "@fortawesome/free-solid-svg-icons";
import NewpdfComp from "./newpdfcomp";

import ColorPiker from "./PopUp/popup";

import Certifiacations from "./Certifications/Certifiacations";

import ImageUpload from "./UploadImage/uploadimage";
import R2ImageUpload from "./R2UploadImg/r2uploadimg";

import AddWorkExp from "./AddWorkExperience/workexperience";
import Education from "./Education/education";
import ChangeTemp from "./ChangeTemp/ChangeTemp";
import HonorAwards from "./HonorAwards/HonorAwards";
import SkillsAdd from "./SkillsAdd/SkillsAdd";
import CollegeProject from "./R2CollegeProject/r2collegeproject";
import Skills from "./Skills/skills";
import Lang from "./R2LaguagesKnown/r2languagesknown";
import axios from "axios";
import { saveAs } from "file-saver";

import Loader from "react-loader-spinner";
import { RotatingLines, CirclesWithBar } from "react-loader-spinner";

import {
  faEnvelope,
  faMobile,
  faLink,
  faLinkedIn,
  faSquarePhone,
  faDownload,
  faTrash,
  faFloppyDisk,
  faCircleArrowUp,
  faCircleArrowDown,
  faFileArrowUp,
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import ToggleSwitch from "./ToggleSwitch/ToggleSwitch";

import "./resumepage1.css";

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

const intialAdd = {
  id: uuidv4(),
  workVal: "",
  positionVal: "",
  employerVal: "",
  scrollDum2Height: "100px",
  fromDateValue: "",
  toDateValue: "",
  actualFromDateValue: "",
  actualToDateValue: "",
};

const intialAddEducation = {
  idss: uuidv4(),
  degreeVal: "",
  schoolVal: "",
  fromSchoolVal: "",
  toSchoolVal: "",
};

const skillsList = {
  idskils: uuidv4(),
  skillsListVal: "",
};

const intialHonorAwards = {
  awardIdd: uuidv4(),
  awardName: "",
  Organization: "",
};

const certiList = {
  certId: uuidv4(),
  CertName: "",
  certIssueOrg: "",
  certFrom: "",
  certTo: "",
  certLink: "",
};

const PublicationsList = {
  publId: uuidv4(),
  publiName: "",
  publiDescri: "",
  publiFrom: "",
  publiTo: "",
};

class ResumePage extends Component {
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
    personal: "PERSONAL DETAILS",
    location: "Location",
    contact: "CONTACT",
    workexp: "WORK EXPERIENCE",
    education: "EDUCATION",
    skills: "SKILLS",
    place: "",
    email: "",
    phone: "",
    styleCol: "blue",
    styleFontStyle: "poppins",
    styles: {
      fontWeight: "bold",
      fontFamily: "Arial",
      fontStyle: "italic",
    },
    selectedFont: "Times New Roman",
    selectResume: "Resume2",
    scrollDum: "20px",
    minimSum: "300px",
    linkedin: "",
    aboutHeadlineResume2: "",
    skillsAdding: [skillsList],
    downloading: false,

    phoneUrl: "",
    emailUrl: "",
    linkedinUrl: "",
    selectFontSize: "",
    github: "",
    githubUrl: "",
    dummy: "",

    //honor awards

    honorAwards: "AWARDS",
    honorAwardsList: [intialHonorAwards],

    //fontsizes

    mainHeadFontSize: "33px",
    mainRoleFontSize: "26px",
    allParaFontSize: "16px",

    // sideHeadingWorkExp: "14px",
    // sideHeadingWorkExp1: "13px",
    // sideHeadingWorkExp2: "12px",

    //fontsizes pdf
    mainHeadFontSizepdf: "22px",
    mainRoleFontSizepdf: "13px",
    allParaFontSizepdf: "10px",
    sideHeadingWorkExppdf: "14px",
    sideHeadingWorkExp1pdf: "13px",
    sideHeadingWorkExp2pdf: "12px",

    //download
    ripples: {},
    nextRippleId: 0,

    //r2 summary
    // r2SummaryText: "",
    r2summaryHeight: "",

    //skills
    skillHeading: "SKILLS",
    skillsList: [],
    newSkillName: "",
    showInput: true,
    showSaveButton: false,
    showInputDeleteButton: true,
    style1: {
      borderTopRightRadius: "5px",
      borderBottomRightRadius: "5px",
    },

    //r2profile pic

    profileUrl: "",
    isProfileUrlUpdated: false,

    //Col-proj
    collegeProjHeading: "PERSONAL PROJECTS",
    projectsList: [],
    colProjName: "",
    colProjCD: "",
    colProjAD: "",
    showInputsCp: true,
    showInputPopup: false,
    proj1stInp: { border: "none", padding: "6px" },

    //lang cont
    LanguageHeading: "LANGUAGE",
    langList: [],
    showInputLangContainer: true,
    showinpPopup: false,
    language: "",
    proficiency: "Full Proficient",
    styleborderlang: { border: "none" },
    isAdd2: false,
    isRender: true,
    heightSummary: "",
    testingLan: false,

    //retriving resume data
    resumeData: "empty",
    text: "",
    skillsText: "skillsText Retriving",
    uploadedResumeskillsList: [],

    //download button options
    downloadText: "Download PDF",
    showDownloadLoader: false,
    typewriterIdSelector: "",
    showResDownlodedIcon: false,
    butonControl: false,
    downloadLoader: false,

    // font-size-change
    fontSizeChange: "size-2",

    // certifications

    certficationsTotal: [certiList],

    // PublicationsList

    PublicationsTotal: [PublicationsList],

    // disable conditions

    // disProfilePic: true,
    // disRole: true,
    // disSummary: true,
    // disAbout: true,
    // disEmail: true,
    // disPhone: true,
    // disLinkedin: true,
    // disGithub: true,
    // disSkills: true,
    // disAwards: true,
    // disLanguages: true,
    // disPersonal: true,

    // popup

    widgetPopup: false,
    disbleList: intialDisable,

    // disProfilePic: false,
    // disRole: false,
    // disSummary: false,
    // disAbout: false,
    // disEmail: false,
    // disPhone: false,
    // disLinkedin: false,
    // disGithub: false,
    // disSkills: false,
    // disAwards: false,
    // disLanguages: false,
    // disPersonal: false,
    inputValueMain: "",
    isDataUrlCheck: false,
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

  //honor awards

  inputRefhonorAwardsAwardree = React.createRef();
  inputEnterCityyy = React.createRef();

  //language ref

  popupLCRef = React.createRef();

  popupLangInputContRef = React.createRef();

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

  //honor awards

  OnDeleteMainhonorAwards = (awardIdd) => {
    const { honorAwardsList } = this.state;
    if (honorAwardsList.length > 1) {
      const delFil = honorAwardsList.filter(
        (each) => each.awardIdd !== awardIdd
      );
      this.setState({ honorAwardsList: delFil });
    }
  };
  onAddNewhonorAwards = (isOk3) => {
    if (true) {
      const newParass = {
        awardIdd: uuidv4(),
        awardName: "",
        Organization: "",
      };

      this.setState((prev) => ({
        honorAwardsList: [...prev.honorAwardsList, newParass],
        isRender: true,
      }));
    }
  };
  onhonorAwards = (e) => {
    this.setState({ honorAwards: e.target.value });
  };

  onChangeValMainhonorAwards = (
    AwardreeFrom,
    schoolFrom,
    fromSchool,
    untillSchool,
    awardIdd
  ) => {
    const { honorAwardsList } = this.state;

    const updateVal = honorAwardsList.map((each) => {
      if (awardIdd === each.awardIdd) {
        return {
          ...each,
          awardName: AwardreeFrom,
          Organization: schoolFrom,
        };
      }
      return each;
    });

    this.setState({ honorAwardsList: updateVal });
  };

  onSwapUphonorAwards = (eduId) => {
    const { honorAwardsList } = this.state;
    let presId = "";
    let presAward = "";
    let presOrg = "";

    let presCount = 0;

    let count = 0;

    honorAwardsList.map((eachEdu) => {
      count += 1;
      if (eachEdu.awardIdd === eduId) {
        presId = eduId;
        presAward = eachEdu.awardName;
        presOrg = eachEdu.Organization;

        presCount = count;
        return eachEdu;
      }
      return eachEdu;
    });

    let nextId = "";
    let nextAward = "";
    let nextOrg = "";

    let nextCount = 0;

    honorAwardsList.map((eachEdu) => {
      nextCount += 1;
      if (nextCount === presCount - 1) {
        nextId = eachEdu.awardIdd;
        nextAward = eachEdu.awardName;
        nextOrg = eachEdu.Organization;

        return eachEdu;
      }
      return eachEdu;
    });

    let updateCount = 0;
    const updatedUpSwapEdu = honorAwardsList.map((eachEdu) => {
      updateCount += 1;
      if (
        presAward !== "" &&
        nextAward !== "" &&
        presId !== nextId &&
        updateCount === presCount
      ) {
        return {
          awardIdd: nextId,
          awardName: nextAward,
          Organization: nextOrg,
        };
      } else if (
        presAward !== "" &&
        nextAward !== "" &&
        presId !== nextId &&
        updateCount === presCount - 1
      ) {
        return {
          awardIdd: presId,
          awardName: presAward,
          Organization: presOrg,
        };
      }
      return eachEdu;
    });
    this.setState({ honorAwardsList: updatedUpSwapEdu });
  };

  onSwapDownhonorAwards = (eduId) => {
    const { honorAwardsList } = this.state;
    let presId = "";
    let presAward = "";
    let presOrg = "";

    let presCount = 0;

    let count = 0;

    honorAwardsList.map((eachEdu) => {
      count += 1;
      if (eachEdu.awardIdd === eduId) {
        presId = eduId;
        presAward = eachEdu.awardName;
        presOrg = eachEdu.Organization;

        presCount = count;
        return eachEdu;
      }
      return eachEdu;
    });

    let prevId = "";
    let prevAward = "";
    let prevOrg = "";

    let prevCount = 0;

    honorAwardsList.map((eachEdu) => {
      prevCount += 1;
      if (prevCount === presCount + 1) {
        prevId = eachEdu.awardIdd;
        prevAward = eachEdu.awardName;
        prevOrg = eachEdu.Organization;

        return eachEdu;
      }
      return eachEdu;
    });

    let updateCount = 0;
    const updatedDownSwapEdu = honorAwardsList.map((eachEdu) => {
      updateCount += 1;
      if (
        presAward !== "" &&
        prevAward !== "" &&
        presId !== prevId &&
        updateCount === presCount
      ) {
        return {
          awardIdd: prevId,
          awardName: prevAward,
          Organization: prevOrg,
        };
      } else if (
        presAward !== "" &&
        prevAward !== "" &&
        presId !== prevId &&
        updateCount === presCount + 1
      ) {
        return {
          awardIdd: presId,
          awardName: presAward,
          Organization: presOrg,
        };
      }
      return eachEdu;
    });
    this.setState({ honorAwardsList: updatedDownSwapEdu });
  };

  // newAddEducation

  onSwapUpEducation = (eduId) => {
    const { newAddEducation } = this.state;
    let presId = "";
    let presDeg = "";
    let presScl = "";
    let presSclFrom = "";
    let presSclTo = "";
    let presCount = 0;

    let count = 0;

    newAddEducation.map((eachEdu) => {
      count += 1;
      if (eachEdu.idss === eduId) {
        presId = eduId;
        presDeg = eachEdu.degreeVal;
        presScl = eachEdu.schoolVal;
        presSclFrom = eachEdu.fromSchoolVal;
        presSclTo = eachEdu.toSchoolVal;
        presCount = count;
        return eachEdu;
      }
      return eachEdu;
    });

    let nextId = "";
    let nextDeg = "";
    let nextScl = "";
    let nextSclFrom = "";
    let nextSchoolTo = "";

    let nextCount = 0;

    newAddEducation.map((eachEdu) => {
      nextCount += 1;
      if (nextCount === presCount - 1) {
        nextId = eachEdu.idss;
        nextDeg = eachEdu.degreeVal;
        nextScl = eachEdu.schoolVal;
        nextSclFrom = eachEdu.fromSchoolVal;
        nextSchoolTo = eachEdu.toSchoolVal;
        return eachEdu;
      }
      return eachEdu;
    });

    let updateCount = 0;
    const updatedUpSwapEdu = newAddEducation.map((eachEdu) => {
      updateCount += 1;
      if (
        presDeg !== "" &&
        nextDeg !== "" &&
        presId !== nextId &&
        updateCount === presCount
      ) {
        return {
          idss: nextId,
          degreeVal: nextDeg,
          schoolVal: nextScl,
          fromSchoolVal: nextSclFrom,
          toSchoolVal: nextSchoolTo,
        };
      } else if (
        presDeg !== "" &&
        nextDeg !== "" &&
        presId !== nextId &&
        updateCount === presCount - 1
      ) {
        return {
          idss: presId,
          degreeVal: presDeg,
          schoolVal: presScl,
          fromSchoolVal: presSclFrom,
          toSchoolVal: presSclTo,
        };
      }
      return eachEdu;
    });
    this.setState({ newAddEducation: updatedUpSwapEdu });
  };

  onSwapDownEducation = (eduId) => {
    const { newAddEducation } = this.state;
    let presId = "";
    let presDeg = "";
    let presScl = "";
    let presSclFrom = "";
    let presSclTo = "";
    let presCount = 0;

    let count = 0;

    newAddEducation.map((eachEdu) => {
      count += 1;
      if (eachEdu.idss === eduId) {
        presId = eduId;
        presDeg = eachEdu.degreeVal;
        presScl = eachEdu.schoolVal;
        presSclFrom = eachEdu.fromSchoolVal;
        presSclTo = eachEdu.toSchoolVal;
        presCount = count;
        return eachEdu;
      }
      return eachEdu;
    });
    let prevId = "";
    let prevDeg = "";
    let prevScl = "";
    let prevSclFrom = "";
    let prevSchoolTo = "";

    let prevCount = 0;

    newAddEducation.map((eachEdu) => {
      prevCount += 1;
      if (prevCount === presCount + 1) {
        prevId = eachEdu.idss;
        prevDeg = eachEdu.degreeVal;
        prevScl = eachEdu.schoolVal;
        prevSclFrom = eachEdu.fromSchoolVal;
        prevSchoolTo = eachEdu.toSchoolVal;
        return eachEdu;
      }
      return eachEdu;
    });

    let updateCount = 0;
    const updatedDownSwapEdu = newAddEducation.map((eachEdu) => {
      updateCount += 1;
      if (
        presDeg !== "" &&
        prevDeg !== "" &&
        presId !== prevId &&
        updateCount === presCount
      ) {
        return {
          idss: prevId,
          degreeVal: prevDeg,
          schoolVal: prevScl,
          fromSchoolVal: prevSclFrom,
          toSchoolVal: prevSchoolTo,
        };
      } else if (
        presDeg !== "" &&
        prevDeg !== "" &&
        presId !== prevId &&
        updateCount === presCount + 1
      ) {
        return {
          idss: presId,
          degreeVal: presDeg,
          schoolVal: presScl,
          fromSchoolVal: presSclFrom,
          toSchoolVal: presSclTo,
        };
      }
      return eachEdu;
    });
    this.setState({ newAddEducation: updatedDownSwapEdu });
  };

  //work exp

  onSwapWorkExpUpElement = (workId) => {
    const { newAdd } = this.state;

    let presentId = "";
    let presentPosition = "";
    let presentEmployer = "";
    let presentWorkArea = "";
    let presentActualFromdate = "";
    let presentActualToDate = "";
    let presentFromDate = "";
    let presentToDate = "";
    let presentScrollDumHeight = "";

    let presentCount = 0;

    let count = 0;

    newAdd.map((eachWorkExp) => {
      count += 1;
      if (eachWorkExp.id === workId) {
        presentCount = count;
        presentId = eachWorkExp.id;
        presentPosition = eachWorkExp.positionVal;
        presentEmployer = eachWorkExp.employerVal;
        presentWorkArea = eachWorkExp.workVal;
        presentActualFromdate = eachWorkExp.actualFromDateValue;
        presentActualToDate = eachWorkExp.actualToDateValue;
        presentFromDate = eachWorkExp.fromDateValue;
        presentToDate = eachWorkExp.toDateValue;
        presentScrollDumHeight = eachWorkExp.scrollDum2Height;
      }
      return eachWorkExp;
    });

    let previousId = "";
    let previousPosition = "";
    let previousEmployer = "";
    let previousWorkArea = "";
    let previousActualFromdate = "";
    let previousActualToDate = "";
    let previousFromDate = "";
    let previousToDate = "";
    let previousScrollDumHeight = "";

    let previousCount = 0;

    newAdd.map((eachWorkExp) => {
      previousCount += 1;
      if (previousCount === presentCount - 1) {
        previousId = eachWorkExp.id;
        previousPosition = eachWorkExp.positionVal;
        previousEmployer = eachWorkExp.employerVal;
        previousWorkArea = eachWorkExp.workVal;
        previousActualFromdate = eachWorkExp.actualFromDateValue;
        previousActualToDate = eachWorkExp.actualToDateValue;
        previousFromDate = eachWorkExp.fromDateValue;
        previousToDate = eachWorkExp.toDateValue;
        previousScrollDumHeight = eachWorkExp.scrollDum2Height;
      }
      return eachWorkExp;
    });

    let updateCount = 0;

    const updatedWorkExpSwapUp = newAdd.map((eachWorkExp) => {
      updateCount += 1;
      if (
        presentPosition !== "" &&
        previousPosition !== "" &&
        updateCount === presentCount
      ) {
        return {
          id: previousId,
          workVal: previousWorkArea,
          positionVal: previousPosition,
          employerVal: previousEmployer,
          scrollDum2Height: previousScrollDumHeight,
          fromDateValue: previousFromDate,
          toDateValue: previousToDate,
          actualFromDateValue: previousActualFromdate,
          actualToDateValue: previousActualToDate,
        };
      } else if (
        presentPosition !== "" &&
        previousPosition !== "" &&
        updateCount === presentCount - 1
      ) {
        return {
          id: presentId,
          workVal: presentWorkArea,
          positionVal: presentPosition,
          employerVal: presentEmployer,
          scrollDum2Height: presentScrollDumHeight,
          fromDateValue: presentFromDate,
          toDateValue: presentToDate,
          actualFromDateValue: presentActualFromdate,
          actualToDateValue: presentActualToDate,
        };
      }
      return eachWorkExp;
    });

    this.setState({ newAdd: updatedWorkExpSwapUp });
  };

  onFocusOnLanguageInputElement = () => {};

  onSwapWorkExpDownElement = (workId) => {
    const { newAdd } = this.state;

    let presentId = "";
    let presentPosition = "";
    let presentEmployer = "";
    let presentWorkArea = "";
    let presentActualFromdate = "";
    let presentActualToDate = "";
    let presentFromDate = "";
    let presentToDate = "";
    let presentScrollDumHeight = "";

    let presentCount = 0;

    let count = 0;

    newAdd.map((eachWorkExp) => {
      count += 1;
      if (eachWorkExp.id === workId) {
        presentCount = count;
        presentId = eachWorkExp.id;
        presentPosition = eachWorkExp.positionVal;
        presentEmployer = eachWorkExp.employerVal;
        presentWorkArea = eachWorkExp.workVal;
        presentActualFromdate = eachWorkExp.actualFromDateValue;
        presentActualToDate = eachWorkExp.actualToDateValue;
        presentFromDate = eachWorkExp.fromDateValue;
        presentToDate = eachWorkExp.toDateValue;
        presentScrollDumHeight = eachWorkExp.scrollDum2Height;
      }
      return eachWorkExp;
    });

    let nextId = "";
    let nextPosition = "";
    let nextEmployer = "";
    let nextWorkArea = "";
    let nextActualFromdate = "";
    let nextActualToDate = "";
    let nextFromDate = "";
    let nextToDate = "";
    let nextScrollDumHeight = "";

    let nextCount = 0;

    newAdd.map((eachWorkExp) => {
      nextCount += 1;
      if (nextCount === presentCount + 1) {
        nextId = eachWorkExp.id;
        nextPosition = eachWorkExp.positionVal;
        nextEmployer = eachWorkExp.employerVal;
        nextWorkArea = eachWorkExp.workVal;
        nextActualFromdate = eachWorkExp.actualFromDateValue;
        nextActualToDate = eachWorkExp.actualToDateValue;
        nextFromDate = eachWorkExp.fromDateValue;
        nextToDate = eachWorkExp.toDateValue;
        nextScrollDumHeight = eachWorkExp.scrollDum2Height;
      }
      return eachWorkExp;
    });

    let updateCount = 0;

    const updatedWorkExpSwapDown = newAdd.map((eachWorkExp) => {
      updateCount += 1;
      if (
        nextPosition !== "" &&
        presentPosition !== "" &&
        updateCount === presentCount
      ) {
        return {
          id: nextId,
          workVal: nextWorkArea,
          positionVal: nextPosition,
          employerVal: nextEmployer,
          scrollDum2Height: nextScrollDumHeight,
          fromDateValue: nextFromDate,
          toDateValue: nextToDate,
          actualFromDateValue: nextActualFromdate,
          actualToDateValue: nextActualToDate,
        };
      } else if (
        nextPosition !== "" &&
        presentPosition !== "" &&
        updateCount === presentCount + 1
      ) {
        return {
          id: presentId,
          workVal: presentWorkArea,
          positionVal: presentPosition,
          employerVal: presentEmployer,
          scrollDum2Height: presentScrollDumHeight,
          fromDateValue: presentFromDate,
          toDateValue: presentToDate,
          actualFromDateValue: presentActualFromdate,
          actualToDateValue: presentActualToDate,
        };
      }
      return eachWorkExp;
    });
    this.setState({ newAdd: updatedWorkExpSwapDown });
  };

  //Honor Award

  onSwapUpHonorAward = (uniqId) => {
    const { addingAwards } = this.state;
    let presentId = "";
    let presentAward = "";
    let presentOrg = "";
    let presentCount = 0;
    let count = 0;

    addingAwards.map((eachAward) => {
      count += 1;
      if (eachAward.idAward === uniqId) {
        presentCount = count;
        presentId = uniqId;
        presentAward = eachAward.awardVal;
        presentOrg = eachAward.awardOrgVal;
        return eachAward;
      }
      return eachAward;
    });

    let previousId = "";
    let previousAward = "";
    let previousOrg = "";
    let previousCount = 0;

    addingAwards.map((eachAward) => {
      previousCount += 1;
      if (previousCount === presentCount - 1) {
        previousId = eachAward.idAward;
        previousAward = eachAward.awardVal;
        previousOrg = eachAward.awardOrgVal;
        return eachAward;
      }
      return eachAward;
    });

    let updateCount = 0;
    const updatedSwapUpAwardsList = addingAwards.map((eachAward) => {
      updateCount += 1;
      if (updateCount === presentCount) {
        return {
          idAward: previousId,
          awardVal: previousAward,
          awardOrgVal: previousOrg,
        };
      } else if (updateCount === presentCount - 1) {
        return {
          idAward: presentId,
          awardVal: presentAward,
          awardOrgVal: presentOrg,
        };
      }
      return eachAward;
    });

    this.setState({ addingAwards: updatedSwapUpAwardsList });
  };

  r2conatactSection = (email, phone, linkedin) => (
    <div className="r2top-container-person-right-side-details">
      <span className="contact-cont-t2">
        <input
          type="email"
          autoComplete="new-email"
          value={email}
          onChange={this.onContactEmail}
          placeholder="Email"
          className="r2-email-input"
          ref={(element) => {
            this.r2emailRef1 = element;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && email.trim() !== "") {
              this.r2emailRef2.focus();
            }
          }}
        />
        <FontAwesomeIcon icon={faEnvelope} className="mail-icon-t2" />
      </span>
      <span className="contact-cont-t2">
        <input
          type="numbe"
          value={phone}
          autoComplete="new-number"
          onChange={this.onContactPhone}
          placeholder="Mobile Number"
          className="r2-number-input"
          ref={(element) => {
            this.r2emailRef2 = element;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && phone.trim() !== "") {
              this.r2emailRef3.focus();
            }
          }}
        />{" "}
        <FontAwesomeIcon icon={faSquarePhone} className="contact-icon-t2" />
      </span>
      <span className="contact-cont-t2">
        <input
          type="url"
          value={linkedin}
          autoComplete="new-linkedin"
          onChange={this.onChangeLinkedin}
          placeholder="Linked in"
          className="r2-url-input"
          ref={(element) => {
            this.r2emailRef3 = element;
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter" && linkedin.trim() !== "") {
              e.preventDefault();
              this.r2summaryTextAreaRef.focus();
            }
          }}
        />
        <BsLinkedin className="linkedin-icon-t2" />
      </span>
    </div>
  );

  uploadedResumeSkillsListUpdate = (resumeSkillsList) => {
    const { skillsList } = this.state;

    const updatingSkillItems = resumeSkillsList.map((eachSkill) => {
      return {
        uniqueNo: uuidv4(),
        skill: eachSkill,
      };
    });

    this.setState({ skillsList: [...skillsList, ...updatingSkillItems] });
  };

  uploadedResumeLanguagesListUpdate = (resLanguagesList) => {
    const { langList } = this.state;

    const updatingResumeLanguagesList = resLanguagesList.map((eachLang) => {
      return {
        langId: uuidv4(),
        language: eachLang.Language,
        proficiency: eachLang.Proficiency,
      };
    });

    this.setState({ langList: [...langList, ...updatingResumeLanguagesList] });
  };

  uploadedResumeHonorAwardListUpdate = (resHonorList) => {
    const { honorAwardsList } = this.state;

    const updatingResumeHonorAwardList = resHonorList.map((eachAward) => {
      return {
        awardIdd: uuidv4(),
        awardName: eachAward.award,
        Organization: eachAward.organization,
      };
    });
    this.setState({
      honorAwardsList: [...updatingResumeHonorAwardList, ...honorAwardsList],
    });
  };

  uploadedResumeEducationListUpdate = (resEducationList) => {
    const { newAddEducation } = this.state;

    const updatingResumeEducationList = resEducationList.map((eachEduction) => {
      const dateRange = eachEduction.duration;

      const [startDate, endDate] = dateRange.split("-");

      return {
        idss: uuidv4(),
        degreeVal: eachEduction.degree,
        schoolVal: eachEduction.collegeName,
        fromSchoolVal: startDate,
        toSchoolVal: endDate,
      };
    });

    this.setState({
      newAddEducation: [...updatingResumeEducationList, ...newAddEducation],
    });
  };

  uploadedResumeWorkExpListUpdate = (workExpList) => {
    const { newAdd } = this.state;
    let updatedResumeUplodList = workExpList.map((eachWorkExp) => {
      const resumeDate = eachWorkExp.duration;

      // if (resumeDate.includes("-")) {
      let formattedStartDate = "";
      let formattedEndDate = "";

      let startDate = "";
      let endDate = "";
      if (resumeDate.includes("-")) {
        [startDate, endDate] = resumeDate.split("-");

        const [startmonth, startyear] = startDate.split("/");

        const dateObj = new Date(startyear, startmonth - 1);
        formattedStartDate = `${dateObj.getFullYear()}-${(
          dateObj.getMonth() + 1
        )
          .toString()
          .padStart(2, "0")}`;

        const [endmonth, endyear] = endDate.split("/");

        const dateObj2 = new Date(endyear, endmonth - 1);
        formattedEndDate = `${dateObj2.getFullYear()}-${(dateObj.getMonth() + 1)
          .toString()
          .padStart(2, "0")}`;
      }

      const removeNewLines = (text) => {
        return text.replace(/\n/g, "");
      };
      const newWorkVal = removeNewLines(eachWorkExp.description);
      return {
        id: uuidv4(),
        workVal: newWorkVal,
        positionVal: eachWorkExp.position,
        employerVal: eachWorkExp.company,
        scrollDum2Height: "",
        fromDateValue: startDate,
        toDateValue: endDate,
        actualFromDateValue: formattedStartDate,
        actualToDateValue: formattedEndDate,
      };
    });

    this.setState({ newAdd: [...updatedResumeUplodList, ...newAdd] });
  };

  uploadedResumePersonalProjectsListUpdate = (resProjList) => {
    const { projectsList } = this.state;

    const updatedResumePersonalProjectsList = resProjList.map((eachProj) => {
      const removeNewLines = (text) => {
        return text.replace(/\n/g, "");
      };
      const newCreatedDetails = removeNewLines(eachProj.createdTheDeatils);
      const newAddedDetails = removeNewLines(eachProj.addedTheDetais);
      return {
        uniqueId: uuidv4(),
        collegeProjName: eachProj.projectTitle,
        createDetails: newCreatedDetails,
        addedDetails: newAddedDetails,
      };
    });
    this.setState({
      projectsList: [...projectsList, ...updatedResumePersonalProjectsList],
    });
  };

  handleFileChange = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("pdfFile", file);

    fetch("http://localhost:3006/upload", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.linkedinUrl !== "www.null") {
          this.setState({ linkedin: data.linkedinUrl });
        }
        console.log(data);
        const removeNewLines = (text) => {
          return text.replace(/\n/g, "");
        };
        const newSummaryText = removeNewLines(data.summaryText);
        this.setState({ summaryText: newSummaryText });
        this.setState(
          {
            skillsText: data.skillsText,
            // summaryText: data.summaryText,
            uploadedResumeskillsList: data.skillsList,
            resumeData: data,
            text: data.text,
            email: data.email,
            mainHeadYour: data.name,
            phone: data.mobileNumber,

            Profession: data.role,
            isRender: true,
            // listOfLanguages : data.listOfLanguages
            // educationList:educationList
            // workExpObjectsList
            // projectObjectsList
            // honorAwardsResumeList
          },
          () => {
            this.uploadedResumeSkillsListUpdate(data.skillsList);
            this.uploadedResumeLanguagesListUpdate(data.listOfLanguages);
            this.uploadedResumeEducationListUpdate(data.educList);
            this.uploadedResumeWorkExpListUpdate(data.workExpObjectsList);
            this.uploadedResumeHonorAwardListUpdate(data.honorAwardsResumeList);
            this.uploadedResumePersonalProjectsListUpdate(
              data.projectObjectsList
            );
          }
        );
      })
      .catch((error) => console.error(error));
  };

  //skills

  onChangeskillHeadingName = (event) => {
    this.setState({ skillHeading: event.target.value });
  };

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

  onClickOnAddButtonSkills = () => {
    const { skillsList, newSkillName, presentCount } = this.state;
    console.log(presentCount);
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

  onSwapLeft = (message) => {
    const { skillsList } = this.state;
    let presentSkilltext = "";
    let presentid = "";
    let count = 0;
    let prsntCount;
    skillsList.map((eachSkill) => {
      count += 1;
      if (eachSkill.uniqueNo === message) {
        presentSkilltext = eachSkill.skill;
        presentid = eachSkill.uniqueNo;
        prsntCount = count;
        return eachSkill;
      }
      return eachSkill;
    });

    let LeftCount = 1;
    let leftText = "";
    let leftId = "";
    const leftSwapUpdatedList = skillsList.map((eachSkill) => {
      LeftCount += 1;
      if (LeftCount === prsntCount) {
        leftText = eachSkill.skill;
        leftId = eachSkill.uniqueNo;
        console.log(presentSkilltext);
        return {
          uniqueNo: presentid,
          skill: presentSkilltext,
        };
      } else if (leftText !== "" && LeftCount === prsntCount + 1) {
        return {
          uniqueNo: leftId,
          skill: leftText,
        };
      }
      return eachSkill;
    });
    this.setState({ skillsList: leftSwapUpdatedList });
  };

  onSwapRight = (uniNo) => {
    const { skillsList } = this.state;
    let presentText = "";
    let presentCount = "";
    let presentid;
    let count = 0;
    skillsList.map((eachSkill) => {
      count += 1;
      if (eachSkill.uniqueNo === uniNo) {
        presentText = eachSkill.skill;
        presentid = eachSkill.uniqueNo;
        presentCount = count;
        return eachSkill;
      }
      return eachSkill;
    });
    console.log(presentText, presentid, presentCount);

    let rightText = "";
    let rightId = "";
    let rightCount = 0;

    skillsList.map((eachSkill) => {
      rightCount += 1;
      if (rightCount === presentCount + 1) {
        rightText = eachSkill.skill;
        rightId = eachSkill.uniqueNo;
        return eachSkill;
      }
      return eachSkill;
    });

    let updCount = 0;
    const updatedRightSwapList = skillsList.map((eachSkill) => {
      updCount += 1;
      if (rightText !== "" && updCount === presentCount) {
        return {
          uniqueNo: rightId,
          skill: rightText,
        };
      } else if (updCount === presentCount + 1) {
        return {
          uniqueNo: presentid,
          skill: presentText,
        };
      }
      return eachSkill;
    });

    this.setState({ skillsList: updatedRightSwapList });
  };

  //upload picture
  dataURLtoFile = (dataURL, filename) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  };

  updateProfilePic = async (profilePicUrl, profileUrl2) => {
    const { updatedUrlResume } = this.props;
    updatedUrlResume(profilePicUrl);

    this.setState({ isProfileUrlUpdated: true });
    const filename = "image.jpg"; // Replace with your desired filename

    const file = this.dataURLtoFile(profilePicUrl, filename);

    console.log(file); // The resulting File object
    const formData = new FormData();
    formData.append("image", file);
    console.log(formData);
    await axios.post("http://localhost:5000/profile", formData);
    this.setState({ profileUrl: profilePicUrl, isDataUrlCheck: true });
    console.log("submitted");
  };

  //col proj

  onChangeCollegeProjHeadingName = (event) => {
    this.setState({ collegeProjHeading: event.target.value });
  };

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutsideProj);
    document.removeEventListener("mousedown", this.handleLangInputClickOutSide);
  }

  handleClickOutsideProj = (event) => {
    const { projectsList, colProjName, colProjCD, colProjAD } = this.state;

    if (
      this.popupLCRef.current &&
      !this.popupLCRef.current.contains(event.target)
    ) {
      this.setState({ showInputPopup: false });
      this.setState({ proj1stInp: { border: "none", padding: "6px" } });
      if (colProjName !== "" || colProjCD !== "" || colProjAD !== "") {
        const newColProjObj = {
          uniqueId: uuidv4(),
          collegeProjName: colProjName,
          createDetails: colProjCD,
          addedDetails: colProjAD,
        };
        const updatedCollegeProjectsList = [...projectsList, newColProjObj];
        this.setState({
          projectsList: updatedCollegeProjectsList,
          colProjName: "",
          colProjCD: "",
          colProjAD: "",
        });
        this.setState({ showInputsCp: false });
      }
    }
  };

  handleTogglePopupCont = () => {
    // const { showInputPopup } = this.state;
    this.setState({ showInputPopup: true });
    this.setState({
      proj1stInp: {
        border: "2px dashed",
        padding: "6px",
        borderRadius: "10px",
        margin: "-2.1px",
      },
    });
  };

  onChangeCP = (event) => {
    this.setState({ colProjName: event.target.value });
    if (event.key === "Enter") {
      this.textarea22.current.focus();
    }
  };

  onChangeCD = (event) => {
    this.setState({ colProjCD: event.target.value });
    const textarea = event.target;
    textarea.style.height = "auto"; // reset height to default
    textarea.style.height = `${textarea.scrollHeight}px`; // set height to fit content
  };

  onChangeAD = (event) => {
    this.setState({ colProjAD: event.target.value });
    const textarea = event.target;
    textarea.style.height = "auto"; // reset height to default
    textarea.style.height = `${textarea.scrollHeight}px`; // set height to fit content
  };

  onClickOnAddButton = () => {
    const { projectsList, colProjName, colProjCD, colProjAD } = this.state;
    this.setState({ showInputsCp: true });
    this.setState({ showInputPopup: false });
    // if (colProjName !== ""  || colProjCD !== "" || colProjAD !== "") {
    if (this.state.showInputsCp) {
      const newColProjObj = {
        uniqueId: uuidv4(),
        collegeProjName: colProjName,
        createDetails: colProjCD,
        addedDetails: colProjAD,
      };
      const updatedCollegeProjectsList = [...projectsList, newColProjObj];
      this.setState({
        projectsList: updatedCollegeProjectsList,
        colProjName: "",
        colProjCD: "",
        colProjAD: "",
      });
    }
    // }
  };

  onFocusCollegeProject = () => {
    const { projectsList, colProjName, colProjCD, colProjAD } = this.state;
    if (colProjName === "") {
      const newColProjObj = {
        uniqueId: uuidv4(),
        collegeProjName: colProjName,
        createDetails: colProjCD,
        addedDetails: colProjAD,
      };
      const updatedCollegeProjectsList = [...projectsList, newColProjObj];
      this.setState({
        projectsList: updatedCollegeProjectsList,
        colProjName: "",
        colProjCD: "",
        colProjAD: "",
      });
      this.setState({ showInputsCp: false });
    }
  };

  onHandleMoveUpppp = () => {
    // const { projectsList, colProjName, colProjCD, colProjAD } = this.state;
    // if (colProjName !== "" && colProjCD !== "" && colProjAD !== "") {
    //   const newColProjObj = {
    //     uniqueId: uuidv4(),
    //     collegeProjName: colProjName,
    //     createDetails: colProjCD,
    //     addedDetails: colProjAD,
    //   };
    //   const updatedCollegeProjectsList = [...projectsList, newColProjObj];
    //   this.setState({
    //     projectsList: updatedCollegeProjectsList,
    //     colProjName: "",
    //     colProjCD: "",
    //     colProjAD: "",
    //   });
    // this.setState({ showInputsCp: false });
    // }
  };

  onClickCPSaveButton = () => {
    const { projectsList, colProjName, colProjCD, colProjAD } = this.state;
    if (colProjName !== "" && colProjCD !== "" && colProjAD !== "") {
      const newColProjObj = {
        uniqueId: uuidv4(),
        collegeProjName: colProjName,
        createDetails: colProjCD,
        addedDetails: colProjAD,
      };
      const updatedCollegeProjectsList = [...projectsList, newColProjObj];
      this.setState({
        projectsList: updatedCollegeProjectsList,
        colProjName: "",
        colProjCD: "",
        colProjAD: "",
      });
      this.setState({ showInputsCp: false });
    }
  };

  onClickAppInputsDeleteButton = () => {
    this.setState({
      colProjName: "",
      colProjCD: "",
      colProjAD: "",
      showInputsCp: false,
    });
  };

  onDeleteProj = (projId) => {
    const { projectsList } = this.state;
    const fiteredProjectList = projectsList.filter(
      (eachproj) => eachproj.uniqueId !== projId
    );

    this.setState({ projectsList: fiteredProjectList });
  };

  onUpdateInputs = (projId, inp1, inp2, inp3) => {
    const { projectsList } = this.state;
    const updatedInputValues = projectsList.map((eachProj) => {
      if (eachProj.uniqueId === projId) {
        return {
          uniqueId: projId,
          collegeProjName: inp1,
          createDetails: inp2,
          addedDetails: inp3,
        };
      }
      return eachProj;
    });
    this.setState({ projectsList: updatedInputValues });
  };

  onEnterproj3rdInput = (key) => {
    const { showInputsCp } = this.state;
    if (key === "Enter" && showInputsCp === true) {
      this.textarea11.focus();
    }
  };

  onOpenResume3ForSummary = () => {
    // const { testTarget } = this.state;
  };

  componentDidMount() {
    // this.onChangeCD({ target: this.textarea22 });
    // this.onChangeAD({ target: this.textarea33 });
    document.addEventListener("mousedown", this.handleClickOutsideProj);
    document.addEventListener("mousedown", this.handleLangInputClickOutSide);
    // if (this.state.selectResume === "Resume3") {
    //   this.onChangeSummaryAutoResize({ target: this.r2summaryTextAreaRef });
    // }
  }

  onSwapUpElement = (uniqId) => {
    const { projectsList } = this.state;
    let presinp1 = "";
    let presinp2 = "";
    let presinp3 = "";
    let presId = "";
    let presCount = 0;
    let count = 0;
    projectsList.map((eachProj) => {
      count += 1;
      if (eachProj.uniqueId === uniqId) {
        presinp1 = eachProj.collegeProjName;
        presinp2 = eachProj.createDetails;
        presinp3 = eachProj.addedDetails;
        presId = uniqId;
        presCount = count;
        return eachProj;
      }
      return eachProj;
    });

    let previnp1 = "";
    let previnp2 = "";
    let previnp3 = "";
    let prevId = "";
    let count1 = 0;

    const topSwapupdatedProjectList = projectsList.map((eachProj) => {
      count1 += 1;
      if ((presinp1 !== "") & (count1 === presCount - 1)) {
        previnp1 = eachProj.collegeProjName;
        previnp2 = eachProj.createDetails;
        previnp3 = eachProj.addedDetails;
        prevId = eachProj.uniqueId;
        return {
          uniqueId: presId,
          collegeProjName: presinp1,
          createDetails: presinp2,
          addedDetails: presinp3,
        };
      } else if (
        (presinp1 !== "") &
        (previnp1 !== "") &
        (count1 === presCount)
      ) {
        return {
          uniqueId: prevId,
          collegeProjName: previnp1,
          createDetails: previnp2,
          addedDetails: previnp3,
        };
      }
      return eachProj;
    });
    this.setState({ projectsList: topSwapupdatedProjectList });
  };

  onSwapDownElement = (uniqId) => {
    console.log(uniqId);
    const { projectsList } = this.state;
    let presinp1 = "";
    let presinp2 = "";
    let presinp3 = "";
    let presId = "";
    let presCount = 0;
    let count = 0;
    projectsList.map((eachProj) => {
      count += 1;
      if (eachProj.uniqueId === uniqId) {
        presinp1 = eachProj.collegeProjName;
        presinp2 = eachProj.createDetails;
        presinp3 = eachProj.addedDetails;
        presId = uniqId;
        presCount = count;
        return eachProj;
      }
      return eachProj;
    });
    let nextinp1 = "";
    let nextinp2 = "";
    let nextinp3 = "";
    let nextId = "";
    let nextCount = 0;
    projectsList.map((eachProj) => {
      nextCount += 1;
      if (nextCount === presCount + 1) {
        nextinp1 = eachProj.collegeProjName;
        nextinp2 = eachProj.createDetails;
        nextinp3 = eachProj.addedDetails;
        nextId = eachProj.uniqueId;
        return eachProj;
      }
      return eachProj;
    });
    let updCount = 0;
    const updatedDownSwapProjectsList = projectsList.map((eachProj) => {
      updCount += 1;
      if (nextinp1 !== "" && presinp1 !== "" && updCount === presCount) {
        return {
          uniqueId: nextId,
          collegeProjName: nextinp1,
          createDetails: nextinp2,
          addedDetails: nextinp3,
        };
      } else if (
        nextinp1 !== "" &&
        presinp1 !== "" &&
        updCount === presCount + 1
      ) {
        return {
          uniqueId: presId,
          collegeProjName: presinp1,
          createDetails: presinp2,
          addedDetails: presinp3,
        };
      }
      return eachProj;
    });
    this.setState({ projectsList: updatedDownSwapProjectsList });
  };

  //lang

  onChangeLanguageHeadingName = (event) => {
    this.setState({ LanguageHeading: event.target.value });
  };

  onChangeLanguageInput = (event) => {
    this.setState({ language: event.target.value });
    this.setState({ testingLan: false });
  };

  onChangeProficiencyInput = (event) => {
    this.setState({ proficiency: event.target.value, showinpPopup: false });
    console.log("ss");
  };
  onhidePopup = () => {
    this.setState({ showInputPopup: false });
  };

  onClickLangAddButton = () => {
    this.setState({ showInputLangContainer: true, showinpPopup: false });
    const { langList, language, proficiency } = this.state;
    // if (language !== "" && proficiency !== "") {
    if (this.state.showInputLangContainer) {
      const newLangObj = {
        langId: uuidv4(),
        language,
        proficiency,
      };
      this.setState({ langList: [...langList, newLangObj] });
    }
    // }
    this.setState({ language: "", proficiency: "Full Proficient" });
  };

  onClickLangSaveButton = () => {
    const { langList, language, proficiency } = this.state;
    if (language !== "" && proficiency !== "") {
      const newLangObj = {
        langId: uuidv4(),
        language,
        proficiency,
      };
      this.setState({ langList: [...langList, newLangObj] });
      this.setState({ language: "", proficiency: "Full Proficient" });
      this.setState({ showInputLangContainer: false, showinpPopup: false });
    }
  };

  onClickDeleteInputContainer = () => {
    this.setState({ showInputLangContainer: false });
    this.setState({ showinpPopup: false });
    this.setState({ language: "", proficiency: "" });
  };

  onClikLangInputsContainer = () => {
    const { testingLan, language } = this.state;
    console.log("Cliked", this.state.proficiency);
    this.setState({ testingLan: true });
    // if (language !== "" && testingLan) {
    this.setState({ showinpPopup: true });
    // }
    this.setState({
      styleborderlang: {
        border: "1px dashed",
        borderRadius: "10px",
        padding: "0px",
        margin: "0px",
      },
    });
  };

  onUpdateLangInputs = (uniqId, inp1, inp2) => {
    const { langList } = this.state;
    const updatedLangList = langList.map((eachLang) => {
      if (eachLang.langId === uniqId) {
        return {
          langId: uniqId,
          language: inp1,
          proficiency: inp2,
        };
      }
      return eachLang;
    });
    this.setState({ langList: updatedLangList });
  };

  onDeleteLanguage = (uniqId) => {
    const { langList } = this.state;
    const filteredLangList = langList.filter(
      (eachLang) => eachLang.langId !== uniqId
    );
    this.setState({ langList: filteredLangList });
  };

  handleLangInputClickOutSide = (event) => {
    if (
      this.popupLangInputContRef.current &&
      !this.popupLangInputContRef.current.contains(event.target)
    ) {
      this.setState({ showinpPopup: false });
      this.setState({ styleborderlang: { border: "none" } });
      this.onClickLangSaveButton();
    }
  };

  onSwapeLeftLangCont = (uniqId) => {
    const { langList } = this.state;
    let presentLang = "";
    let presentProf = "";
    let presentId = "";
    let presentCount = 0;
    let count = 0;
    langList.map((eachLang) => {
      count += 1;
      if (eachLang.langId === uniqId) {
        presentLang = eachLang.language;
        presentProf = eachLang.proficiency;
        presentId = uniqId;
        presentCount = count;
        return eachLang;
      }
      return eachLang;
    });
    let previousLang = "";
    let previousProf = "";
    let previousId = "";
    let prevCount = 0;
    const LeftSwapUpdatedLanguageList = langList.map((eachLang) => {
      prevCount += 1;
      if (
        eachLang.langId !== "" &&
        presentId !== "" &&
        prevCount === presentCount - 1
      ) {
        previousLang = eachLang.language;
        previousProf = eachLang.proficiency;
        previousId = eachLang.langId;
        return {
          langId: presentId,
          language: presentLang,
          proficiency: presentProf,
        };
      } else if (
        previousId !== "" &&
        presentId !== "" &&
        prevCount === presentCount
      ) {
        return {
          langId: previousId,
          language: previousLang,
          proficiency: previousProf,
        };
      }
      return eachLang;
    });
    console.log(previousId, presentId);
    this.setState({ langList: LeftSwapUpdatedLanguageList });
  };

  onSwapRightLangCont = (uniqId) => {
    const { langList } = this.state;
    let presentLang = "";
    let presentProf = "";
    let presentId = "";
    let presentCount = 0;
    let count = 0;
    langList.map((eachLang) => {
      count += 1;
      if (eachLang.langId === uniqId) {
        presentLang = eachLang.language;
        presentProf = eachLang.proficiency;
        presentId = uniqId;
        presentCount = count;
        return eachLang;
      }
      return eachLang;
    });

    let nextLang = "";
    let nextProf = "";
    let nextId = "";
    let nextCount = 0;
    langList.map((eachLang) => {
      nextCount += 1;
      if (nextCount === presentCount + 1) {
        nextLang = eachLang.language;
        nextProf = eachLang.proficiency;
        nextId = eachLang.langId;
        return eachLang;
      }
      return eachLang;
    });
    let updCount = 0;
    const updatedRightSwapLangList = langList.map((eachLang) => {
      updCount += 1;
      if (nextId !== "" && presentId !== "" && updCount === presentCount) {
        return {
          langId: nextId,
          language: nextLang,
          proficiency: nextProf,
        };
      } else if (
        presentId !== "" &&
        nextId !== "" &&
        updCount === presentCount + 1
      ) {
        return {
          langId: presentId,
          language: presentLang,
          proficiency: presentProf,
        };
      }
      return eachLang;
    });
    this.setState({ langList: updatedRightSwapLangList });
  };

  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section
  //my section

  mainHeadingYour = (mainHeadYour, Profession) => (
    <div className="">
      <input
        ref={this.inputRefMainHeading}
        type="text"
        autoComplete="new-name"
        value={mainHeadYour}
        className="head-your fontSizeClassHead"
        onChange={this.onMainHeading}
        onKeyDown={(e) => {
          if (e.key === "Enter" && mainHeadYour.trim() !== "") {
            e.preventDefault();
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
        autoComplete="new-profession"
        value={Profession}
        className="head-your-para fontSizeClassHeadsub"
        onChange={this.onMainProfession}
        onKeyDown={(e) => {
          if (e.key === "Enter" && Profession.trim() !== "") {
            e.preventDefault();
            this.inputRefTextSummary.current.focus();
          }
        }}
        placeholder="YOUR ROLE OR PROFESSION"
      />
    </div>
  );
  onSummary = (event) => {
    this.setState({
      summaryText: event.target.value,
    });

    // const summarytextarea = event.target;
    // summarytextarea.style.height = "auto";
    // summarytextarea.style.height = `${summarytextarea.scrollHeight}px`;

    // this.setState({ r2summaryHeight: summarytextarea.scrollHeight });

    const getElementTextarea =
      document.getElementsByClassName("common-textarea");
    // getElementTextarea.style.height = this.state.height1;

    // getElementTextarea[0].style.height = this.state.height1;
    console.log(getElementTextarea[0]);
    const textarea = event.target;
    // textarea.style.height = "auto"; // reset height to default
    // textarea.style.height = `${textarea.scrollHeight}px`;
    this.setState({ heightSummary: `${textarea.scrollHeight}px` });
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
          rows="1"
          ref={this.inputRefTextSummary}
          type="text"
          onChange={this.onSummary}
          onKeyDown={(e) => {
            if (e.key === "Enter" && summaryText.trim() !== "") {
              e.preventDefault();
              this.inputRefEducationDegree.current.focus();
            }
          }}
          value={summaryText}
          style={{
            // minHeight:"300px",
            height: `${this.state.r2summaryHeightr2summaryHeight}px`,
            width: "100%",
            fontSize: "16px",
            padding: "4px",
          }}
          className="summary-text-total margin fontSizeClasspara common-textarea"
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
              e.preventDefault();
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
          autoComplete="new-number"
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
                e.preventDefault();
                this.inputRefPhone.current.focus();
              }
            }}
            value={email}
            autoComplete="new-email"
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
                e.preventDefault();
                this.inputReflinkiden.current.focus();
              }
            }}
            value={phone}
            className="place-text fontSizeClasspara"
            type="text"
            autoComplete="new-number"
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
                e.preventDefault();
                this.inputRefgithub.current.focus();
              }
            }}
            value={this.state.linkedin}
            className="place-text fontSizeClasspara"
            type="text"
            autoComplete="new-linkedin"
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
                e.preventDefault();
                this.input1RefPos1.current.focus();
              }
            }}
            value={this.state.github}
            autoComplete="new-github"
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

      workVal: "",
      positionVal: "",
      employerVal: "",

      scrollDum2Height: "100px",
      fromDateValue: "",
      toDateValue: "",
      actualFromDateValue: "",
      actualToDateValue: "",
    };

    this.setState((prev) => ({
      newAdd: [...prev.newAdd, newPara],
      isRender: true,
    }));
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
    scrollDum2From,
    fromDate,
    toDate,
    actualFromDate,
    actualToDate
  ) => {
    const { newAdd } = this.state;
    // console.log(fromDate, toDate, actualFromDate, actualToDate);

    const updateVal = newAdd.map((each) => {
      if (id === each.id) {
        return {
          ...each,
          workVal: valFromWork,
          positionVal: valFromPosition,
          employerVal: valFromEmployer,

          scrollDum2Height: scrollDum2From,
          fromDateValue: fromDate,
          toDateValue: toDate,
          actualFromDateValue: actualFromDate,
          actualToDateValue: actualToDate,
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

        <div className="" onClick={this.onAddNew}>
          <button className="second-temp-button ">+</button>
        </div>
      </div>

      <div>
        <ul className="work-exp-ul-cont">
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
              onSwapWorkExpUpElement={this.onSwapWorkExpUpElement}
              onSwapWorkExpDownElement={this.onSwapWorkExpDownElement}
              OnDeleteMain={this.OnDeleteMain}
              isTrue={isTrue}
              deleteDisplay={deleteDisplay}
              styleCol={this.state.styleCol}
            />
          ))}
        </ul>
      </div>
    </div>
  );

  onAddNewEducation = (isok2) => {
    if (true) {
      const newParass = {
        idss: uuidv4(),
        degreeVal: "",
        schoolVal: "",
        fromSchoolVal: "",
        toSchoolVal: "",
      };

      this.setState((prev) => ({
        newAddEducation: [...prev.newAddEducation, newParass],
        isRender: true,
      }));
    }
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
    fromSchool,
    untillSchool,
    idss
  ) => {
    const { newAddEducation } = this.state;
    // console.log(degreeFrom,schoolFrom,fromSchool,untillSchool,idss)

    const updateVal = newAddEducation.map((each) => {
      if (idss === each.idss) {
        return {
          ...each,
          degreeVal: degreeFrom,
          schoolVal: schoolFrom,
          fromSchoolVal: fromSchool,
          toSchoolVal: untillSchool,
        };
      }
      return each;
    });
    // console.log(updateVal);
    this.setState({ newAddEducation: updateVal });
  };

  educationDetails = (newAddEducation, checkLen, education, isOk2) => (
    <div>
      <div className="d-flex-work-add-button">
        <input
          id="subHeadEducation"
          className="summary-head main-margin fontSizeClass"
          type="text"
          value={education}
          onChange={this.onEducation}
        />
        <div className="" onClick={() => this.onAddNewEducation(isOk2)}>
          <button className="second-temp-button">+</button>
        </div>
      </div>

      <ul className="education-ul-cont">
        {newAddEducation.map((each) => (
          <Education
            inputEnterCity={this.inputEnterCity}
            inputRefEducationDegree={this.inputRefEducationDegree}
            onChangeValMainEducation={this.onChangeValMainEducation}
            key={each.idss}
            details={each}
            OnDeleteMainEducation={this.OnDeleteMainEducation}
            onSwapUpEducation={this.onSwapUpEducation}
            onSwapDownEducation={this.onSwapDownEducation}
            checkLen={checkLen}
            styleCol={this.state.styleCol}
            selectResume={this.state.selectResume}
            onAddNewEducation={this.onAddNewEducation}
            newAddEducation={this.state.newAddEducation}
          />
        ))}
      </ul>
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

    const summarytextarea = e.target;
    summarytextarea.style.height = "auto";
    summarytextarea.style.height = `${summarytextarea.scrollHeight}px`;
  };

  onAddAwards = () => {
    const { addingAwards } = this.state;
    const newVal = {
      idAward: uuidv4(),
      awardVal: "",
      awardOrgVal: "",
    };

    this.setState({ addingAwards: [...addingAwards, newVal] });
  };

  addAwardMainApp = (idAwar, awardName, awardOrg) => {
    const { addingAwards } = this.state;
    const updateAward = addingAwards.map((each) => {
      if (idAwar === each.idAward) {
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

  onFontsizeChangeA1 = () => {
    this.setState({
      mainHeadFontSize: "30px",
      mainRoleFontSize: "24px",
      allParaFontSize: "16px",

      // pdf sizes
      mainHeadFontSizepdf: "21px",
      mainRoleFontSizepdf: "12px",
      allParaFontSizepdf: "9px",
      sideHeadingWorkExppdf: "13px",
      sideHeadingWorkExp1pdf: "12px",
      sideHeadingWorkExp2pdf: "11px",

      // font-size-change
      fontSizeChange: "size-1",
    });
  };

  onFontsizeChangeA2 = () => {
    this.setState({
      mainHeadFontSize: "33px",
      mainRoleFontSize: "26px",
      allParaFontSize: "16px",

      // pdf sizes
      mainHeadFontSizepdf: "22px",
      mainRoleFontSizepdf: "13px",
      allParaFontSizepdf: "10px",
      sideHeadingWorkExppdf: "14px",
      sideHeadingWorkExp1pdf: "13px",
      sideHeadingWorkExp2pdf: "12px",

      // font-size-change
      fontSizeChange: "size-2",
    });
  };

  onFontsizeChangeA3 = () => {
    this.setState({
      mainHeadFontSize: "36px",
      mainRoleFontSize: "28px",
      allParaFontSize: "20px",

      // pdf sizes

      mainHeadFontSizepdf: "23px",
      mainRoleFontSizepdf: "14px",
      allParaFontSizepdf: "11px",
      sideHeadingWorkExppdf: "15px",
      sideHeadingWorkExp1pdf: "14px",
      sideHeadingWorkExp2pdf: "13px",

      // font-size-change
      fontSizeChange: "size-3",
    });
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

  changeStateFun = () => {
    this.setState({ isRender: true });
  };

  sendData = async () => {
    const data1 = {
      name: this.state.mainHeadYour,
      profession: this.state.Profession,
      summary: this.state.summaryText,
      place: this.state.place,
      email: this.state.email,
      phone: this.state.phone,
      linkedin: this.state.linkedin,
      github: this.state.github,
      totalSkills: this.state.skillsList,
      workExpTotal: this.state.newAdd,
      educationTotal: this.state.newAddEducation,
      aboutHeadline: this.state.aboutHeadlineResume2,
      awardTotal: this.state.honorAwardsList,
      selectResume: this.state.selectResume,
      projectTotal: this.state.projectsList,
      languageTotal: this.state.langList,
      isProfileUrlUpdated: this.state.isProfileUrlUpdated,
      selectedFontBack: this.state.selectedFont,

      // disable data

      disProfilePic: this.state.disbleList[0].checked,
      disRole: this.state.disbleList[1].checked,
      disSummary: this.state.disbleList[2].checked,
      disAbout: this.state.disbleList[3].checked,
      disEmail: this.state.disbleList[4].checked,
      disPhone: this.state.disbleList[5].checked,
      disLinkedin: this.state.disbleList[6].checked,
      disGithub: this.state.disbleList[7].checked,
      disSkills: this.state.disbleList[8].checked,
      disAwards: this.state.disbleList[9].checked,
      disLanguages: this.state.disbleList[10].checked,
      disPersonal: this.state.disbleList[11].checked,
      inputValueMain: this.state.inputValueMain,
      isDataUrlCheck: this.state.isDataUrlCheck,
    };

    try {
      await axios.post("http://localhost:5000/senddata", data1);
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  addUser = async () => {
    // this.updateProfilePic(this.state.profilePicUrl, 1);
    const data1 = {
      name: this.state.mainHeadYour,
      profession: this.state.Profession,
      summary: this.state.summaryText,
      place: this.state.place,
      email: this.state.email,
      phone: this.state.phone,
      linkedin: this.state.linkedin,
      github: this.state.github,
      totalSkills: this.state.skillsList,
      workExpTotal: this.state.newAdd,
      educationTotal: this.state.newAddEducation,
      aboutHeadline: this.state.aboutHeadlineResume2,
      awardTotal: this.state.honorAwardsList,
      selectResume: this.state.selectResume,
      projectTotal: this.state.projectsList,
      languageTotal: this.state.langList,
      isProfileUrlUpdated: this.state.isProfileUrlUpdated,
      selectedFontBack: this.state.selectedFont,

      // disable data

      disProfilePic: this.state.disbleList[0].checked,
      disRole: this.state.disbleList[1].checked,
      disSummary: this.state.disbleList[2].checked,
      disAbout: this.state.disbleList[3].checked,
      disEmail: this.state.disbleList[4].checked,
      disPhone: this.state.disbleList[5].checked,
      disLinkedin: this.state.disbleList[6].checked,
      disGithub: this.state.disbleList[7].checked,
      disSkills: this.state.disbleList[8].checked,
      disAwards: this.state.disbleList[9].checked,
      disLanguages: this.state.disbleList[10].checked,
      disPersonal: this.state.disbleList[11].checked,
      inputValueMain: this.state.inputValueMain,
      isDataUrlCheck: this.state.isDataUrlCheck,
    };

    //coutning mission for trails

    let count = 0;
    let intervalId = setInterval(() => {
      count += 1;
      console.log(count);
    }, 1000);

    this.setState({
      downloadText: "Downloading in Progress",
      showDownloadLoader: true,
      butonControl: true,
      downloadLoader: true,
    });
    axios
      .post("http://localhost:5000/user", data1)
      .then(() =>
        axios.get("http://localhost:5000/users", {
          responseType: "blob",
        })
      )
      .then((res) => {
        const pdfBlob = new Blob([res.data], {
          type: "application/pdf",
        });
        console.log(pdfBlob, 1, "blob");
        console.log("downloaded");

        //trails mission
        clearInterval(intervalId);
        //trails mission

        this.setState({
          downloadText: "Resume Downloaded",
          showDownloadLoader: false,
          typewriterIdSelector: "typewriter",
          showResDownlodedIcon: true,
          downloadLoader: false,
        });

        setTimeout(() => {
          this.setState({
            downloadText: "Download PDF",
            typewriterIdSelector: "",
            showResDownlodedIcon: false,
            butonControl: false,
          });
        }, 3000);

        saveAs(pdfBlob, "Resume.pdf");
      });
  };

  //resume3
  //resume3
  //resume3
  //resume3
  //resume3
  //resume3

  // popup edit widget

  onClickOnWidgetButton = () => {
    this.setState({ widgetPopup: true });
  };
  onClickOnWidgetCloseButton = () => {
    this.setState({ widgetPopup: false });
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

  handleInputChangeMain = (e) => {
    this.setState({ inputValueMain: e.target.value });
    this.props.handleInputChangeInput(e.target.value);
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
      Profession,
      summaryHead,
      personal,
      location,
      contact,
      workexp,
      education,

      place,
      email,
      phone,

      //skills

      skillsList,
      newSkillName,
      showInput,
      showSaveButton,
      showInputDeleteButton,
      style1,

      //col-proj

      showInputPopup,
      showInputsCp,
      projectsList,
      colProjName,
      colProjAD,
      colProjCD,
      proj1stInp,

      //lang
      langList,
      language,
      proficiency,
      showInputLangContainer,
      showinpPopup,
      styleborderlang,

      //doenload options
      downloadText,
      showDownloadLoader,
      typewriterIdSelector,
      showResDownlodedIcon,
      butonControl,
      downloadLoader,

      // widget

      widgetPopup,
    } = this.state;
    console.log("check url", this.state.profileUrl);
    if (this.state.profileUrl === "" && this.state.isDataUrlCheck === true) {
      this.setState({ isDataUrlCheck: false });
    }
    console.log(this.state.profileUrl, "1234");
    let checkLen = false;
    let deleteDisplay = false;

    const { honorAwards, honorAwardsList } = this.state;

    const isOk3 = honorAwardsList.every(
      (each) => each.awardName !== "" && each.Organization !== ""
    );

    if (this.state.selectResume === "Resume3") {
      this.onOpenResume3ForSummary();
    }

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

    this.sendData();

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

    const isOk2 = newAddEducation.every(
      (each) =>
        each.degreeVal !== "" &&
        each.schoolVal !== "" &&
        each.fromSchoolVal !== "" &&
        each.toSchoolVal !== ""
    );

    if (this.state.isRender) {
      this.setState({ isRender: false });
    }

    const common1 = document.getElementsByClassName("common-textarea");
    if (common1[0]) {
      common1[0].style.height = "auto";
      common1[0].style.height = `${common1[0].scrollHeight}px`;
    }

    let toggleContainer = "";
    if (this.state.selectResume === "Resume2") {
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
    } else if (this.state.selectResume === "Resume3") {
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

    return (
      <div>
        {downloadLoader && (
          <div className="download-loader-effect">
            <RotatingLines />
          </div>
        )}
        <NewpdfComp />
        <div className="main-cont-new">
          <Link to="/mypdf">CREATE A pdf</Link>
          <div className="row-horzontal-color-new">
            <ColorPiker changeFunCol={this.changeFunCol} />
            <p className="dowload-text-new">COLOR</p>
          </div>

          <div className="row-horzontal-color-new">
            <div>
              <select
                className="select-class-name-new"
                onChange={this.onSelectOptions}
                value={selectedOption}
              >
                <option value="Times New Roman">Times New Roman</option>
                <option value="system-ui">system-ui</option>
              </select>
            </div>
            <p className="dowload-text-new">FONT</p>
          </div>
          <div onClick={this.addUser} className="row-horzontal-color-new">
            <div className="download-button-icon-new">
              <MdDownload />
            </div>
            <NewpdfComp />
            <p className="dowload-text-new">DOWNLOAD</p>
          </div>
          <div>
            <ChangeTemp
              onChangeAppSelectResume={this.onChangeAppSelectResume}
              selectResume={this.state.selectResume}
              changeStateFun={this.changeStateFun}
              isRender={this.state.isRender}
            />
          </div>

          <div>
            <label className="row-horzontal-color-new" htmlFor="uploadResumeId">
              <div className="download-button-icon-new">
                <MdUpload />
              </div>
              <p className="dowload-text-new">UPLOAD</p>
            </label>
            <input
              type="file"
              id="uploadResumeId"
              accept="application/pdf"
              style={{ display: "none" }}
              onChange={this.handleFileChange}
            />
          </div>
          <div
            onClick={this.onClickOnWidgetButton}
            className="row-horzontal-color-new"
          >
            <div className="template-button-icon-new ">
              <FontAwesomeIcon icon={faGear} />
            </div>

            <p className="dowload-text-new">CONFIGURE</p>
          </div>
        </div>

        <div
          className="main-cont-bg poppins-bold"
          style={{ backgroundColor: this.state.styleCol }}
        >
          <div className="main-cont">
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

            {this.state.selectResume === "Resume2" && (
              <div>
                <div className="margin-main-cont">
                  <input
                    type="text"
                    value={this.state.inputValueMain}
                    onChange={this.handleInputChangeMain}
                  />
                  <div className="first-container">
                    <div className="r2top-photoo">
                      <R2ImageUpload
                        profileUrl={this.state.profileUrl}
                        updateProfilePic={this.updateProfilePic}
                      />
                    </div>
                    <div className="">
                      <input
                        ref={this.inputRefMainHeading}
                        type="text"
                        value={mainHeadYour}
                        autoComplete="new-name"
                        // autoComplete="new-name"
                        className="head-your fontSizeClassHead"
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
                        autoComplete="new-profession"
                        className="head-your-para fontSizeClassHeadsub"
                        onChange={this.onMainProfession}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && Profession.trim() !== "") {
                            this.inputRefMainAbout.current.focus();
                          }
                        }}
                        placeholder="YOUR ROLE OR PROFESSION"
                      />
                      <br />
                      <textarea
                        rows="1"
                        ref={this.inputRefMainAbout}
                        type="text"
                        autoComplete="new-headline"
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
                  {/* contact section */}
                  <div>
                    <div
                      className="mail-phone-linkedin border-hr"
                      style={{ borderColor: this.state.styleCol }}
                    >
                      <div className="icon-cont margin">
                        <div
                          className="email-icon-back"
                          // style={{ backgroundColor: this.state.styleCol }}
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
                          autoComplete="new-email"
                          className="place-text fontSizeClasspara"
                          type="text"
                          placeholder="Enter your email"
                        />{" "}
                      </div>
                      <div className="icon-cont">
                        <div
                          className="email-icon-back"
                          // style={{ backgroundColor: this.state.styleCol }}
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
                          autoComplete="new-number"
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
                            // style={{ backgroundColor: this.state.styleCol }}
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
                            autoComplete="new-linkedin"
                            placeholder="enter linkedin url"
                            className="place-text-resume2 fontSizeClasspara"
                          />
                        </div>
                      </div>
                      <div className="icon-cont left-margin-linkedin">
                        <div>
                          {" "}
                          <div
                            className="email-icon-back"
                            // style={{ backgroundColor: this.state.styleCol }}
                          >
                            {" "}
                            <BsGithub className="font-icon-email" />
                          </div>
                        </div>

                        <div>
                          <input
                            ref={this.inputRefgithub}
                            type="text"
                            autoComplete="new-github"
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
                            placeholder="enter github url"
                            className="place-text-resume2 fontSizeClasspara"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="workexp-skillshonoreducation">
                      <div className="r2-left-cont">
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
                          <div class="" onClick={this.onAddNew}>
                            <button class="second-temp-button">+</button>
                          </div>
                        </div>

                        <div>
                          <div className="work-exp-ul-cont">
                            {newAdd.map((each) => (
                              <AddWorkExp
                                newAdd={this.state.newAdd}
                                input1RefPos1={this.input1RefPos1}
                                onAddNew={this.onAddNew}
                                selectResume={this.state.selectResume}
                                onChangeFunAddWorkChangeValMain={
                                  this.onChangeFunAddWorkChangeValMain
                                }
                                onSwapWorkExpUpElement={
                                  this.onSwapWorkExpUpElement
                                }
                                onSwapWorkExpDownElement={
                                  this.onSwapWorkExpDownElement
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

                      <div className="r2-right-cont">
                        <div>
                          <div className="container">
                            <div className="skills-add-button-container">
                              <input
                                className="summary-head main-margin fontSizeClass"
                                type="text"
                                style={{ color: this.state.styleCol }}
                                value={this.state.skillHeading}
                                onChange={this.onChangeskillHeadingName}
                              />
                              <button
                                className="second-temp-button"
                                onClick={this.onClickOnAddButtonSkills}
                              >
                                +
                              </button>
                            </div>
                            <div>
                              {skillsList.map((eachSkill) => (
                                <Skills
                                  skillsDetails={eachSkill}
                                  onDeleteSkill={this.onDeleteSkill}
                                  onUpdateSkillsList={this.onUpdateSkillsList}
                                  onClikEnterAfterUpd={this.onClikEnterAfterUpd}
                                  onSwapLeft={this.onSwapLeft}
                                  onSwapRight={this.onSwapRight}
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
                        <div>
                          <div className="d-flex-work-add-button">
                            <input
                              id="subHeadhonorAwards"
                              className="summary-head main-margin fontSizeClass"
                              type="text"
                              style={{ color: this.state.styleCol }}
                              value={honorAwards}
                              onChange={this.onhonorAwards}
                            />
                            <div
                              onClick={() => this.onAddNewhonorAwards(isOk3)}
                            >
                              <button className="second-temp-button">+</button>
                            </div>
                          </div>

                          <div className="honorAwards-ul-cont">
                            {honorAwardsList.map((each) => (
                              <HonorAwards
                                inputEnterCityyy={this.inputEnterCityyy}
                                inputRefhonorAwardsAwardree={
                                  this.inputRefhonorAwardsAwardree
                                }
                                onChangeValMainhonorAwards={
                                  this.onChangeValMainhonorAwards
                                }
                                key={each.awardIdd}
                                details={each}
                                OnDeleteMainhonorAwards={
                                  this.OnDeleteMainhonorAwards
                                }
                                onSwapUphonorAwards={this.onSwapUphonorAwards}
                                onSwapDownhonorAwards={
                                  this.onSwapDownhonorAwards
                                }
                                styleCol={this.state.styleCol}
                                selectResume={this.state.selectResume}
                                onAddNewhonorAwards={this.onAddNewhonorAwards}
                                honorAwardsList={this.state.honorAwardsList}
                              />
                            ))}
                          </div>
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
                              class=""
                              onClick={() => this.onAddNewEducation(isOk2)}
                            >
                              <button class="second-temp-button">+</button>
                            </div>
                          </div>

                          <div className="education-ul-cont">
                            {newAddEducation.map((each) => (
                              <Education
                                inputRefEducationDegree={
                                  this.inputRefEducationDegree
                                }
                                onChangeValMainEducation={
                                  this.onChangeValMainEducation
                                }
                                onSwapUpEducation={this.onSwapUpEducation}
                                onSwapDownEducation={this.onSwapDownEducation}
                                key={each.idss}
                                details={each}
                                OnDeleteMainEducation={
                                  this.OnDeleteMainEducation
                                }
                                checkLen={checkLen}
                                styleCol={this.state.styleCol}
                                selectResume={this.state.selectResume}
                                onAddNewEducation={this.onAddNewEducation}
                                newAddEducation={this.state.newAddEducation}
                              />
                            ))}
                          </div>
                          <div>{/* <Certifiacations /> */}</div>
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
                    <div className="r2-photo-container">
                      <div className="r2top-photoo">
                        <R2ImageUpload
                          profileUrl={this.state.profileUrl}
                          updateProfilePic={this.updateProfilePic}
                        />
                      </div>
                    </div>
                    <div className="r2top-person-details">
                      <div className="">
                        <form autoComplete="off">
                          <input
                            ref={this.inputRefMainHeading}
                            type="text"
                            value={mainHeadYour}
                            autoComplete="new-name"
                            className="head-your fontSizeClassHead"
                            onChange={this.onMainHeading}
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                mainHeadYour.trim() !== ""
                              ) {
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
                            className="head-your-para fontSizeClassHeadsub"
                            onChange={this.onMainProfession}
                            onKeyDown={(e) => {
                              if (
                                e.key === "Enter" &&
                                Profession.trim() !== ""
                              ) {
                                this.r2emailRef1.focus();
                              }
                            }}
                            placeholder="YOUR ROLE OR PROFESSION"
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* <div className="r2top-container-person-right-side-details"> */}
                  {this.r2conatactSection(email, phone, this.state.linkedin)}
                  {/* </div> */}
                </div>

                <div style={{ marginTop: "10px" }}>
                  <textarea
                    rows="1"
                    className="r2summary-text-area scroll-hidden common-textarea"
                    placeholder="Enter Your Professional summary Provide a brief overview of your relevant skills, experience, and qualities that would make you a good condidate for the job. Make sure to keep it concise and focused. If your need help writing your professional summary, you can see the AI Writing Assistant."
                    style={{
                      height: `${this.state.r2summaryHeight}px`,
                      fontSize: "16px",
                      padding: "5px",
                    }}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        event.preventDefault();
                      }
                    }}
                    value={summaryText}
                    ref={(element) => {
                      this.r2summaryTextAreaRef = element;
                    }}
                    onChange={this.onSummary}
                  />
                </div>

                <div className="container">
                  <div className="skills-add-button-container">
                    <input
                      className="summary-head main-margin fontSizeClass"
                      type="text"
                      style={{ color: this.state.styleCol }}
                      value={this.state.skillHeading}
                      onChange={this.onChangeskillHeadingName}
                    />
                    <button
                      className="r2add-button button-active"
                      onClick={this.onClickOnAddButtonSkills}
                    >
                      +
                    </button>
                  </div>
                  <hr />
                  <div>
                    {skillsList.map((eachSkill) => (
                      <Skills
                        skillsDetails={eachSkill}
                        onDeleteSkill={this.onDeleteSkill}
                        onUpdateSkillsList={this.onUpdateSkillsList}
                        onClikEnterAfterUpd={this.onClikEnterAfterUpd}
                        onSwapLeft={this.onSwapLeft}
                        onSwapRight={this.onSwapRight}
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
                <div>
                  <div className="lang-top-add-button-container">
                    <input
                      className="summary-head main-margin fontSizeClass"
                      type="text"
                      style={{ color: this.state.styleCol }}
                      value={this.state.LanguageHeading}
                      onChange={this.onChangeLanguageHeadingName}
                    />
                    <button
                      className="button-active"
                      onClick={this.onClickLangAddButton}
                    >
                      +
                    </button>
                  </div>
                  <hr />
                  <div className="total-languages-container">
                    {langList.map((eachLangDetails) => (
                      <Lang
                        eachLangDetails={eachLangDetails}
                        onUpdateLangInputs={this.onUpdateLangInputs}
                        onDeleteLanguage={this.onDeleteLanguage}
                        onSwapeLeftLangCont={this.onSwapeLeftLangCont}
                        onSwapRightLangCont={this.onSwapRightLangCont}
                        key={eachLangDetails.langId}
                      />
                    ))}
                    <div
                      ref={this.popupLangInputContRef}
                      style={styleborderlang}
                    >
                      {langList.length > 0 && showinpPopup && (
                        // <div className="all-widget-pop-up">
                        //   <button onClick={this.onClickDeleteInputContainer}>
                        //     -
                        //   </button>
                        //   <button onClick={this.onClickLangSaveButton}>
                        //     Save
                        //   </button>
                        // </div>
                        <div className="all-widget-pop-upp">
                          <div className="widget-options">
                            <span
                              className="buttonn"
                              onClick={this.onClickDeleteInputContainer}
                            >
                              <FontAwesomeIcon
                                className="icon-style"
                                icon={faTrash}
                              />
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

                      {showInputLangContainer && (
                        <div
                          className="app-lang-inputs-container"
                          // onClick={this.onClikLangInputsContainer}
                        >
                          {" "}
                          <input
                            onChange={this.onChangeLanguageInput}
                            className="r2-language-text"
                            placeholder="Enter Language"
                            value={language}
                            onClick={this.onClikLangInputsContainer}
                            onFocus={this.onFocusOnLanguageInputElement}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                this.languageProficiencyInputRef.focus();
                                // this.setState({ showinpPopup: false });
                              }
                            }}
                            ref={(element) => {
                              this.languageInputRef = element;
                            }}
                          />{" "}
                          <br />
                          <select
                            value={proficiency}
                            onChange={this.onChangeProficiencyInput}
                            className="language-selector-input"
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                this.languageInputRef.focus();
                                this.onClickLangAddButton();
                                this.onhidePopup();
                                this.setState({ showinpPopup: false });
                              }
                            }}
                            ref={(element) => {
                              this.languageProficiencyInputRef = element;
                            }}
                          >
                            <option value="Full Proficient">
                              Full Proficient
                            </option>
                            <option value="Intermidiate">Intermidiate</option>
                            <option value="Bigginer">Bigginer</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="r2Workexperience-container">
                  <div>
                    <div>
                      <div className="d-flex-work-add-button">
                        <div>
                          <input
                            id="subHeadExp"
                            type="text"
                            className="summary-head main-margin fontSizeClass"
                            style={{ color: this.state.styleCol }}
                            value={workexp}
                            onChange={this.onWorkExp}
                          />
                        </div>
                        <div onClick={this.onAddNew}>
                          <button class="button-active edu-button">+</button>
                        </div>
                      </div>
                      <hr />
                      <div>
                        <div className="work-exp-ul-cont">
                          {newAdd.map((each) => (
                            <AddWorkExp
                              newAdd={this.state.newAdd}
                              input1RefPos1={this.input1RefPos1}
                              selectResume={this.state.selectResume}
                              onChangeFunAddWorkChangeValMain={
                                this.onChangeFunAddWorkChangeValMain
                              }
                              onAddNew={this.onAddNew}
                              onSwapWorkExpUpElement={
                                this.onSwapWorkExpUpElement
                              }
                              onSwapWorkExpDownElement={
                                this.onSwapWorkExpDownElement
                              }
                              key={each.id}
                              details={each}
                              OnDeleteMain={this.OnDeleteMain}
                              isTrue={isTrue}
                              deleteDisplay={deleteDisplay}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="add-button-containerCP">
                    <input
                      className="summary-head main-margin fontSizeClass"
                      type="text"
                      style={{ color: this.state.styleCol }}
                      value={this.state.collegeProjHeading}
                      onChange={this.onChangeCollegeProjHeadingName}
                    />
                    <div>
                      <button
                        className="button-active"
                        onClick={this.onClickOnAddButton}
                      >
                        +
                      </button>{" "}
                      <br />
                    </div>
                  </div>
                  <hr />
                  <div className="col-proj-ul-conatiner">
                    {projectsList.map((eachProj) => (
                      <CollegeProject
                        eachProj={eachProj}
                        onDeleteProj={this.onDeleteProj}
                        onUpdateInputs={this.onUpdateInputs}
                        onEnterproj3rdInput={this.onEnterproj3rdInput}
                        onSwapUpElement={this.onSwapUpElement}
                        onSwapDownElement={this.onSwapDownElement}
                        key={eachProj.uniqueId}
                      />
                    ))}
                  </div>
                  {showInputsCp && (
                    <div
                      className="app-input-container"
                      // onClick={this.handleTogglePopupCont}
                      ref={this.popupLCRef}
                    >
                      {projectsList.length > 0 && showInputPopup && (
                        // <div className="all-widget-pop-up">
                        //   <button onClick={this.onClickAppInputsDeleteButton}>
                        //     -
                        //   </button>
                        //   <button onClick={this.onClickCPSaveButton}>
                        //     save
                        //   </button>
                        // </div>
                        <div className="all-widget-pop-upp">
                          <div className="widget-options">
                            <span
                              className="buttonn"
                              onClick={this.onClickAppInputsDeleteButton}
                            >
                              {" "}
                              <FontAwesomeIcon
                                className="icon-style"
                                icon={faTrash}
                              />
                            </span>
                            <span
                              className="buttonn"
                              onClick={this.onHandleMoveUpppp}
                            >
                              {" "}
                              <FontAwesomeIcon
                                icon={faCircleArrowUp}
                                className="icon-style"
                              />
                            </span>
                            <span
                              className="buttonn"
                              onClick={this.onHandleMoveDown}
                            >
                              <FontAwesomeIcon
                                className="icon-style"
                                icon={faCircleArrowDown}
                              />
                            </span>
                          </div>
                          {/* </div> */}
                        </div>
                      )}
                      <div className="input-ul-col-proj">
                        <div
                          style={proj1stInp}
                          className=""
                          onClick={this.handleTogglePopupCont}
                        >
                          <input
                            className="col-proj-input1"
                            onChange={this.onChangeCP}
                            placeholder="College"
                            // onFocus={this.onFocusCollegeProject}
                            ref={(element) => {
                              this.textarea11 = element;
                            }}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                this.textarea22.focus();
                              }
                            }}
                            value={colProjName}
                          />{" "}
                          <br />
                          <textarea
                            onChange={this.onChangeCD}
                            className="bg-cont col-proj-input2 scroll-hidden"
                            placeholder="-Created the Details"
                            rows="1"
                            style={{
                              resize: "none",
                              width: "100%",
                              fontSize: "16px",
                            }}
                            value={colProjCD}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                this.textarea33.focus();
                                this.onChangeCD({ target: this.textarea22 });
                                this.onChangeAD({ target: this.textarea33 });
                              }
                            }}
                            ref={(element) => {
                              this.textarea22 = element;
                            }}
                          />
                          <textarea
                            onChange={this.onChangeAD}
                            placeholder="-Added the details"
                            value={colProjAD}
                            rows="1"
                            className="bg-cont col-proj-input2 scroll-hidden onChangeinp3"
                            style={{
                              resize: "none",
                              width: "100%",
                              fontSize: "16px",
                            }}
                            onKeyDown={(event) => {
                              if (event.key === "Enter") {
                                event.preventDefault();
                                // event.preventDefault();
                                this.onClickOnAddButton();
                                this.textarea11.focus();
                                // this.onChangeCD({ target: this.textarea22 });
                                // this.onChangeAD({ target: this.textarea33 });
                              }
                            }}
                            ref={(element) => {
                              this.textarea33 = element;
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="r2-education-detais-container">
                  <div>
                    <div className="d-flex-work-add-button">
                      <input
                        id="subHeadEducation"
                        className="summary-head main-margin fontSizeClass"
                        type="text"
                        style={{ color: this.state.styleCol }}
                        value={education}
                        onChange={this.onEducation}
                      />
                      <div onClick={() => this.onAddNewEducation(isOk2)}>
                        <button class="button-active">+</button>
                      </div>
                    </div>
                    <hr />
                    <div className="education-ul-cont3">
                      {newAddEducation.map((each) => (
                        <Education
                          inputEnterCity={this.inputEnterCity}
                          inputRefEducationDegree={this.inputRefEducationDegree}
                          onChangeValMainEducation={
                            this.onChangeValMainEducation
                          }
                          key={each.idss}
                          details={each}
                          OnDeleteMainEducation={this.OnDeleteMainEducation}
                          onSwapUpEducation={this.onSwapUpEducation}
                          onSwapDownEducation={this.onSwapDownEducation}
                          checkLen={checkLen}
                          selectResume={this.state.selectResume}
                          onAddNewEducation={this.onAddNewEducation}
                          newAddEducation={this.state.newAddEducation}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <NewpdfComp />
        <div className="main-cont-22-pdf">
          <div className="img-text-cont">
            <div id="disProfile" className="">
              <img
                className="profile-img"
                alt="img1"
                src={this.state.profileUrl}
              />
            </div>
            <div className="main-text-cont">
              <h1 className="main-head-name">{this.state.mainHeadYour}</h1>

              <p id="disRole" className="main-role">
                {this.state.Profession}
              </p>
              <p id="disAbout" className="main-para">
                {this.state.aboutHeadlineResume2}
              </p>
            </div>
          </div>
          <div className="mb-3">
            <hr className="hr-line-top1" />
            <div className="email-phone-cont all-para-font-email">
              <div id="disEmail" className="icon-text-cont">
                <div>
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <p className="each-margin-email">{this.state.email}</p>
              </div>
              <div id="disPhone" className="icon-text-cont">
                <div>
                  <i className="fa-solid fa-phone"></i>
                </div>
                <p className="each-margin-email">{this.state.phone}</p>
              </div>
              <div id="disLinkedin" className="icon-text-cont">
                <div>
                  <i className="fa-brands fa-linkedin"></i>
                </div>
                <p className="each-margin-email">{this.state.linkedin}</p>
              </div>
            </div>
            <hr className="hr-line-top2" />
          </div>
          <div className="work-skills-cont">
            <div className="work-cont">
              <h1 className="all-side-head">WORK EXPERIENCE</h1>
              <div id="workExp">
                {this.state.newAdd.map((num, index) => (
                  <React.Fragment key={index}>
                    <p className="all-side-side-head-sub">
                      {num.positionVal}
                      <span style={{ fontSize: "1px", color: "white" }}>#</span>
                    </p>
                    <p className="all-side-side-head-sub2">
                      {num.employerVal}
                      <span style={{ fontSize: "1px", color: "white" }}>#</span>
                    </p>
                    <p className="all-para-font">
                      {num.fromDateValue} - {num.toDateValue}
                      <span style={{ fontSize: "1px", color: "white" }}>#</span>
                    </p>
                    <p className="all-para-font-work extra-margin-map">
                      {num.workVal}
                      <span style={{ fontSize: "1px", color: "white" }}>#</span>
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="skills-other-cont">
              <div id="disSkills" className="skills-cont">
                <h1 className="all-side-head skills-margin">SKILLS</h1>
                <div className="each-skills-cont" id="skills1">
                  {this.state.skillsList.map((num, index) => (
                    <p key={index} className="each-skills">
                      {num.skill}
                      <span style={{ fontSize: "1px", color: "white" }}>#</span>
                    </p>
                  ))}
                </div>
              </div>
              <div className="honour-cont" id="honorDis">
                <h1 className="all-side-head">HONOR AWARDS</h1>
                <div id="honor">
                  {this.state.honorAwardsList.map((num, index) => (
                    <React.Fragment key={index}>
                      <p className="all-side-side-head-sub">
                        {num.awardName}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-side-side-head-sub2 extra-margin-map">
                        {num.Organization}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div>
                <h1 className="all-side-head">EDUCATION</h1>

                <div id="education">
                  {this.state.newAddEducation.map((num, index) => (
                    <React.Fragment key={index}>
                      <p className="all-side-side-head-sub">
                        {num.degreeVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-side-side-head-sub2">
                        {num.schoolVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                      <p className="all-para-font extra-margin-map">
                        {num.fromSchoolVal} - {num.toSchoolVal}
                        <span style={{ fontSize: "1px", color: "white" }}>
                          #
                        </span>
                      </p>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResumePage;
